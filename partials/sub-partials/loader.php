<div class="loader">
    <div class="loader__container">
        <div class="loader__circle">
            <?php
            $logo = get_field('header_logo-small', 'options');
            ?>
        </div>

        <img class="loader__image" src="<?php echo $logo['url'] ?>" alt="<?php echo $logo['title'] ?>" />
    </div>
</div>