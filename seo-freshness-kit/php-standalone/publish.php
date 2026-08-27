<?php
require __DIR__ . '/feed.php';
$cfg = require __DIR__ . '/config.php';
$key = $_GET['key'] ?? '';
if (!hash_equals((string) ($cfg['secret'] ?? ''), (string) $key)) {
  http_response_code(401);
  header('Content-Type: application/json');
  echo json_encode(['ok' => false, 'error' => 'Unauthorized']);
  exit;
}

$post = sf_latest($cfg);
$origin = rtrim($cfg['siteUrl'], '/');
$list = $cfg['listPath'] ?? 'updates';
$urls = [
  $origin . '/',
  $origin . '/' . $list . '/',
  $origin . '/' . $list . '/' . ($post['id'] ?? ''),
  $origin . '/sitemap-updates.xml',
];

$indexNow = ['skipped' => 'no-key'];
$inkey = $cfg['indexNowKey'] ?? '';
if ($inkey && $post) {
  $payload = json_encode([
    'host' => parse_url($origin, PHP_URL_HOST),
    'key' => $inkey,
    'keyLocation' => $origin . '/' . $inkey . '.txt',
    'urlList' => $urls,
  ]);
  $indexNow = [];
  foreach (['https://api.indexnow.org/indexnow', 'https://www.bing.com/indexnow'] as $endpoint) {
    $ctx = stream_context_create([
      'http' => [
        'method' => 'POST',
        'header' => "Content-Type: application/json\r\n",
        'content' => $payload,
        'timeout' => 12,
      ],
    ]);
    $ok = @file_get_contents($endpoint, false, $ctx) !== false;
    $indexNow[] = ['endpoint' => $endpoint, 'ok' => $ok];
  }
}

header('Content-Type: application/json; charset=utf-8');
echo json_encode([
  'ok' => true,
  'published' => $post['id'] ?? null,
  'title' => $post['title'] ?? null,
  'urls' => $urls,
  'indexNow' => $indexNow,
]);
