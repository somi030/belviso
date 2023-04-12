<?php get_template_part('partials/cta-block'); ?>
</div>

<?php
$logo = get_field("logo_white", 'options');

$address = get_field('address', 'options');
$telephone = get_field('telephone', 'options');
$mobile = get_field('mobile', 'options');
$email = get_field('email', 'options');
?>
<footer class="footer" role="contentinfo">
    <div class="container">
        <div class="row">
            <div class="col-6">
                <div class="footer__left d-flex flex-column justify-content-between">
                    <img src="<?php echo $logo['url'] ?>" class="footer__logo" alt="<?php echo $logo['alt'] ?>" />
                    <div class="footer__contact">
                        <b>Adresa:</b> <?php echo $address ?>
                        <br>
                        <b>Telefon:</b> <?php echo $telephone ?>
                        <br>
                        <b>Mobilni:</b> <?php echo $mobile ?>
                        <br>
                        <b>Email:</b> <?php echo $email ?>
                    </div>
                    <div class="footer__social-media d-flex align-items-center">
                        <?php echo get_template_part('partials/icons/instagram-icon'); ?>
                        <?php echo get_template_part('partials/icons/facebook-icon'); ?>
                        <?php echo get_template_part('partials/icons/phone-icon'); ?>
                        <?php echo get_template_part('partials/icons/mail-icon'); ?>
                    </div>
                </div>

            </div>
            <div class="col-6">
                <div class="footer__map"><?php echo get_template_part('partials/sub-partials/map'); ?></div>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>

</html>