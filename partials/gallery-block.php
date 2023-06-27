<?php
$rows = get_field('rows')
?>

<section class="gallery">
    <div class="container">

        <div class="row">
            <div class="col-12">

                <div class="gallery__showcase">
                    <?php foreach ($rows as $row) { ?>
                        <?php
                        $columns = $row['columns'];
                        ?>
                        <div class="row">
                            <?php foreach ($columns as $column) { ?>
                                <?php
                                $images = $column['images'];
                                ?>
                                <div class="col-md-4 col-12">
                                    <?php foreach ($images as $image) { ?>
                                        <div class="gallery__image-container count-<?php echo count($images) ?>">
                                            <img src="<?php echo $image['url'] ?>" class="gallery__image" alt="<?php echo $image['alt'] ?>" />
                                        </div>
                                    <?php } ?>
                                </div>
                            <?php } ?>
                        </div>
                    <?php } ?>
                </div>

            </div>
        </div>

    </div>
</section>