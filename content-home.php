<?php
/**
 * Template Name: Page - Home
 * The template used for displaying page content in page.php
 *
 * @author Johnson Huynh | http://students.washington.edu/huynhjjk/info343/finalproject
 * @package upBootWP 0.1
 */
get_header(); ?>
<!-- Begin page content -->
<div class="container">
  <!-- Posts -->
  <?php while (have_posts()) : the_post(); ?>
  <!-- Content -->
  <?php the_content(); ?>
  <?php endwhile; // end of the loop. ?>
  <?php
    wp_link_pages(array(
      'before' => '<div class="page-links">'.__('Pages:', 'upbootwp'),
      'after'  => '</div>',
    ));
  ?>
</div>
<?php get_footer(); ?>