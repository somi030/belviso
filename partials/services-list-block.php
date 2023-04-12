<?php
$services = get_field('services', 'options');
?>

<?php get_template_part(
    'partials/templates/page-start',
    null,
    array(
        'class'   => 'services-list',
        'search'  => true
    )
); ?>
<div class="row">
    <?php foreach ($services as $service) { ?>
        <div class="col-4">
            <div class="services-list__service">
                <div class="services-list__service-image-container">
                    <img src="<?php echo $service['image']['url'] ?>" class="services-list__service-image" alt="<?php echo $service['image']['alt'] ?>" />

                    <div class="services-list__service-buttons">
                        <a href="<?php echo $service['link'] ?>" class="services-list__service-details button-fill">Detaljnije o tretmanu</a>
                        <a class="services-list__service-schedule button-border">Zakažite tretman</a>
                    </div>
                </div>


                <div class="services-list__service-info">
                    <div class="services-list__service-name"><?php echo $service['name'] ?></div>
                    <div class="services-list__service-description"><?php echo $service['description'] ?></div>
                </div>
            </div>
        </div>
    <?php } ?>
</div>
<?php get_template_part('partials/templates/page-end'); ?>