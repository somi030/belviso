<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" <?php language_attributes(); ?>>
<!--<![endif]-->

<head>
    <meta name="theme-color" content="#ba1c68" />
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title><?php is_front_page() ? bloginfo('name') : wp_title(''); ?></title>
    <?php wp_head(); ?>
</head>

<body>

    <?php
    $logo = get_field("logo", 'options');
    $logoWhite = get_field("logo_white", 'options');
    ?>
    <header class="header">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-12 centered-mobile">
                    <div class="header__logo-container">
                        <a href="<?php echo home_url(); ?>">
                            <img src="<?php echo $logo['url'] ?>" class="header__logo d-none d-md-block" alt="<?php echo $logo['alt'] ?>" />
                        </a>
                        <a href="<?php echo home_url(); ?>">
                            <img src="<?php echo $logoWhite['url'] ?>" class="header__logo d-md-none d-block" alt="<?php echo $logoWhite['alt'] ?>" />
                        </a>
                    </div>
                    <div class="header__hamburger d-block d-md-none">
                        <span class="header__hamburger-span"></span>
                        <span class="header__hamburger-span"></span>
                        <span class="header__hamburger-span"></span>
                        <span class="header__hamburger-span"></span>
                    </div>
                </div>
                <div class="col-md-9 col-sm-12 d-none d-md-block">
                    <div class="header__social-media">
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
                    <nav class="header__navigation">
                        <?php
                        if (has_nav_menu('main-menu')) {
                            wp_nav_menu(array('theme_location' => 'main-menu'));
                        }
                        ?>
                    </nav>
                </div>
            </div>
        </div>

        <div class="header__navigation-mobile">
            <?php
            if (has_nav_menu('main-menu')) {
                wp_nav_menu(array('theme_location' => 'main-menu'));
            }
            ?>
            <div class="header__navigation-mobile__social-media">
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

        <div class="header__fixed d-none d-md-block">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-12">
                        <div class="header__fixed__logo"><?php get_template_part('partials/icons/logo-icon'); ?></div>
                    </div>
                    <div class="col-md-9 col-12">
                        <nav class="header__fixed__navigation">
                            <?php
                            if (has_nav_menu('main-menu')) {
                                wp_nav_menu(array('theme_location' => 'main-menu'));
                            }
                            ?>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <div class="main">