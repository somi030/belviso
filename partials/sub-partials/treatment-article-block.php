<?php global $post; ?>
<?php $data = get_query_var('treatmentData'); ?>
<?php setup_postdata($post = $data['treatment']); ?>

<div class="treatments-list__treatment d-flex">
    <?php $image = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), $data['image-size']); ?>
    <img src="<?php echo $image[0] ?>" class="treatments-list__treatment-image" alt="" />

    <div class="treatments-list__treatment-info">
        <div class="treatments-list__treatment-header d-flex align-items-center justify-content-between">
            <div class="treatments-list__treatment-name"><?php echo esc_html(the_title()); ?></div>
            <div class="treatments-list__treatment-logo"><?php get_template_part('partials/icons/logo-icon'); ?></div>
        </div>

        <div class="treatments-list__treatment-contact d-flex align-items-center justify-content-between">
            <div class="treatments-list__treatment-description">
                <?php the_field('description', $post->ID) ?>
            </div>
        </div>

        <a href="<?php echo get_the_permalink(); ?>" class="treatments-list__more button-border">Pročitajte detaljnije</a>
    </div>
</div>