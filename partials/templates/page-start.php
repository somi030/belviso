<?php
$title = $args['title'];
$description = $args['description'];
$class = $args['class'];
$search = $args['search'];


if (get_field('title')) {
    $title = get_field('title');
}
if (get_field('description')) {
    $description = get_field('description');
}
?>

<section class="<?php echo $class ?> page">
    <div class="container">

        <div class="row">
            <div class="col-<?php if ($search) {
                                echo 8;
                            } else echo 12; ?>">
                <h2 class="page__title"><?php echo $title ?></h2>

            </div>
            <?php if ($search) { ?>
                <div class="col-4">
                    <div class="page__search"></div>
                </div>
            <?php } ?>
        </div>

        <div class="row">
            <div class="col-12">
                <div class="page__divider"></div>
                <p class="page__description"><?php echo $description ?></p>
            </div>
        </div>