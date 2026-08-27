<?php
/**
 * Drop this folder on any PHP host (not only WordPress).
 * URLs: /updates/           list
 *       /updates/{id}       post
 *       /sitemap-updates.xml
 *       /publish.php?key=SECRET
 */
require __DIR__ . '/feed.php';

$cfgFile = __DIR__ . '/config.php';
if (!file_exists($cfgFile)) {
  http_response_code(500);
  echo 'Copy config.example.php to config.php';
  exit;
}
$cfg = require $cfgFile;
$path = trim(parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH), '/');
$posts = sf_posts($cfg);
$list = $cfg['listPath'] ?? 'updates';

function sf_h($s) {
  return htmlspecialchars((string) $s, ENT_QUOTES, 'UTF-8');
}

if ($path === 'sitemap-updates.xml' || $path === 'sitemap.xml') {
  header('Content-Type: application/xml; charset=utf-8');
  $origin = rtrim($cfg['siteUrl'], '/');
  echo "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n";
  foreach ($posts as $p) {
    echo '  <url><loc>' . esc($origin . '/' . $list . '/' . $p['id']) . '</loc><lastmod>' . substr($p['publishedAt'], 0, 10) . "</lastmod></url>\n";
  }
  echo "</urlset>";
  exit;
}

if (preg_match('#^' . preg_quote($list, '#') . '/([^/]+)$#', $path, $m)) {
  $post = null;
  foreach ($posts as $p) {
    if ($p['id'] === $m[1]) {
      $post = $p;
      break;
    }
  }
  if (!$post) {
    http_response_code(404);
    echo 'Not found';
    exit;
  }
  $url = rtrim($cfg['siteUrl'], '/') . '/' . $list . '/' . $post['id'];
  $ld = [
    '@context' => 'https://schema.org',
    '@type' => 'BlogPosting',
    'headline' => $post['title'],
    'datePublished' => $post['publishedAt'],
    'description' => $post['summary'],
    'mainEntityOfPage' => $url,
  ];
  header('Content-Type: text/html; charset=utf-8');
  echo '<!doctype html><html lang="en"><head><meta charset="utf-8"><title>' . esc($post['title']) . '</title>';
  echo '<meta name="description" content="' . esc($post['summary']) . '">';
  echo '<link rel="canonical" href="' . esc($url) . '">';
  echo '<script type="application/ld+json">' . json_encode($ld) . '</script></head><body>';
  echo '<article><h1>' . esc($post['title']) . '</h1><p>' . esc($post['body']) . '</p></article></body></html>';
  exit;
}

header('Content-Type: text/html; charset=utf-8');
echo '<!doctype html><html><head><meta charset="utf-8"><title>Updates</title></head><body><h1>Updates</h1><ul>';
foreach ($posts as $p) {
  echo '<li><a href="/' . esc($list) . '/' . esc($p['id']) . '">' . esc($p['title']) . '</a></li>';
}
echo '</ul></body></html>';
