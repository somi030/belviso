<?php
$title = $args['title'];
$description = $args['description'];
$class = $args['class'];
$search = $args['search'];


if (get_field('title')) {
    $title = get_field('title');
}
if (!$description && get_field('description')) {
    $description = get_field('description');
}

$searchID = $class;
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
                <div class="col-sm-4 col-12 position-unset-mobile">
                    <div class="page__search">
                        <input class="page__search__input <?php echo $searchID; ?>" id="" type="search" placeholder="<?php echo get_the_title(); ?>" />
                        <svg class="page__search__loop <?php echo $searchID; ?>" width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" fill="#FFFFFF"></path>
                        </svg>
                    </div>
                </div>
            <?php } ?>
        </div>

        <div class="row">
            <div class="col-12">
                <div class="page__divider"></div>
                <p class="page__description"><?php echo $description ?></p>
            </div>
        </div>