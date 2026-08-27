<?php
get_header();
the_post();
$cat = get_post_meta(get_the_ID(), 'sf_category', true);
$loc = get_post_meta(get_the_ID(), 'sf_location', true);
?>
<main class="sf-wrap">
  <p class="sf-kicker"><?php echo esc_html($cat . ($loc ? ' · ' . $loc : '')); ?></p>
  <h1><?php the_title(); ?></h1>
  <p class="sf-date"><?php echo esc_html(get_the_date()); ?></p>
  <div class="sf-body"><?php the_content(); ?></div>
  <p><a href="<?php echo esc_url(get_post_type_archive_link('sf_update')); ?>">← All updates</a></p>
</main>
<?php
get_footer();
