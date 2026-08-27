<?php
get_header();
?>
<main class="sf-wrap">
  <h1>Updates</h1>
  <p class="sf-lead"><?php echo esc_html(sf_settings()['brand']); ?> — latest stock and dispatch notes.</p>
  <?php if (have_posts()) : ?>
    <ul class="sf-list">
      <?php while (have_posts()) : the_post(); ?>
        <li>
          <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
          <span><?php echo esc_html(get_the_date()); ?></span>
        </li>
      <?php endwhile; ?>
    </ul>
  <?php else : ?>
    <p>No updates yet. Use Settings → SEO Freshness → Publish latest slot now.</p>
  <?php endif; ?>
</main>
<?php
get_footer();
