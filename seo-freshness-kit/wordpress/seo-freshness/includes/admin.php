<?php
if (!defined('ABSPATH')) {
  exit;
}

add_action('admin_menu', function () {
  add_options_page('SEO Freshness', 'SEO Freshness', 'manage_options', 'seo-freshness', 'sf_settings_page');
});

add_action('admin_init', function () {
  register_setting('sf_settings_group', 'sf_settings', [
    'sanitize_callback' => 'sf_sanitize_settings',
  ]);
});

function sf_lines($value) {
  if (is_array($value)) {
    return array_values(array_filter(array_map('trim', $value)));
  }
  return array_values(array_filter(array_map('trim', preg_split('/\r\n|\r|\n/', (string) $value))));
}

function sf_sanitize_settings($input) {
  $cur = sf_settings();
  $days = array_values(array_filter(array_map('intval', preg_split('/[,\s]+/', (string) ($input['publishWeekdays'] ?? '2,5')))));
  return [
    'brand' => sanitize_text_field($input['brand'] ?? $cur['brand']),
    'city' => sanitize_text_field($input['city'] ?? $cur['city']),
    'region' => sanitize_text_field($input['region'] ?? $cur['region']),
    'timezone' => sanitize_text_field($input['timezone'] ?? 'Asia/Kolkata'),
    'phone' => sanitize_text_field($input['phone'] ?? ''),
    'email' => sanitize_email($input['email'] ?? ''),
    'idPrefix' => sanitize_title($input['idPrefix'] ?? 'upd'),
    'postsToKeep' => 40,
    'publishWeekdays' => $days ?: [2, 5],
    'categories' => sf_lines($input['categories'] ?? ''),
    'locations' => sf_lines($input['locations'] ?? ''),
    'titleTemplates' => sf_lines($input['titleTemplates'] ?? ''),
    'indexNowKey' => preg_replace('/[^a-zA-Z0-9]/', '', $input['indexNowKey'] ?? ''),
    'secret' => sanitize_text_field($input['secret'] ?? $cur['secret']),
    'siteUrl' => home_url(),
  ];
}

function sf_settings_page() {
  $s = sf_settings();
  $cron = rest_url('seo-freshness/v1/publish') . '?key=' . rawurlencode($s['secret']);
  ?>
  <div class="wrap">
    <h1>SEO Freshness Feed</h1>
    <p>Creates a unique <code>/updates/{id}</code> post on each publish weekday, pings IndexNow, and adds schema. Yoast/Rank Math will pick up the posts automatically.</p>
    <?php if (isset($_GET['sf_done'])) : ?>
      <div class="notice notice-success"><p>Publish ran. Check <a href="<?php echo esc_url(sf_list_url()); ?>">Updates</a>.</p></div>
    <?php endif; ?>
    <form method="post" action="options.php">
      <?php settings_fields('sf_settings_group'); ?>
      <table class="form-table">
        <tr><th>Brand</th><td><input class="regular-text" name="sf_settings[brand]" value="<?php echo esc_attr($s['brand']); ?>"></td></tr>
        <tr><th>City</th><td><input name="sf_settings[city]" value="<?php echo esc_attr($s['city']); ?>"></td></tr>
        <tr><th>Region</th><td><input name="sf_settings[region]" value="<?php echo esc_attr($s['region']); ?>"></td></tr>
        <tr><th>Phone</th><td><input class="regular-text" name="sf_settings[phone]" value="<?php echo esc_attr($s['phone']); ?>"></td></tr>
        <tr><th>Email</th><td><input class="regular-text" name="sf_settings[email]" value="<?php echo esc_attr($s['email']); ?>"></td></tr>
        <tr><th>Weekdays (0=Sun)</th><td><input class="regular-text" name="sf_settings[publishWeekdays]" value="<?php echo esc_attr(implode(',', $s['publishWeekdays'])); ?>"> e.g. 2,5 for Tue,Fri</td></tr>
        <tr><th>Categories (one per line)</th><td><textarea name="sf_settings[categories]" rows="5" class="large-text"><?php echo esc_textarea(implode("\n", $s['categories'])); ?></textarea></td></tr>
        <tr><th>Locations (one per line)</th><td><textarea name="sf_settings[locations]" rows="4" class="large-text"><?php echo esc_textarea(implode("\n", $s['locations'])); ?></textarea></td></tr>
        <tr><th>Title templates</th><td><textarea name="sf_settings[titleTemplates]" rows="3" class="large-text"><?php echo esc_textarea(implode("\n", $s['titleTemplates'])); ?></textarea><p class="description">Use {category} {location} {date}</p></td></tr>
        <tr><th>IndexNow key</th><td><input class="regular-text" name="sf_settings[indexNowKey]" value="<?php echo esc_attr($s['indexNowKey']); ?>"><p>32-character hex. Also served at <code>/YOURKEY.txt</code></p></td></tr>
        <tr><th>Cron secret</th><td><input class="regular-text" name="sf_settings[secret]" value="<?php echo esc_attr($s['secret']); ?>"></td></tr>
      </table>
      <?php submit_button(); ?>
    </form>
    <h2>Real cron (recommended)</h2>
    <p>WP-Cron only runs when someone visits. Add this to cPanel / server crontab (twice a week is enough):</p>
    <p><code>30 7 * * 2,5 curl -s "<?php echo esc_url($cron); ?>"</code></p>
    <p>
      <a class="button button-primary" href="<?php echo esc_url(wp_nonce_url(admin_url('admin-post.php?action=sf_publish_now'), 'sf_publish_now')); ?>">Publish latest slot now</a>
    </p>
  </div>
  <?php
}
