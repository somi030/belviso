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
