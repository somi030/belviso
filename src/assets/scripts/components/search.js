const servicesListSearch = document.querySelector('.page__search__input.services-list');
const servicesListTitles = document.querySelectorAll('.services-list__service-name');
const pricingListSearch = document.querySelector('.page__search__input.pricing-list');
const pricingListTitles = document.querySelectorAll('.pricing-list__category-name');
const blogsListSearch = document.querySelector('.page__search__input.blogs-list');
const blogsListTitles = document.querySelectorAll('.blogs-list__blog-title');
const treatmentListSearch = document.querySelector('.page__search__input.treatments-list');
const treatmentListTitles = document.querySelectorAll('.treatments-list__treatment-name');

const search = (searchInput, searchTitles) => {
    let term = searchInput.value.toLowerCase();
    if (searchInput.classList.contains('services-list')) {
        // let anyMatch = false;
        searchTitles.forEach((title,) => {
            let filter = title.innerText.toLowerCase();
            let titleParent = title.closest('.services-list__service');
            let titleHolder = titleParent.parentElement;
            if (filter.includes(term)) {
                titleHolder.classList.remove('d-none');
                // anyMatch = true;
            } else {
                titleHolder.classList.add('d-none');
            }
        });
    }
    if (searchInput.classList.contains('pricing-list')) {
        // let anyMatch = false;
        searchTitles.forEach((title) => {
            let category = title.closest('.pricing-list__category');
            let categoryTitles = category.querySelectorAll('.pricing-list__category-search');
            let categoryTable = category.querySelector('.pricing-list__category-table');
            let categoryMatches = false;
            categoryTitles.forEach((categoryTitle) => {
                let filter = categoryTitle.innerText.toLowerCase();
                let row = categoryTitle.closest('.pricing-list__category-table-row');
                if (filter.includes(term)) {
                    categoryMatches = true;
                    row.classList.remove('d-none');
                } else {
                    row.classList.add('d-none');
                }
            });
            if (categoryMatches) {
                category.classList.remove('d-none');
                category.classList.add('open');
                categoryTable.style.maxHeight = categoryTable.scrollHeight + 'px';
                // anyMatch = true;
            } else {
                category.classList.add('d-none');
                category.classList.remove('open');
                categoryTable.style.maxHeight = '0px';
            }
            if (term === '') {
                category.classList.remove('open');
                category.classList.remove('open');
                categoryTable.style.maxHeight = '0px';
            }
        });
    }
    if (searchInput.classList.contains('blogs-list')) {
        // let anyMatch = false;
        searchTitles.forEach((title) => {
            let filter = title.innerText.toLowerCase();
            let titleParent = title.closest('.blogs-list__blog');
            if (filter.includes(term)) {
                titleParent.classList.remove('d-none');
                // anyMatch = true;
            } else {
                titleParent.classList.add('d-none');
            }
        });
    }
    if (searchInput.classList.contains('treatments-list')) {
        // let anyMatch = false;
        searchTitles.forEach((title) => {
            let filter = title.innerText.toLowerCase();
            let titleParent = title.closest('.treatments-list__treatment');
            if (filter.includes(term)) {
                titleParent.classList.remove('d-none');
                titleParent.classList.add('d-flex');
                // anyMatch = true;
            } else {
                titleParent.classList.remove('d-flex');
                titleParent.classList.add('d-none');
            }
        });
    }
};

const searchDebounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, delay);
    };
};

if (servicesListSearch) {
    servicesListSearch.addEventListener('input', () => {
        const delayedSearch = searchDebounce(() => {
            search(servicesListSearch, servicesListTitles);
        }, 700);
        delayedSearch();
    });
}

if (pricingListSearch) {
    pricingListSearch.addEventListener('input', () => {
        const delayedSearch = searchDebounce(() => {
            search(pricingListSearch, pricingListTitles);
        }, 700);
        delayedSearch();
    });
}

if (blogsListSearch) {
    blogsListSearch.addEventListener('input', () => {
        const delayedSearch = searchDebounce(() => {
            search(blogsListSearch, blogsListTitles);
        }, 700);
        delayedSearch();
    });
}

if (treatmentListSearch) {
    treatmentListSearch.addEventListener('input', () => {
        const delayedSearch = searchDebounce(() => {
            search(treatmentListSearch, treatmentListTitles);
        }, 700);
        delayedSearch();
    });
}
