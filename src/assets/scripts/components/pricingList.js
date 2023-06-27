'use strict';

const pricingListSection = $('section.pricing-list');

if (pricingListSection.length) {
    const pricingListCategory = $('.pricing-list__category');

    pricingListCategory.each(function () {
        const pricingListHeader = $(this).find('.pricing-list__category-header');
        const pricingListTable = $(this).find('.pricing-list__category-table');

        pricingListHeader.click(() => {
            $(this).toggleClass('open');

            const maxHeight = $(pricingListTable).css('max-height');

            if (maxHeight === '0px') {
                $(pricingListTable).css('max-height', $(pricingListTable).prop('scrollHeight'));
            } else $(pricingListTable).css('max-height', '0px');
        });
    });
}

const searchButtons = document.querySelectorAll('.pricing-list__category-search__button');
searchButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        let idFinder = button.closest('.row').querySelector('.id-finder');
        let homeUrl = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port + '/belviso/';
        let urlWithoutSearch = homeUrl + 'zakazivanje';
        let searchParams = new URLSearchParams({ treatment: idFinder.id });
        let urlWithSearch = urlWithoutSearch + '?' + searchParams.toString();
        window.location.href = urlWithSearch;
    });
});
