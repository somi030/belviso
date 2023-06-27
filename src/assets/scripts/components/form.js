const modalButton = document.querySelector('.form__container-treatment');
const modal = document.querySelector('.form__modal');
const selectTitle = document.querySelector('.form__modal-container__top-select-title');
const selectSvg = document.querySelector('.form__modal-container__top-select-title-svg');
const selectDropdown = document.querySelector('.form__modal-container__top-select');
const selectItems = document.querySelectorAll('.form__modal-container__top-select-item');
const checkboxButton = document.querySelectorAll('.form__modal-container__treatment-list-item-checkbox');
const checkboxActive = document.querySelectorAll('.form__modal-container__treatment-list-item-checkbox-active');
const treatmentListItem = document.querySelectorAll('.form__modal-container__treatment-list-item');
const treatmentListItemTitles = document.querySelectorAll('.form__modal-container__treatment-list-item-title');
const treatmentTitle = document.querySelectorAll('.form__modal-container__treatment-title');
const treatmentSvg = document.querySelectorAll('.form__modal-container__treatment-title-svg');
const treatmentList = document.querySelectorAll('.form__modal-container__treatment-list');
const treatmentDiv = document.querySelectorAll('.form__modal-container__treatment');
const treatmentButton = document.querySelector('.form__modal-container__treatment-button a');
const treatmentSearchButton = document.querySelector('.form__modal-container__top-search-loop');
const treatmentSearchTerm = document.querySelector('.form__modal-container__top-search');
const formInput = document.querySelector('.form__container-input');
const searchParams = new URLSearchParams(window.location.search);
const searchParamsTreatment = searchParams.get('treatment');
const searchParamsTitle = searchParams.get('title');
const params = new URLSearchParams(window.location.search);
if (params.has('treatment') || params.has('title')) {
    const newUrl = window.location.href.split('?')[0];
    window.history.replaceState(null, null, newUrl);
}

if (modalButton) {
    modalButton.addEventListener('click', () => {
        modal.classList.add('show');
    });
}

window.onclick = function (event) {
    if (event.target === modal) {
        modal.classList.remove('show');
    }
};

treatmentListItem.forEach((listItem, index) => {
    listItem.addEventListener('click', () => {
        listItem.classList.toggle('active');
        checkboxActive[index].classList.toggle('active');
        checkboxButton[index].classList.toggle('inactive');
    });
});

if (selectTitle) {
    selectTitle.addEventListener('click', () => {
        selectDropdown.classList.toggle('active');
        selectSvg.classList.toggle('active');
    });
}

let selectedArray = [];
selectItems.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        if (!selectedArray.includes(item)) {
            selectedArray.push(item);
        } else {
            selectedArray.splice(selectedArray.indexOf(item), 1);
        }

        treatmentTitle.forEach((title) => {
            const parentDiv = title.parentElement;
            const trimmedTitleText = title.innerText.trim();
            if (selectedArray.length === 0 || selectedArray.some((selectedItem) => selectedItem.innerText.trim() === trimmedTitleText)) {
                parentDiv.classList.remove('d-none');
            } else {
                parentDiv.classList.add('d-none');
            }
        });
    });
});

treatmentTitle.forEach((title, index) => {
    if (searchParamsTitle && searchParamsTitle.trim() === title.textContent.trim().toLowerCase()) {
        title.classList.add('active');
        modal.classList.add('show');
        treatmentSvg[index].classList.add('active');
        treatmentList[index].classList.add('active');
        title.scrollIntoView({ behavior: 'smooth' });
    // title.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest', offsetTop: -250});
    }
    title.addEventListener('click', () => {
        title.classList.toggle('active');
        treatmentSvg[index].classList.toggle('active');
        treatmentList[index].classList.toggle('active');
    });
});

const addTreatments = (treatments, inputBox) => {
    const treatmentsInput = document.querySelector('#tretmani-label input');

    if (treatments.length > 1) {
        treatments.forEach((treatment, index) => {
            const newTreatment = document.createElement('p');
            const title = treatment.querySelector('.form__modal-container__treatment-list-item-title');
            newTreatment.innerHTML = title.innerHTML;
            treatmentsInput.setAttribute('value', `${treatmentsInput.getAttribute('value')}${index === 0 ? '' : ', '}${title.innerHTML}`);

            newTreatment.classList = 'form__container-input-treatment';
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('width', '24');
            svg.setAttribute('height', '24');
            svg.setAttribute('viewBox', '0 0 24 24');
            svg.innerHTML = `
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#BA1C68" stroke="#BA1C68" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8 12H16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      `;
            svg.classList = 'form__container-input-treatment-svg';
            svg.addEventListener('click', () => {
                removeTreatment(inputBox, newTreatment, treatment);
            });
            newTreatment.appendChild(svg);
            inputBox.appendChild(newTreatment);
        });
    } else if (treatments.length === 1) {
        const newTreatment = document.createElement('p');
        const title = treatments[0].querySelector('.form__modal-container__treatment-list-item-title');
        newTreatment.innerHTML = title.innerHTML;
        // treatmentsInput.value = title.innerHTML;
        treatmentsInput.setAttribute('value', title.innerHTML);
        newTreatment.classList = 'form__container-input-treatment';
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '24');
        svg.setAttribute('height', '24');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.innerHTML = `
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#BA1C68" stroke="#BA1C68" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 12H16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    `;
        svg.classList = 'form__container-input-treatment-svg';
        svg.addEventListener('click', () => {
            removeTreatment(inputBox, newTreatment, treatments[0]);
        });
        newTreatment.appendChild(svg);
        inputBox.appendChild(newTreatment);
    } else {
        // treatmentsInput.value = '';
        treatmentsInput.setAttribute('value', '');
        inputBox.innerHTML = '';
    }
};

