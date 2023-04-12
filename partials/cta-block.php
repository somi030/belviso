<?php
$description = get_field('cta_description', 'options');
$button = get_field('cta_button', 'options');
?>

<section class="cta">
    <div class="container">

        <div class="row">
            <div class="col-9">
                <p class="cta__description d-flex flex-column justify-content-center h-100"><?php echo $description ?></p>
            </div>
            <div class="col-3">
                <div class="cta__button-wrapper">
                    <a href="<?php echo $button['url'] ?>" class="cta__button button"><?php echo $button['title'] ?></a>
                </div>
            </div>
        </div>

    </div>
</section>