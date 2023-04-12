'use strict';

import Swiper from 'swiper';

let swiperInstances;

const sliderMomentumRatio = 0.455;

const servicesSlider = $('.services-slider__slider');
const brandsSlider = $('.brands-slider__slider');

function setupServicesSlider () {
    swiperInstances.servicesSlider.instance = new Swiper(servicesSlider[0], { // eslint-disable-line
        slidesPerView: 3,
        spaceBetween: 20,
        freeMode: false,
        freeModeMomentumRatio: sliderMomentumRatio,
        centeredSlides: true,
        loop: true,
        autoplay: true,
        // navigation: {
        //     prevEl: '.text-slider__arrow-left',
        //     nextEl: '.text-slider__arrow-right',
        // },
    });
}

function setupBrandsSlider () {
    swiperInstances.brandsSlider.instance = new Swiper(brandsSlider[0], { // eslint-disable-line
        slidesPerView: 4,
        // spaceBetween: 20,
        freeMode: false,
        freeModeMomentumRatio: sliderMomentumRatio,
        loop: true,
        speed: 1600,
        autoplay:{
            delay: 600,
            disableOnInteraction: false
        },
        // navigation: {
        //     prevEl: '.text-slider__arrow-left',
        //     nextEl: '.text-slider__arrow-right',
        // },
    });
}

if (Swiper) {
    // ---- ALL SLIDERS -----

    const IsInitialized = (ele) => ele.hasClass('swiper-container-initialized');
    swiperInstances = {
        servicesSlider:       { instance: null, init: false },
        brandsSlider:         { instance: null, init: false },
    };

    // --------  SERVICE SLIDER --------

    if (servicesSlider.length) {
        if (!IsInitialized(servicesSlider)) {
            setupServicesSlider();
        }
    }

    // --------  BRANDS SLIDER --------

    if (brandsSlider.length) {
        if (!IsInitialized(brandsSlider)) {
            setupBrandsSlider();
        }
    }
}

export default swiperInstances;
