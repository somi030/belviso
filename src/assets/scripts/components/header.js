'use strict';

import gsap from 'gsap';

if (gsap) {
    const headerFixed = $('.header__fixed');
    const header = $('.header');

    const changeState = ({ isActive }) => {
        if (isActive) {
            headerFixed.addClass('open');
        } else {
            headerFixed.removeClass('open');
        }
    };

    const changeStateMobile = ({ isActive }) => {
        if (isActive) {
            header.addClass('color');
        } else {
            header.removeClass('color');
        }
    };

    ScrollTrigger.create({
        start: 'top+=350',
        end: document.body.scrollHeight,
        onToggle: changeState,
    });

    ScrollTrigger.create({
        start: 'top+=30',
        end: document.body.scrollHeight,
        onToggle: changeStateMobile,
    });
}

const header = document.querySelector('.header');
const headerHamburger = document.querySelector('.header__hamburger');
const headerNavigation = document.querySelector('.header__navigation-mobile');
const headerLinks = headerNavigation.querySelector('#menu-main-menu-1');
const headerLinksLink = headerLinks.querySelectorAll('li');

headerLinksLink.forEach((link) => {
    let subMenu = link.querySelector('.sub-menu');
    if (subMenu) {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '15');
        svg.setAttribute('height', '15');
        svg.setAttribute('viewBox', '0 0 512 512');
        svg.innerHTML = `
      <path fill="#fff" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
      `;
        svg.classList.add('header__navigation-mobile__item-svg');
        svg.addEventListener('click', () => {
            subMenu.classList.toggle('active');
            svg.classList.toggle('active');
        });
        link.appendChild(svg);
    }
});
const openHamburger = (header, hamburger, navigation) => {
    header.classList.toggle('active');
    hamburger.classList.toggle('active');
    navigation.classList.toggle('active');
};

headerHamburger.addEventListener('click', () => {
    openHamburger(header, headerHamburger, headerNavigation);
});
