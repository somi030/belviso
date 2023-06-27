<?php
$description = get_field('cta_description', 'options');
$button = get_field('cta_button', 'options');
?>

<section class="cta">
    <div class="container">

        <div class="row">
            <div class="col-md-9 d-none d-md-block">
                <p class="cta__description d-flex flex-column justify-content-center h-100"><?php echo $description ?></p>
            </div>
            <div class="col-md-3 col-12">
                <div class="cta__button-wrapper">
                    <!-- <a href="<?php echo $button['url'] ?>" class="cta__button button"><?php echo $button['title'] ?></a> -->
                    <a href="<?php echo home_url('/zakazivanje'); ?>" class="cta__button button"><?php echo $button['title'] ?></a>
                </div>
            </div>
        </div>

    </div>
</section>