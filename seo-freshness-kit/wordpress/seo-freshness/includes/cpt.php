<?php
if (!defined('ABSPATH')) {
  exit;
}

function sf_register_cpt() {
  register_post_type('sf_update', [
    'labels' => [
      'name' => 'Freshness updates',
      'singular_name' => 'Update',
    ],
    'public' => true,
    'has_archive' => true,
    'rewrite' => ['slug' => 'updates', 'with_front' => false],
    'supports' => ['title', 'editor', 'excerpt', 'thumbnail', 'custom-fields'],
    'show_in_rest' => true,
    'show_in_nav_menus' => true,
    'menu_icon' => 'dashicons-rss',
  ]);
}

add_filter('template_include', function ($template) {
  if (is_singular('sf_update')) {
    return SF_DIR . 'templates/single.php';
  }
  if (is_post_type_archive('sf_update')) {
    return SF_DIR . 'templates/archive.php';
  }
  return $template;
});

add_action('wp_enqueue_scripts', function () {
  if (is_singular('sf_update') || is_post_type_archive('sf_update')) {
    wp_enqueue_style('sf-front', plugins_url('assets/front.css', SF_FILE), [], '1.0.0');
  }
});
