<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js">
<!--<![endif]-->

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Belviso | <?php is_front_page() ? bloginfo('name') : wp_title(''); ?></title>
    <?php wp_head(); ?>
</head>

<body>

    <?php
    $logo = get_field("logo", 'options');
    ?>
    <header class="header">
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <img src="<?php echo $logo['url'] ?>" class="header__logo" alt="<?php echo $logo['alt'] ?>" />
                </div>
                <div class="col-9">
                    <div class="header__social-media">
                        <?php echo get_template_part('partials/icons/instagram-icon'); ?>
                        <?php echo get_template_part('partials/icons/facebook-icon'); ?>
                        <?php echo get_template_part('partials/icons/phone-icon'); ?>
                        <?php echo get_template_part('partials/icons/mail-icon'); ?>
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

        <div class="header-fixed">
            <div class="container">
                <div class="row">
                    <div class="col-3">
                        <div class="header-fixed__logo"><?php get_template_part('partials/icons/logo-icon'); ?></div>
                    </div>
                    <div class="col-9">
                        <nav class="header-fixed__navigation">
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