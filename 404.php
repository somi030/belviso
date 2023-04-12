<?php get_header(); ?>

<section class="not-found">
    <div class="container">
        <h1 class="not-found__title">
            404
        </h1>
        <p class="not-found__description">Strani ki jo iščete ni bilo mogoče najti</p>
        <a class="not-found__link" href="<?php echo home_url('/'); ?>">Pojdi na domačo stran.<?php get_template_part('partials/icons/arrow-right-icon'); ?></a>
    </div>
</section>

<?php get_footer(); ?>