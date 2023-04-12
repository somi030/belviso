<?php global $post; ?>
<?php $data = get_query_var('blogData'); ?>
<?php setup_postdata($post = $data['blog']); ?>

<div class="blogs__blog">
    <?php $image = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), $data['image-size']); ?>
    <img src="<?php echo $image[0] ?>" class="blogs__blog-image" alt="" />

    <div class="blogs__blog-title"><?php echo esc_html(the_title()); ?></div>

    <div class="blogs__blog-date"><?php echo get_the_date('d/m/Y') ?></div>

    <div class="blogs__blog-description"><?php the_field("description", $post->ID) ?></div>

    <a href="<?php echo get_the_permalink(); ?>" class="blogs__blog-more">Pročitajte detaljnije</a>
</div>