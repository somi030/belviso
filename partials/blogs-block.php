<?php
$title = get_field('title');
$subtitle = get_field('subtitle');

$blogs = get_posts(array(
    'numberposts' => 2,
    'post_type'   => 'blog',
    'orderby'     => 'date',
    'order'       => 'DESC',
    'post_status' => 'publish',
));
?>

<section class="blogs">
    <div class="container">

        <div class="row">
            <div class="col-12">

                <h2 class="blogs__title"><?php echo $title ?></h2>
                <div class="blogs__emblem emblem"><?php echo get_template_part('partials/icons/emblem-icon'); ?></div>
                <div class="blogs__subtitle subtitle"><?php echo $subtitle ?></div>


            </div>
        </div>

        <div class="blogs__blogs">
            <div class="row">
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
                        <div class="col-sm-6 col-12">
                            <?php
                            get_template_part('partials/sub-partials/blog-block');
                            ?>
                        </div>
                <?php }
                    wp_reset_postdata();
                } ?>
            </div>
        </div>

    </div>
</section>