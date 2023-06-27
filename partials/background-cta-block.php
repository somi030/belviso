<?php
$image = get_field("image");
$CTAimage = get_field("cta_image");
$title = get_field('title');
$button = get_field("button");
?>

<section class="background-cta">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-sm-7 col-12">
        <div class="background-cta__content">
          <div class="background-cta__image-holder">
            <?php if ($image && $image['url']) { ?>
              <img src="<?php echo $image['url'] ?>" class="background-cta__image" alt="<?php echo $image['alt'] ?>" />
            <?php } ?>
          </div>
          <h2 class="background-cta__title">
            <?php echo $title; ?>
          </h2>
          <?php if ($button && $button['url']) { ?>
            <a class="button background-cta__button" href="<?php echo $button['url']; ?>"><?php echo $button['title']; ?></a>
          <?php } ?>
        </div>
      </div>
      <div class="col-sm-5 col-12">
        <div class="background-cta__cta-image-holder">
          <?php if ($CTAimage && $CTAimage['url']) { ?>
            <img src="<?php echo $CTAimage['url'] ?>" class="background-cta__cta-image" alt="<?php echo $CTAimage['alt'] ?>" />
          <?php } ?>
        </div>
      </div>
    </div>
  </div>
</section>