const removeTreatment = (inputBox, newTreatment, treatment) => {
    inputBox.removeChild(newTreatment);
    treatment.classList.remove('active');
    let btn = treatment.querySelector('.form__modal-container__treatment-list-item-checkbox');
    let activeBtn = treatment.querySelector('.form__modal-container__treatment-list-item-checkbox-active');
    activeBtn.classList.remove('active');
    btn.classList.remove('inactive');

    let list = document.querySelectorAll('.form__modal-container__treatment-list-item.active');
    const treatmentsInput = document.querySelector('#tretmani-label input');
    treatmentsInput.setAttribute('value', '');
    list.forEach((treatment, index) => {
        const title = treatment.querySelector('.form__modal-container__treatment-list-item-title');
        treatmentsInput.setAttribute('value', `${treatmentsInput.getAttribute('value')}${index === 0 ? '' : ', '}${title.innerHTML}`);
    });
};

if (treatmentButton) {
    treatmentButton.addEventListener('click', (event) => {
        event.preventDefault();
        let list = document.querySelectorAll('.form__modal-container__treatment-list-item.active');
        formInput.innerHTML = '';
        addTreatments(list, formInput);
        modal.classList.remove('show');
    });
}

const treatmentSearch = (input, searches) => {
    let term = input.value.toLowerCase();
    searches.forEach((search) => {
        let title = search.querySelector('.form__modal-container__treatment-title');
        let list = search.querySelector('.form__modal-container__treatment-list');
        let listItem = list.querySelectorAll('.form__modal-container__treatment-list-item');

        let anyMatch = false;

        listItem.forEach((item) => {
            let listItemTitle = item.querySelector('.form__modal-container__treatment-list-item-title');
            let filter = listItemTitle.innerText.toLowerCase();
            if (filter.includes(term)) {
                item.classList.remove('d-none');
                anyMatch = true;
            } else {
                item.classList.add('d-none');
            }
        });

        if (anyMatch) {
            search.classList.remove('d-none');
            title.classList.add('active');
            list.classList.add('active');
        } else {
            search.classList.add('d-none');
            title.classList.remove('active');
            list.classList.remove('active');
        }

        if (term === '') {
            search.classList.remove('d-none');
            title.classList.remove('active');
            list.classList.remove('active');
        }
    });
};

const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, delay);
    };
};

if (treatmentSearchTerm) {
    treatmentSearchTerm.addEventListener('input', () => {
        const delayedSearch = debounce(() => {
            treatmentSearch(treatmentSearchTerm, treatmentDiv);
        }, 700);
        delayedSearch();
    });
}

if (treatmentSearchButton) {
    treatmentSearchButton.addEventListener('click', () => {
        treatmentSearch(treatmentSearchTerm, treatmentDiv);
    });
}

treatmentListItemTitles.forEach((item) => {
    if (item.id === searchParamsTreatment) {
        let itemParent = item.closest('.form__modal-container__treatment');
        let title = itemParent.querySelector('.form__modal-container__treatment-title');
        let titleSvg = title.querySelector('.form__modal-container__treatment-title-svg');
        let list = itemParent.querySelector('.form__modal-container__treatment-list');
        let listItem = item.closest('.form__modal-container__treatment-list-item');
        let inactiveCheckbox = listItem.querySelector('.form__modal-container__treatment-list-item-checkbox');
        let activeCheckbox = listItem.querySelector('.form__modal-container__treatment-list-item-checkbox-active');
        modal.classList.add('show');
        itemParent.classList.add('active');
        list.classList.add('active');
        title.classList.add('active');
        titleSvg.classList.add('active');
        item.classList.add('active');
        inactiveCheckbox.classList.add('inactive');
        activeCheckbox.classList.add('active');
        listItem.classList.add('active');
        let itemArray = Array(item.parentElement);
        addTreatments(itemArray, formInput);
    }
});
