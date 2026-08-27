<?php
if (!defined('ABSPATH')) {
  exit;
}

function sf_maybe_publish($force = false) {
  $cfg = sf_settings();
  $tz = $cfg['timezone'] ?: 'Asia/Kolkata';
  $now = new DateTimeImmutable('now', new DateTimeZone($tz));
  $weekday = (int) $now->format('w');
  $days = array_map('intval', $cfg['publishWeekdays'] ?? [2, 5]);

  if (!$force && !in_array($weekday, $days, true)) {
    return ['ok' => true, 'skipped' => 'not-publish-weekday', 'created' => false];
  }

  $latest = sf_latest($cfg, $now);
  if (!$latest) {
    return ['ok' => false, 'error' => 'no-post', 'created' => false];
  }

  $existing = get_page_by_path($latest['id'], OBJECT, 'sf_update');
  $created = false;
  if (!$existing) {
    $id = wp_insert_post([
      'post_type' => 'sf_update',
      'post_status' => 'publish',
      'post_name' => $latest['id'],
      'post_title' => $latest['title'],
      'post_excerpt' => $latest['summary'],
      'post_content' => '<p>' . esc_html($latest['body']) . '</p><p>' . esc_html($latest['summary']) . '</p>',
      'post_date' => substr($latest['publishedAt'], 0, 19),
      'meta_input' => [
        'sf_category' => $latest['category'],
        'sf_location' => $latest['location'],
      ],
    ], true);
    $created = !is_wp_error($id);
  }

  $urls = [home_url('/'), sf_list_url(), sf_post_url($latest['id']), home_url('/sitemap.xml')];
  $indexNow = sf_indexnow($urls, $cfg['indexNowKey'] ?? '');

  return [
    'ok' => true,
    'created' => $created,
    'published' => $latest['id'],
    'title' => $latest['title'],
    'urls' => $urls,
    'indexNow' => $indexNow,
  ];
}

function sf_indexnow(array $urls, $key) {
  if (!$key) {
    return ['skipped' => 'no-key'];
  }
  $payload = wp_json_encode([
    'host' => wp_parse_url(home_url(), PHP_URL_HOST),
    'key' => $key,
    'keyLocation' => home_url('/' . $key . '.txt'),
    'urlList' => $urls,
  ]);
  $results = [];
  foreach (['https://api.indexnow.org/indexnow', 'https://www.bing.com/indexnow'] as $endpoint) {
    $res = wp_remote_post($endpoint, [
      'headers' => ['Content-Type' => 'application/json; charset=utf-8'],
      'body' => $payload,
      'timeout' => 12,
    ]);
    $results[] = [
      'endpoint' => $endpoint,
      'ok' => !is_wp_error($res) && wp_remote_retrieve_response_code($res) < 400,
      'status' => is_wp_error($res) ? 0 : wp_remote_retrieve_response_code($res),
    ];
  }
  return $results;
}

function sf_register_rest() {
  register_rest_route('seo-freshness/v1', '/health', [
    'methods' => 'GET',
    'permission_callback' => '__return_true',
    'callback' => function () {
      $cfg = sf_settings();
      $latest = sf_latest($cfg);
      return rest_ensure_response([
        'ok' => true,
        'brand' => $cfg['brand'],
        'list' => sf_list_url(),
        'latestId' => $latest['id'] ?? null,
        'hasIndexNowKey' => !empty($cfg['indexNowKey']),
      ]);
    },
  ]);
  register_rest_route('seo-freshness/v1', '/publish', [
    'methods' => ['GET', 'POST'],
    'permission_callback' => function ($req) {
      $cfg = sf_settings();
      $key = $req->get_param('key');
      if (is_user_logged_in() && current_user_can('manage_options')) {
        return true;
      }
      return $cfg['secret'] && hash_equals($cfg['secret'], (string) $key);
    },
    'callback' => function () {
      return rest_ensure_response(sf_maybe_publish(true));
    },
  ]);
}
