<?php
/**
 * Plugin Name: SEO Freshness Feed
 * Description: Unique update URLs on a weekday cadence, sitemap lastmod, IndexNow, and llms.txt. Works with Yoast/Rank Math.
 * Version: 1.0.0
 * Requires at least: 6.0
 * Requires PHP: 7.4
 */

if (!defined('ABSPATH')) {
  exit;
}

define('SF_DIR', plugin_dir_path(__FILE__));
define('SF_FILE', __FILE__);

require_once SF_DIR . 'includes/feed.php';
require_once SF_DIR . 'includes/helpers.php';
require_once SF_DIR . 'includes/cpt.php';
require_once SF_DIR . 'includes/publish.php';
require_once SF_DIR . 'includes/seo.php';
require_once SF_DIR . 'includes/admin.php';

register_activation_hook(__FILE__, 'sf_activate');
register_deactivation_hook(__FILE__, 'sf_deactivate');

function sf_activate() {
  sf_register_cpt();
  if (!wp_next_scheduled('sf_daily_tick')) {
    wp_schedule_event(time() + 120, 'daily', 'sf_daily_tick');
  }
  flush_rewrite_rules();
  sf_maybe_publish(true);
}

function sf_deactivate() {
  wp_clear_scheduled_hook('sf_daily_tick');
  flush_rewrite_rules();
}

add_action('sf_daily_tick', 'sf_maybe_publish');
add_action('init', 'sf_register_cpt');
add_action('rest_api_init', 'sf_register_rest');
add_action('template_redirect', 'sf_maybe_llms');
add_action('wp_head', 'sf_jsonld', 30);

add_action('admin_post_sf_publish_now', function () {
  if (!current_user_can('manage_options')) {
    wp_die('Forbidden');
  }
  check_admin_referer('sf_publish_now');
  $result = sf_maybe_publish(true);
  wp_safe_redirect(add_query_arg('sf_done', $result['created'] ? '1' : '0', admin_url('options-general.php?page=seo-freshness')));
  exit;
});
