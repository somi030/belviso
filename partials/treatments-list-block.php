<?php
$type = get_field('type');
$treatments = get_posts(array(
    'numberposts' => 1000,
    'post_type'   => 'tretman',
    'orderby'     => 'menu_order',
    'order'       => 'ASC',
    'post_status' => 'publish',
    'tax_query' => array(
        array(
            'taxonomy' => 'tretman-kategorija',
            'field' => 'id',
            'terms' => $type
        )
    )
));
?>

<?php get_template_part(
    'partials/templates/page-start',
    null,
    array(
        'class'   => 'treatments-list',
        'search'  => true
    )
); ?>

<div class="row">
    <?php
    if ($treatments) {
        foreach ($treatments as $treatment) { ?>
            <div class="col-12"> <!-- Add a div wrapper here -->
                <?php
                $treatmentData = array(
                    'treatment'    => $treatment,
                    'image-size' => 'read-more'
                );
                set_query_var('treatmentData', $treatmentData);
                get_template_part('partials/sub-partials/treatment-article-block');
                ?>
            </div> <!-- Close the wrapper here -->
    <?php }
        wp_reset_postdata();
    } ?>
</div>

<?php get_template_part('partials/templates/page-end'); ?>