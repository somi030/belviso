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

    <div class="col-12">
        <?php
        if ($treatments) {

            foreach ($treatments as $treatment) { ?>
                <?php
                $treatmentData = array(
                    'treatment'    => $treatment,
                    'image-size' => 'read-more'
                );
                set_query_var('treatmentData', $treatmentData);
                get_template_part('partials/sub-partials/treatment-article-block');
                ?>
        <?php }
            wp_reset_postdata();
        } ?>
    </div>
</div>
<?php get_template_part('partials/templates/page-end'); ?>