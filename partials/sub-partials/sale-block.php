<?php global $post; ?>
<?php $data = get_query_var('saleData'); ?>
<?php setup_postdata($post = $data['treatment']); ?>
<?php
$duration = get_field('duration', $post->ID);
$description = get_field('description', $post->ID);
?>


<div class="sales__sale">
    <?php $image = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), $data['image-size']); ?>
    <img src="<?php echo $image[0] ?>" class="sales__sale-image" alt="" />
    <div class="sales__sale-title"><?php echo esc_html(the_title()); ?></div>
    <div class="sales__sale-content">
        <div class="sales__sale-content__title"><?php echo esc_html(the_title()); ?></div>
        <?php if (isset($data['discount'])) { ?>
            <div class="sales__sale-discount">
                <div class="sales__sale-discount-text">
                    POPUST
                </div>
                <?php foreach ($data['discount'] as $discount) { ?>
                    <?php echo esc_html($discount); ?>
                <?php } ?>
            </div>
        <?php } ?>
        <div class="sales__sale-description">
            <?php echo $description; ?>
            <!-- <button class="sales__sale-read-more">PRIKAZI JOS</button> -->
        </div>
        <div class="sales__sale-button">
            <a href="<?php echo get_the_permalink(); ?>" class="button-border">Zakazite tretman</a>
        </div>
        <div class="sales__sale-duration">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#68103A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 6V12L16 14" stroke="#68103A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p>Trajanje: <?php echo $duration; ?> min.</p>
        </div>
    </div>

</div>