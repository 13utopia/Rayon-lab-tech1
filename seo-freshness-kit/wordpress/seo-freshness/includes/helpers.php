<?php
if (!defined('ABSPATH')) {
  exit;
}

function sf_defaults() {
  return [
    'siteUrl' => home_url(),
    'brand' => get_bloginfo('name'),
    'city' => 'Ahmedabad',
    'region' => 'Gujarat',
    'timezone' => 'Asia/Kolkata',
    'publishWeekdays' => [2, 5],
    'idPrefix' => 'upd',
    'postsToKeep' => 40,
    'phone' => '',
    'email' => get_option('admin_email'),
    'categories' => ['Stock update', 'Dispatch', 'Inspection'],
    'locations' => ['Main yard', 'Dispatch hub'],
    'titleTemplates' => [
      '{category} ready stock at {location} — {date}',
      'Inspected {category} received at {location} ({date})',
    ],
    'images' => [],
    'indexNowKey' => '',
    'secret' => wp_generate_password(20, false),
  ];
}

function sf_settings() {
  $saved = get_option('sf_settings', []);
  return array_merge(sf_defaults(), is_array($saved) ? $saved : []);
}

function sf_list_url() {
  return home_url('/updates/');
}

function sf_post_url($id) {
  return home_url('/updates/' . $id . '/');
}
