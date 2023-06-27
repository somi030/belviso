<?php
global $post;
$data = get_query_var('treatmentData');
setup_postdata($post = $data['treatment']);
$discounts = get_field('sales', 'options');
$duration = get_field('duration', $post->ID);
?>

<div class="treatments-list__treatment d-flex">
    <?php
    if (isset($discounts)) {
        foreach ($discounts as $discount) {
            if ($discount["treatment"]->ID == $post->ID) {
                $amount = $discount['discount']['amount'];
                $currency = $discount['discount']['currency'];
    ?>
                <div class="treatments-list__treatment-discount">
                    <p class="treatments-list__treatment-discount-text">POPUST</p>
                    <p class="treatments-list__treatment-discount-price"><?php echo $amount . ' ' . $currency; ?></p>
                </div>
    <?php
            }
        }
    }
    ?>
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
        <?php if (!empty($duration)) { ?>
            <div class="treatments-list__treatment-duration">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#68103A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 6V12L16 14" stroke="#68103A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p>Trajanje: <?php echo $duration ?> min.</p>
            </div>
        <?php } ?>
    </div>
</div>