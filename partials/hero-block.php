<?php
$image = get_field('background_image');
$title = get_field('title');
$description = get_field('description');
?>

<section class="hero d-flex flex-column justify-content-center" style="<?php defineBackgroundImage($image) ?>">
    <div class="hero__backdrop"></div>
    <div class="container">

        <div class="row">
            <div class="col-6">
                <h1 class="hero__title"><?php echo $title ?></h1>
                <p class="hero__description"><?php echo $description ?></p>
            </div>
        </div>

    </div>
</section>