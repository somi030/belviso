<?php get_header(); ?>

    <?php
    while (have_posts()) {
        the_post();
        the_content();
    }

    wp_reset_query();
    ?>


<?php get_footer(); ?>