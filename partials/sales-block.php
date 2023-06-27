<?php
$sales = get_field('sales', 'options');

$title = get_field('title');
$subtitle = get_field('subtitle');
$description = get_field('description');
?>

<section class="sales">
    <div class="container">

        <div class="row">
            <div class="col-12">

                <h2 class="sales__title"><?php echo $title ?></h2>
                <div class="sales__emblem emblem"><?php echo get_template_part('partials/icons/emblem-icon'); ?></div>
                <div class="sales__subtitle subtitle"><?php echo $subtitle ?></div>

                <div class="sales__description"><?php echo $description ?></div>

            </div>
        </div>

        <div class="sales__sales">
            <div class="row gap-25">
                <?php
                if ($sales) {
                    foreach ($sales as $sale) { ?>
                        <?php
                        $saleData = array(
                            'treatment'    => $sale['treatment'],
                            'image-size' => 'read-more',
                            'discount'     => $sale['discount']
                        );
                        set_query_var('saleData', $saleData);
                        ?>
                        <div class="col-md-6 col-12">
                            <?php
                            get_template_part('partials/sub-partials/sale-block');
                            ?>
                        </div>
                <?php }
                    wp_reset_postdata();
                } ?>
            </div>
        </div>

    </div>
</section>