<?php
if (!defined('WP_UNINSTALL_PLUGIN')) {
  exit;
}
wp_clear_scheduled_hook('sf_daily_tick');
delete_option('sf_settings');
