<?php
/**
 * Deterministic freshness posts. Shared by WordPress plugin and PHP standalone.
 */
function sf_pad($n) {
  return str_pad((string) $n, 2, '0', STR_PAD_LEFT);
}

function sf_parts($now, $tz = 'Asia/Kolkata') {
  $dt = $now instanceof DateTimeImmutable ? $now : new DateTimeImmutable('now', new DateTimeZone($tz));
  $dt = $dt->setTimezone(new DateTimeZone($tz));
  return [
    'year' => (int) $dt->format('Y'),
    'month' => (int) $dt->format('n'),
    'day' => (int) $dt->format('j'),
    'weekday' => (int) $dt->format('w'),
  ];
}

function sf_slots(array $cfg, $now = null) {
  $tz = $cfg['timezone'] ?? 'Asia/Kolkata';
  $keep = (int) ($cfg['postsToKeep'] ?? 40);
  $days = $cfg['publishWeekdays'] ?? [2, 5];
  $prefix = $cfg['idPrefix'] ?? 'upd';
  $now = $now instanceof DateTimeImmutable ? $now : new DateTimeImmutable('now', new DateTimeZone($tz));
  $slots = [];
  $p = sf_parts($now, $tz);
  for ($i = 0; $i < 400 && count($slots) < $keep; $i++) {
    if (in_array($p['weekday'], $days, true)) {
      $id = $prefix . '-' . $p['year'] . sf_pad($p['month']) . sf_pad($p['day']);
      $slots[] = $p + ['id' => $id];
    }
    $prev = (new DateTimeImmutable(sprintf('%04d-%02d-%02d', $p['year'], $p['month'], $p['day']), new DateTimeZone($tz)))->modify('-1 day');
    $p = sf_parts($prev, $tz);
  }
  return $slots;
}

function sf_display_date($y, $m, $d) {
  return (new DateTimeImmutable(sprintf('%04d-%02d-%02d', $y, $m, $d)))->format('j M Y');
}

function sf_build_post(array $cfg, array $slot, $index, $now = null) {
  $cats = $cfg['categories'] ?? ['Update'];
  $locs = $cfg['locations'] ?? [$cfg['city'] ?? 'Yard'];
  $images = $cfg['images'] ?? [];
  $templates = $cfg['titleTemplates'] ?? ['{category} at {location} — {date}'];
  $category = $cats[$index % count($cats)];
  $location = $locs[$index % count($locs)];
  $date = sf_display_date($slot['year'], $slot['month'], $slot['day']);
  $title = strtr($templates[$index % count($templates)], [
    '{category}' => $category,
    '{location}' => $location,
    '{date}' => $date,
  ]);
  $image = $images ? $images[$index % count($images)] : '';
  $published = sprintf('%04d-%02d-%02dT07:00:00+05:30', $slot['year'], $slot['month'], $slot['day']);
  $brand = $cfg['brand'] ?? 'Company';
  $city = $cfg['city'] ?? '';
  $region = $cfg['region'] ?? '';
  return [
    'id' => $slot['id'],
    'title' => $title,
    'category' => $category,
    'location' => $location,
    'publishedAt' => $published,
    'dateLabel' => $date,
    'image' => $image,
    'summary' => "{$category} inspected at {$location} on {$date}. {$brand} — {$city}.",
    'body' => "{$brand} recorded a {$category} consignment at {$location} on {$date}. Material is tagged for dispatch from {$city}, {$region}.",
  ];
}

function sf_posts(array $cfg, $now = null) {
  $slots = sf_slots($cfg, $now);
  $out = [];
  foreach ($slots as $i => $slot) {
    $out[] = sf_build_post($cfg, $slot, $i, $now);
  }
  return $out;
}

function sf_latest(array $cfg, $now = null) {
  $posts = sf_posts($cfg, $now);
  return $posts[0] ?? null;
}
