<?php
$categories = get_field('pricelist_categories', 'options');
?>

<?php get_template_part(
    'partials/templates/page-start',
    null,
    array(
        'class'   => 'pricing-list',
        'search'  => true
    )
); ?>
<div class="row">
    <div class="col-12">
        <?php foreach ($categories as $category) { ?>
            <div class="pricing-list__category">
                <div class="pricing-list__category-header d-flex align-items-center justify-content-between">
                    <div class="pricing-list__category-name"><?php echo $category['name'] ?></div>
                    <div class="pricing-list__dropdown-icon"><?php echo get_template_part('partials/icons/dropdown-icon'); ?></div>
                </div>

                <div class="pricing-list__category-table">
                    <div class="pricing-list__category-table-header">
                        <div class="row">
                            <div class="col-1">#</div>
                            <div class="col-8">Usluga</div>
                            <div class="col-3 text-align-right">Cena</div>
                        </div>
                    </div>

                    <?php foreach ($category['treatments'] as $treatment) { ?>
                        <?php
                        $price = $treatment['price'];

                        $currency = $price['currency'];
                        $amount = $price['amount']
                        ?>
                        <div class="pricing-list__category-table-row">
                            <div class="row">
                                <div class="col-1"><?php echo $treatment['#'] ?></div>
                                <div class="col-8"><?php echo $treatment['name'] ?></div>
                                <?php if ($currency === 'none') { ?>
                                    <div class="col-3 text-align-right">Kontakt</div>
                                <?php } else { ?>
                                    <div class="col-3 text-align-right"><?php echo number_format($amount) . ' ' . $currency ?></div>
                                <?php }  ?>
                            </div>
                        </div>
                    <?php } ?>

                </div>
            </div>
        <?php } ?>
    </div>
</div>
<?php get_template_part('partials/templates/page-end'); ?>