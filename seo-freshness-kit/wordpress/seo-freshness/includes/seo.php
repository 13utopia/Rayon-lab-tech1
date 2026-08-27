<?php
if (!defined('ABSPATH')) {
  exit;
}

add_filter('document_title_parts', function ($parts) {
  if (is_singular('sf_update') || is_post_type_archive('sf_update')) {
    $parts['site'] = sf_settings()['brand'];
  }
  return $parts;
});

add_filter('robots_txt', function ($output) {
  $output .= "\nSitemap: " . home_url('/wp-sitemap.xml') . "\n";
  $output .= "User-agent: GPTBot\nAllow: /\n";
  $output .= "User-agent: ClaudeBot\nAllow: /\n";
  $output .= "User-agent: PerplexityBot\nAllow: /\n";
  return $output;
});

add_action('wp_head', function () {
  if (!is_singular('sf_update')) {
    return;
  }
  $url = get_permalink();
  $title = get_the_title();
  $desc = wp_strip_all_tags(get_the_excerpt() ?: get_the_title());
  echo '<link rel="canonical" href="' . esc_url($url) . '" />' . "\n";
  echo '<meta name="description" content="' . esc_attr($desc) . '" />' . "\n";
  echo '<meta property="og:title" content="' . esc_attr($title) . '" />' . "\n";
  echo '<meta property="og:description" content="' . esc_attr($desc) . '" />' . "\n";
  echo '<meta property="og:url" content="' . esc_url($url) . '" />' . "\n";
  echo '<meta property="og:type" content="article" />' . "\n";
}, 5);

function sf_jsonld() {
  $cfg = sf_settings();
  if (is_post_type_archive('sf_update')) {
    $q = new WP_Query(['post_type' => 'sf_update', 'posts_per_page' => 20, 'post_status' => 'publish']);
    $items = [];
    $i = 1;
    foreach ($q->posts as $post) {
      $items[] = [
        '@type' => 'ListItem',
        'position' => $i++,
        'url' => get_permalink($post),
        'name' => get_the_title($post),
      ];
    }
    echo '<script type="application/ld+json">' . wp_json_encode([
      '@context' => 'https://schema.org',
      '@type' => 'ItemList',
      'name' => $cfg['brand'] . ' updates',
      'itemListElement' => $items,
    ]) . '</script>' . "\n";
    return;
  }

  if (is_singular('sf_update')) {
    $post = get_queried_object();
    echo '<script type="application/ld+json">' . wp_json_encode([
      '@context' => 'https://schema.org',
      '@type' => 'BlogPosting',
      'headline' => get_the_title($post),
      'datePublished' => get_the_date('c', $post),
      'dateModified' => get_the_modified_date('c', $post),
      'description' => get_the_excerpt($post),
      'author' => ['@type' => 'Organization', 'name' => $cfg['brand']],
      'publisher' => ['@type' => 'Organization', 'name' => $cfg['brand']],
      'mainEntityOfPage' => get_permalink($post),
    ]) . '</script>' . "\n";
  }
}

function sf_maybe_llms() {
  $uri = trim((string) parse_url($_SERVER['REQUEST_URI'] ?? '', PHP_URL_PATH), '/');
  $cfg = sf_settings();
  $key = $cfg['indexNowKey'] ?? '';

  if ($key && ($uri === $key . '.txt' || $uri === $key)) {
    header('Content-Type: text/plain; charset=utf-8');
    echo $key;
    exit;
  }

  if ($uri !== 'llms.txt') {
    return;
  }

  header('Content-Type: text/plain; charset=utf-8');
  echo '# ' . $cfg['brand'] . "\n\n";
  echo $cfg['brand'] . ' — ' . $cfg['city'] . ', ' . $cfg['region'] . ".\n";
  echo 'Phone: ' . $cfg['phone'] . "\nEmail: " . $cfg['email'] . "\n\n";
  echo "Updates: " . sf_list_url() . "\n";
  echo 'Sitemap: ' . home_url('/wp-sitemap.xml') . "\n";
  exit;
}
