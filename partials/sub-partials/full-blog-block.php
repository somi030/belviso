<?php global $post; ?>
<?php $data = get_query_var('blogData'); ?>
<?php setup_postdata($post = $data['blog']); ?>

<div class="blogs-list__blog">
    <div class="row">
        <div class="col-4">
            <?php $image = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), $data['image-size']); ?>
            <img src="<?php echo $image[0] ?>" class="blogs-list__blog-image" alt="" />
        </div>
        <div class="col-8">
            <div class="blogs-list__blog-title"><?php echo esc_html(the_title()); ?></div>
            <div class="blogs-list__blog-date"><?php echo get_the_date('d/m/Y') ?></div>

            <div class="blogs-list__blog-split">
                <div class="blogs-list__blog-split-line"></div>
                <div class="blogs-list__blog-split-emblem"><?php echo get_template_part('partials/icons/full-emblem-icon'); ?></div>
            </div>

            <div class="blogs-list__blog-description"><?php the_field("description", $post->ID) ?></div>
            <a href="<?php echo get_the_permalink(); ?>" class="blogs-list__blog-more button-fill">Detaljnije</a>
        </div>
    </div>
</div>