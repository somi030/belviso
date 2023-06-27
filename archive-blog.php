<?php get_header();
$blog_listing = get_field('blog_listing', 'options');
$image =  $blog_listing['background_image'];
$title =  $blog_listing['breadcrumb_title'];
$links = $blog_listing['breadcrumb_links'];
$title = $blog_listing['title'];
$description = $blog_listing['description'];

$blogs = get_posts(array(
    'numberposts' => -1,
    'post_type'   => 'blog',
    'orderby'     => 'date',
    'order'       => 'DESC',
    'post_status' => 'publish',
));
?>

<section class="breadcrumb d-flex flex-column justify-content-center" style="<?php defineBackgroundImage($image) ?>">
    <div class="breadcrumb__backdrop"></div>
    <div class="container d-none d-md-block">

        <div class="row">
            <div class="col-12">
                <h1 class="breadcrumb__title"><?php echo $title ?></h1>

                <div class="breadcrumb__links">
                    <?php foreach ($links as $link) { ?>
                        <?php if ($link['breadcrumb_link']['url'] === "#") { ?>
                            <span class="breadcrumb__link"><?php echo $link['breadcrumb_link']['title'] ?></span>
                        <?php } else { ?>
                            <a href="<?php echo $link['breadcrumb_link']['url'] ?>" class="breadcrumb__link"><b><?php echo $link['breadcrumb_link']['title'] ?> / </b></a>
                        <?php } ?>
                    <?php } ?>
                </div>
            </div>
        </div>

    </div>
</section>

<?php get_template_part(
    'partials/templates/page-start',
    null,
    array(
        'class'   => 'blogs-list',
        'search'  => true,
        'title' => $title,
        'description' =>  $description,
    )
); ?>
<div class="row">
    <div class="col-12">
        <?php
        if ($blogs) {
            foreach ($blogs as $blog) { ?>
                <?php
                $blogData = array(
                    'blog'    => $blog,
                    'image-size' => 'read-more'
                );
                set_query_var('blogData', $blogData);
                ?>

                <?php
                get_template_part('partials/sub-partials/full-blog-block');
                ?>

        <?php }
            wp_reset_postdata();
        } ?>
    </div>
</div>

<?php get_template_part('partials/templates/page-end'); ?>

<?php
get_footer();
?>