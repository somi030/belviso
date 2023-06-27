<?php get_template_part('partials/cta-block'); ?>
</div>

<?php
$logo = get_field("footer_logo", 'options');

$address = get_field('address', 'options');
$telephone = get_field('telephone', 'options');
$mobile = get_field('mobile', 'options');
$email = get_field('email', 'options');
?>
<footer class="footer" role="contentinfo">
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-sm-12 md-order-2">
                <div class="footer__left d-flex flex-column justify-content-md-between justify-content-center">
                    <a href="<?php echo home_url(); ?>">
                        <img src="<?php echo $logo['url'] ?>" class="footer__logo" alt="<?php echo $logo['alt'] ?>" />
                    </a>
                    <div class="footer__contact">
                        <div class="footer__contact-item">
                            <span><b>Adresa:</b></span>
                            <span><?php echo $address ?></span>
                        </div>
                        <div class="footer__contact-item">
                            <span><b>Telefon:</b></span>
                            <span><?php echo $telephone ?></span>
                        </div>
                        <div class="footer__contact-item">
                            <span><b>Mobilni:</b></span>
                            <span><?php echo $mobile ?></span>
                        </div>
                        <div class="footer__contact-item">
                            <span><b>Email:</b></span>
                            <span><?php echo $email ?></span>
                        </div>
                    </div>
                    <div class="footer__social-media d-flex align-items-center">
                        <a href="">
                            <?php echo get_template_part('partials/icons/instagram-icon'); ?>
                        </a>
                        <a href="">
                            <?php echo get_template_part('partials/icons/facebook-icon'); ?>
                        </a>
                        <a href="">
                            <?php echo get_template_part('partials/icons/phone-icon'); ?>
                        </a>
                        <a href="">
                            <?php echo get_template_part('partials/icons/mail-icon'); ?>
                        </a>
                    </div>
                </div>

            </div>
            <div class="col-md-6 col-sm-12 md-p-0 md-order-1">
                <div class="footer__map"><?php echo get_template_part('partials/sub-partials/map'); ?></div>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>

</html>