<?php
$sales = get_field('sales', 'options');
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
        if ($sales) {
            foreach ($sales as $sale) { ?>
                <?php
                $treatmentData = array(
                    'treatment'    => $sale['treatment'],
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