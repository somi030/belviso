<?php
$jobs = get_field('jobs');

$address = get_field('address', 'options');
$telephone = get_field('telephone', 'options');
$mobile = get_field('mobile', 'options');
$email = get_field('email', 'options');
?>

<?php get_template_part(
    'partials/templates/page-start',
    null,
    array(
        'class'   => 'jobs-list',
        'search'  => false
    )
); ?>

<div class="row jobs-gap">
    <?php foreach ($jobs as $job) { ?>
        <div class="col-12">
            <div class="jobs-list__job d-flex">
                <img src="<?php echo $job['image']['url'] ?>" class="jobs-list__job-image" alt="<?php echo $job['image']['alt'] ?>" />
                <div class="jobs-list__job-info">
                    <div class="jobs-list__job-header d-flex align-items-center justify-content-start justify-content-md-between">
                        <div class="jobs-list__job-name">Estetskom Centru Belviso potreban <?php echo $job['name'] ?></div>
                        <div class="jobs-list__job-logo"><?php get_template_part('partials/icons/logo-icon'); ?></div>
                    </div>

                    <div class="jobs-list__job-contact d-flex align-items-start align-items-md-center justify-content-between flex-column flex-md-row">
                        <div class="jobs-list__job-description">
                            <p class="jobs-list__job-cv">CV sa slikom slati na <a href=""><?php echo $email ?></a></p>
                            <div class="jobs-list__job-find-us"><?php echo $address ?> | <a><?php echo $telephone ?></a> | <a><?php echo $mobile ?></a></div>
                        </div>
                        <div class="jobs-list__job-button button-fill">Pošalji CV</div>
                    </div>
                </div>
            </div>
        </div>
    <?php } ?>
</div>


<?php get_template_part('partials/templates/page-end'); ?>