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
    <div class="col-12 p-0-mobile">
        <?php foreach ($categories as $category) { ?>
            <div class="pricing-list__category">
                <div class="pricing-list__category-header d-flex align-items-center justify-content-between">
                    <div class="pricing-list__category-name"><?php echo $category['name'] ?></div>
                    <div class="pricing-list__dropdown-icon"><?php echo get_template_part('partials/icons/dropdown-icon'); ?></div>
                </div>

                <div class="pricing-list__category-table">
                    <div class="pricing-list__category-table-header d-none d-sm-block">
                        <div class="row">
                            <div class="d-none d-sm-block col-sm-1 p-0">#</div>
                            <div class="d-none d-sm-block col-sm-8 p-0">Usluga</div>
                            <div class="d-none d-sm-block col-sm-3 text-align-right p-0">Cena</div>
                        </div>
                    </div>

                    <?php foreach ($category['treatments'] as $treatment) { ?>
                        <?php
                        $price = $treatment['price'];
                        $currency = $price['currency'];
                        $amount = $price['amount'];
                        ?>
                        <div class="pricing-list__category-table-row">
                            <div class="row align-items-center">
                                <div id="<?php echo $treatment['#'] ?>" class="d-none d-sm-block col-sm-1 p-0 id-finder"><?php echo $treatment['#'] ?></div>
                                <div class="col-sm-8 col-9 p-0 pricing-list__category-search"><?php echo $treatment['name'] ?>
                                    <a class="button-fill pricing-list__category-search__button" href="">Zakaži</a>
                                </div>
                                <?php if ($currency === 'none') { ?>
                                    <div class="col-3 text-align-right p-0">Kontakt</div>
                                <?php } else { ?>
                                    <div class="col-3 text-align-right p-0 pricing-list__category-search-price">
                                        <?php
                                        if (strpos($amount, '.') !== false) {
                                            $amounts = explode('.', $amount);
                                            $formatted_amount = number_format($amounts[0], 0, ',', '.') . ' / ' . number_format($amounts[1], 0, ',', '.');
                                        } else {
                                            $formatted_amount = number_format($amount, 0, ',', '.');
                                        }
                                        $formatted_price = $formatted_amount . ' ' . $currency;
                                        echo $formatted_price;
                                        ?>
                                    </div>
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