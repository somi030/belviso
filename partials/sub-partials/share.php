<div class="share d-none d-md-block">
    <div class="container">
        <div class="share__container">
            <div class="share__info">
                Deli stran s prijatelji:
            </div>
            <div class="share__icons">
                <a href="http://twitter.com/share?text=<?php echo get_the_title();
                                                        echo '&amp;counturl=';
                                                        the_permalink(); ?>" target="_blank"><?php get_template_part('partials/icons/twitter-share-icon'); ?></a>
                <a href=""><?php get_template_part('partials/icons/instagram-share-icon'); ?></a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=<?php the_permalink(); ?>" target="_blank"><?php get_template_part('partials/icons/facebook-share-icon'); ?></a>
            </div>
        </div>
    </div>
</div>