<?php get_template_part(
    'partials/templates/page-start',
    null,
    array(
        'class'   => 'contact',
        'search'  => false
    )
);

$form = get_field("form_shortcode");
?>

<div class="row">
    <div class="col-12 p-0-mobile">
        <?php echo do_shortcode($form); ?>
    </div>
</div>

<?php get_template_part('partials/templates/page-end'); ?>