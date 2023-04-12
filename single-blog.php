<?php get_header();
$single_blog = get_field('single_blog', 'options');
$image =  $single_blog['background_image'];
$title =  $single_blog['breadcrumb_title'];
$links = $single_blog['breadcrumb_links'];
?>

<section class="breadcrumb d-flex flex-column justify-content-center" style="<?php defineBackgroundImage($image) ?>">
    <div class="breadcrumb__backdrop"></div>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="breadcrumb__title"><?php echo $title ?></h1>

                <div class="breadcrumb__links">
                    <?php foreach ($links as $link) { ?>
                        <a href="<?php echo $link['breadcrumb_link']['url'] ?>" class="breadcrumb__link"><b><?php echo $link['breadcrumb_link']['title'] ?> / </b></a>
                    <?php } ?>
                    <span class="breadcrumb__link"><?php echo esc_html(the_title()) ?></span>
                </div>
            </div>
        </div>

    </div>
</section>

<section class="single-blog">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="single-blog__title"><?php echo esc_html(the_title()) ?></h1>
                <div class="single-blog__date"><?php echo get_the_date('d/m/Y') ?></div>

                <div class="single-blog__split">
                    <div class="single-blog__split-line"></div>
                    <div class="single-blog__split-emblem"><?php echo get_template_part('partials/icons/full-emblem-icon'); ?></div>
                </div>

                <div class="single-blog__content">
                    <?php
                    while (have_posts()) {
                        the_post();
                        the_content();
                    } ?>
                </div>
            </div>
        </div>
    </div>
</section>

<?php
wp_reset_query();
get_footer();
?>