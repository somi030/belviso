'use strict';

import gsap from 'gsap';

if (gsap) {
    const headerFixed = $('.header-fixed');

    const changeState = ({ isActive }) => {
        if (isActive) {
            headerFixed.addClass('open');
        } else headerFixed.removeClass('open');
    };

    ScrollTrigger.create({
        start: 'top+=350',
        onToggle: changeState,
    });
}
