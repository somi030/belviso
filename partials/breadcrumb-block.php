<?php
$image = get_field('background_image');
$title = get_field('title');
$links = get_field('links');
?>

<section class="breadcrumb d-flex flex-column justify-content-center" style="<?php defineBackgroundImage($image) ?>">
    <div class="breadcrumb__backdrop"></div>
    <div class="container">

        <div class="row">
            <div class="col-12">
                <h1 class="breadcrumb__title"><?php echo $title ?></h1>

                <div class="breadcrumb__links">
                    <?php foreach ($links as $link) { ?>
                        <?php if ($link['link']['url'] === "#") { ?>
                            <span class="breadcrumb__link"><?php echo $link['link']['title'] ?></span>
                        <?php } else { ?>
                            <a href="<?php echo $link['link']['url'] ?>" class="breadcrumb__link"><b><?php echo $link['link']['title'] ?> / </b></a>
                        <?php } ?>
                    <?php } ?>
                </div>
            </div>
        </div>

    </div>
</section>