<?php
$cfg = require __DIR__ . '/config.php';
header('Content-Type: text/plain; charset=utf-8');
echo '# ' . $cfg['brand'] . "\n\n";
echo $cfg['brand'] . ' — ' . $cfg['city'] . ', ' . $cfg['region'] . ".\n";
echo 'Updates: ' . rtrim($cfg['siteUrl'], '/') . '/' . ($cfg['listPath'] ?? 'updates') . "/\n";
echo 'Sitemap: ' . rtrim($cfg['siteUrl'], '/') . "/sitemap-updates.xml\n";
