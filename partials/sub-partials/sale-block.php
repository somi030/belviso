<?php global $post; ?>
<?php $data = get_query_var('saleData'); ?>
<?php setup_postdata($post = $data['treatment']); ?>

<div class="sales__sale">
    <?php $image = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), $data['image-size']); ?>
    <img src="<?php echo $image[0] ?>" class="sales__sale-image" alt="" />

    <div class="sales__sale-title"><?php echo esc_html(the_title()); ?></div>
</div>