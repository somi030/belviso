<?php
$brands = get_field('brands');
?>

<section class="brands-slider">
    <div class="container">
        <div class="row">

            <div class="col-12">

                <div class="brands-slider__slider swiper-container">
                    <div class="swiper-wrapper">
                        <?php foreach ($brands as $brand) { ?>
                            <div class="brands-slider__slide swiper-slide">
                                <img src="<?php echo $brand['url'] ?>" class="brands-slider__slide-image" alt="<?php echo $brand['alt'] ?>" />
                            </div>
                        <?php } ?>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>