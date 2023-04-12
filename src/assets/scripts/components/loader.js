'use strict';

import gsap from 'gsap';

$(document).ready(function () {
    if (gsap) {
        var loader = $('.loader');

        gsap.to(loader, 0.5, {
            autoAlpha:0,
            delay:0.5,
            ease: 'power2.out'
        });
    }
});
