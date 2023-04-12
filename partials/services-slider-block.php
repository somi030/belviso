<?php
$title = get_field('title');
$subtitle = get_field('subtitle');
$services = get_field('services', 'options');
?>

<section class="services-slider">
    <div class="container">

        <div class="row">
            <div class="col-12">

                <h2 class="services-slider__title"><?php echo $title ?></h2>
                <div class="services-slider__emblem emblem"><?php echo get_template_part('partials/icons/emblem-icon'); ?></div>
                <div class="services-slider__subtitle subtitle"><?php echo $subtitle ?></div>

                <div class="services-slider__slider-container">
                    <div class="services-slider__slider swiper-container">
                        <div class="swiper-wrapper">
                            <?php foreach ($services as $service) { ?>
                                <div class="services-slider__slide swiper-slide">
                                    <img src="<?php echo $service['image']['url'] ?>" class="services-slider__slide-image" alt="<?php echo $service['image']['alt'] ?>" />

                                    <div class="services-slider__slide-info">
                                        <div class="services-slider__slide-name"><?php echo $service['name'] ?></div>
                                        <div class="services-slider__slide-description"><?php echo $service['description'] ?></div>

                                        <a href="<?php echo $service['link'] ?>" class="services-slider__slide-details button-fill">Detaljnije o tretmanu</a>
                                        <a class="services-slider__slide-schedule button-border">Zakažite tretman</a>
                                    </div>
                                </div>
                            <?php } ?>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</section>