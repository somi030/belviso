/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/assets/js";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets sync recursive \\.(svg|png|jpe?g)$":
/*!********************************************!*\
  !*** ./src/assets sync \.(svg|png|jpe?g)$ ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./icons/svg/arrow-white.svg": "./src/assets/icons/svg/arrow-white.svg",
	"./icons/svg/arrow.svg": "./src/assets/icons/svg/arrow.svg",
	"./icons/svg/calendar.svg": "./src/assets/icons/svg/calendar.svg",
	"./icons/svg/close.svg": "./src/assets/icons/svg/close.svg",
	"./icons/svg/diagonal-arrow.svg": "./src/assets/icons/svg/diagonal-arrow.svg",
	"./icons/svg/dropdown.svg": "./src/assets/icons/svg/dropdown.svg",
	"./images/404.png": "./src/assets/images/404.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets sync recursive \\.(svg|png|jpe?g)$";

/***/ }),

/***/ "./src/assets/icons/svg/arrow-white.svg":
/*!**********************************************!*\
  !*** ./src/assets/icons/svg/arrow-white.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "../icons/svg/arrow-white.svg";

/***/ }),

/***/ "./src/assets/icons/svg/arrow.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/svg/arrow.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "../icons/svg/arrow.svg";

/***/ }),

/***/ "./src/assets/icons/svg/calendar.svg":
/*!*******************************************!*\
  !*** ./src/assets/icons/svg/calendar.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "../icons/svg/calendar.svg";

/***/ }),

/***/ "./src/assets/icons/svg/close.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/svg/close.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "../icons/svg/close.svg";

/***/ }),

/***/ "./src/assets/icons/svg/diagonal-arrow.svg":
/*!*************************************************!*\
  !*** ./src/assets/icons/svg/diagonal-arrow.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "../icons/svg/diagonal-arrow.svg";

/***/ }),

/***/ "./src/assets/icons/svg/dropdown.svg":
/*!*******************************************!*\
  !*** ./src/assets/icons/svg/dropdown.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "../icons/svg/dropdown.svg";

/***/ }),

/***/ "./src/assets/images/404.png":
/*!***********************************!*\
  !*** ./src/assets/images/404.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "../images/404.png";

/***/ }),

/***/ "./src/assets/scripts/components/form.js":
/*!***********************************************!*\
  !*** ./src/assets/scripts/components/form.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
selectItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
    if (!selectedArray.includes(item)) {
      selectedArray.push(item);
    } else {
      selectedArray.splice(selectedArray.indexOf(item), 1);
    }
    treatmentTitle.forEach(title => {
      const parentDiv = title.parentElement;
      const trimmedTitleText = title.innerText.trim();
      if (selectedArray.length === 0 || selectedArray.some(selectedItem => selectedItem.innerText.trim() === trimmedTitleText)) {
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
    title.scrollIntoView({
      behavior: 'smooth'
    });
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
      treatmentsInput.setAttribute('value', "".concat(treatmentsInput.getAttribute('value')).concat(index === 0 ? '' : ', ').concat(title.innerHTML));
      newTreatment.classList = 'form__container-input-treatment';
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', '24');
      svg.setAttribute('height', '24');
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.innerHTML = "\n        <path d=\"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z\" fill=\"#BA1C68\" stroke=\"#BA1C68\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        <path d=\"M8 12H16\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n      ";
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
    svg.innerHTML = "\n    <path d=\"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z\" fill=\"#BA1C68\" stroke=\"#BA1C68\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    <path d=\"M8 12H16\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    ";
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
    treatmentsInput.setAttribute('value', "".concat(treatmentsInput.getAttribute('value')).concat(index === 0 ? '' : ', ').concat(title.innerHTML));
  });
};
if (treatmentButton) {
  treatmentButton.addEventListener('click', event => {
    event.preventDefault();
    let list = document.querySelectorAll('.form__modal-container__treatment-list-item.active');
    formInput.innerHTML = '';
    addTreatments(list, formInput);
    modal.classList.remove('show');
  });
}
const treatmentSearch = (input, searches) => {
  let term = input.value.toLowerCase();
  searches.forEach(search => {
    let title = search.querySelector('.form__modal-container__treatment-title');
    let list = search.querySelector('.form__modal-container__treatment-list');
    let listItem = list.querySelectorAll('.form__modal-container__treatment-list-item');
    let anyMatch = false;
    listItem.forEach(item => {
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
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
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
treatmentListItemTitles.forEach(item => {
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

/***/ }),

/***/ "./src/assets/scripts/components/header.js":
/*!*************************************************!*\
  !*** ./src/assets/scripts/components/header.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "gsap");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_0__);



if (gsap__WEBPACK_IMPORTED_MODULE_0___default.a) {
  const headerFixed = $('.header__fixed');
  const header = $('.header');
  const changeState = _ref => {
    let {
      isActive
    } = _ref;
    if (isActive) {
      headerFixed.addClass('open');
    } else {
      headerFixed.removeClass('open');
    }
  };
  const changeStateMobile = _ref2 => {
    let {
      isActive
    } = _ref2;
    if (isActive) {
      header.addClass('color');
    } else {
      header.removeClass('color');
    }
  };
  ScrollTrigger.create({
    start: 'top+=350',
    end: document.body.scrollHeight,
    onToggle: changeState
  });
  ScrollTrigger.create({
    start: 'top+=30',
    end: document.body.scrollHeight,
    onToggle: changeStateMobile
  });
}
const header = document.querySelector('.header');
const headerHamburger = document.querySelector('.header__hamburger');
const headerNavigation = document.querySelector('.header__navigation-mobile');
const headerLinks = headerNavigation.querySelector('#menu-main-menu-1');
const headerLinksLink = headerLinks.querySelectorAll('li');
headerLinksLink.forEach(link => {
  let subMenu = link.querySelector('.sub-menu');
  if (subMenu) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '15');
    svg.setAttribute('height', '15');
    svg.setAttribute('viewBox', '0 0 512 512');
    svg.innerHTML = "\n      <path fill=\"#fff\" d=\"M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z\"/>\n      ";
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/assets/scripts/components/pricingList.js":
/*!******************************************************!*\
  !*** ./src/assets/scripts/components/pricingList.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

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
searchButtons.forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();
    let idFinder = button.closest('.row').querySelector('.id-finder');
    let homeUrl = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port + '/belviso/';
    let urlWithoutSearch = homeUrl + 'zakazivanje';
    let searchParams = new URLSearchParams({
      treatment: idFinder.id
    });
    let urlWithSearch = urlWithoutSearch + '?' + searchParams.toString();
    window.location.href = urlWithSearch;
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/assets/scripts/components/sales.js":
/*!************************************************!*\
  !*** ./src/assets/scripts/components/sales.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
  let maxLength;
  window.innerWidth > 576 ? maxLength = 250 : maxLength = 150;
  let ellipsestext = '...';
  let moretext = 'PRIKAZI JOS';
  let lesstext = 'PRIKAZI MANJE';
  $('.sales__sale-description').each(function () {
    let myStr = $(this).text();
    if ($.trim(myStr).length > maxLength) {
      let newStr = myStr.substring(0, maxLength);
      let removedStr = myStr.substr(maxLength, $.trim(myStr).length - maxLength);
      let Newhtml = newStr + '<span class="moreellipses">' + ellipsestext + '</span><span class="morecontent"><span>' + removedStr + '</span>&nbsp;&nbsp;<a href="javascript:void(0)" class="sales__sale-read-more ReadMore">' + moretext + '</a></span>';
      $(this).html(Newhtml);
    }
  });
  $('.ReadMore').click(function () {
    if ($(this).hasClass('less')) {
      $(this).removeClass('less');
      $(this).html(moretext);
    } else {
      $(this).addClass('less');
      $(this).html(lesstext);
    }
    $(this).parent().prev().toggle();
    $(this).prev().toggle();
    return false;
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/assets/scripts/components/search.js":
/*!*************************************************!*\
  !*** ./src/assets/scripts/components/search.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
    searchTitles.forEach(title => {
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
    searchTitles.forEach(title => {
      let category = title.closest('.pricing-list__category');
      let categoryTitles = category.querySelectorAll('.pricing-list__category-search');
      let categoryTable = category.querySelector('.pricing-list__category-table');
      let categoryMatches = false;
      categoryTitles.forEach(categoryTitle => {
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
    searchTitles.forEach(title => {
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
    searchTitles.forEach(title => {
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
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
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

/***/ }),

/***/ "./src/assets/scripts/components/services-list.js":
/*!********************************************************!*\
  !*** ./src/assets/scripts/components/services-list.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const servicesButtons = document.querySelectorAll('.services-list__service-schedule');
servicesButtons.forEach(button => {
  button.addEventListener('click', event => {
    event.preventDefault();
    let buttonParent = button.closest('.services-list__service');
    let title = buttonParent.querySelector('.services-list__service-name').innerText.toLowerCase();
    let homeUrl = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port + '/belviso/';
    let urlWithoutSearch = homeUrl + 'zakazivanje';
    let searchParams = new URLSearchParams({
      title: title
    });
    let urlWithSearch = urlWithoutSearch + '?' + searchParams.toString();
    window.location.href = urlWithSearch;
  });
});

/***/ }),

/***/ "./src/assets/scripts/components/single-blog.js":
/*!******************************************************!*\
  !*** ./src/assets/scripts/components/single-blog.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
  if (window.innerWidth < 992 && $('.single-blog__suggested__treatment__description').length) {
    let maxLength;
    window.innerWidth > 576 ? maxLength = 250 : maxLength = 150;
    let ellipsestext = '...';
    let moretext = 'PRIKAZI JOS';
    let lesstext = 'PRIKAZI MANJE';
    $('.single-blog__suggested__treatment__description').each(function () {
      let myStr = $(this).text();
      if ($.trim(myStr).length > maxLength) {
        let newStr = myStr.substring(0, maxLength);
        let removedStr = myStr.substr(maxLength, $.trim(myStr).length - maxLength);
        let Newhtml = newStr + '<span class="moreellipses">' + ellipsestext + '</span><span class="morecontent"><span>' + removedStr + '</span>&nbsp;&nbsp;<a href="javascript:void(0)" class="treatments-list__treatment-read-more ReadMore">' + moretext + '</a></span>';
        $(this).html(Newhtml);
      }
    });
    $('.ReadMore').click(function () {
      if ($(this).hasClass('less')) {
        $(this).removeClass('less');
        $(this).html(moretext);
      } else {
        $(this).addClass('less');
        $(this).html(lesstext);
      }
      $(this).parent().prev().toggle();
      $(this).prev().toggle();
      return false;
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/assets/scripts/components/slider.js":
/*!*************************************************!*\
  !*** ./src/assets/scripts/components/slider.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "swiper");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper__WEBPACK_IMPORTED_MODULE_0__);



let swiperInstances;
const sliderMomentumRatio = 0.455;
const servicesSlider = $('.services-slider__slider');
const brandsSlider = $('.brands-slider__slider');
function setupServicesSlider() {
  swiperInstances.servicesSlider.instance = new swiper__WEBPACK_IMPORTED_MODULE_0___default.a(servicesSlider[0], {
    // eslint-disable-line
    slidesPerView: 1,
    spaceBetween: 20,
    freeMode: false,
    freeModeMomentumRatio: sliderMomentumRatio,
    centeredSlides: true,
    loop: true,
    speed: 800,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false
    },
    navigation: {
      prevEl: '.services-slider__arrow-left',
      nextEl: '.services-slider__arrow-right'
    },
    breakpoints: {
      992: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 2
      }
    }
  });
}
function setupBrandsSlider() {
  swiperInstances.brandsSlider.instance = new swiper__WEBPACK_IMPORTED_MODULE_0___default.a(brandsSlider[0], {
    // eslint-disable-line
    slidesPerView: 1,
    // spaceBetween: 20,
    freeMode: false,
    centeredSlides: true,
    freeModeMomentumRatio: sliderMomentumRatio,
    loop: true,
    speed: 1600,
    autoplay: {
      delay: 600,
      disableOnInteraction: false
    },
    // breakpoints: {
    //     992: {
    //         slidesPerView: 4,
    //     },
    //     768: {
    //         slidesPerView: 2,
    //     },
    // },
    breakpoints: {
      992: {
        slidesPerView: 4
      },
      768: {
        slidesPerView: 2
      }
    }
    // navigation: {
    //     prevEl: '.text-slider__arrow-left',
    //     nextEl: '.text-slider__arrow-right',
    // },
  });
}

if (swiper__WEBPACK_IMPORTED_MODULE_0___default.a) {
  // ---- ALL SLIDERS -----

  const IsInitialized = ele => ele.hasClass('swiper-container-initialized');
  swiperInstances = {
    servicesSlider: {
      instance: null,
      init: false
    },
    brandsSlider: {
      instance: null,
      init: false
    }
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
/* harmony default export */ __webpack_exports__["default"] = (swiperInstances);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/assets/scripts/components/treatment.js":
/*!****************************************************!*\
  !*** ./src/assets/scripts/components/treatment.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
  if (window.innerWidth < 992 && $('.treatments-list__treatment-description').length) {
    let maxLength;
    window.innerWidth > 576 ? maxLength = 250 : maxLength = 150;
    let ellipsestext = '...';
    let moretext = 'PRIKAZI JOS';
    let lesstext = 'PRIKAZI MANJE';
    $('.treatments-list__treatment-description').each(function () {
      let myStr = $(this).text();
      if ($.trim(myStr).length > maxLength) {
        let newStr = myStr.substring(0, maxLength);
        let removedStr = myStr.substr(maxLength, $.trim(myStr).length - maxLength);
        let Newhtml = newStr + '<span class="moreellipses">' + ellipsestext + '</span><span class="morecontent"><span>' + removedStr + '</span>&nbsp;&nbsp;<a href="javascript:void(0)" class="treatments-list__treatment-read-more ReadMore">' + moretext + '</a></span>';
        $(this).html(Newhtml);
      }
    });
    $('.ReadMore').click(function () {
      if ($(this).hasClass('less')) {
        $(this).removeClass('less');
        $(this).html(moretext);
      } else {
        $(this).addClass('less');
        $(this).html(lesstext);
      }
      $(this).parent().prev().toggle();
      $(this).prev().toggle();
      return false;
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/assets/styles/main.scss":
/*!*************************************!*\
  !*** ./src/assets/styles/main.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// ---------- Image / css assets ------------
__webpack_require__("./src/assets sync recursive \\.(svg|png|jpe?g)$");
__webpack_require__(/*! ./assets/styles/main.scss */ "./src/assets/styles/main.scss");

// -------------- Lazy load -----------------

/*
 * import LazyImageLoader from './assets/scripts/components/lazyimageloader.js';
 * LazyImageLoader.init();
 */

// ----------- Custom scripts ---------------

__webpack_require__(/*! ./assets/scripts/components/header.js */ "./src/assets/scripts/components/header.js");
__webpack_require__(/*! ./assets/scripts/components/slider.js */ "./src/assets/scripts/components/slider.js");
__webpack_require__(/*! ./assets/scripts/components/form.js */ "./src/assets/scripts/components/form.js");
__webpack_require__(/*! ./assets/scripts/components/search.js */ "./src/assets/scripts/components/search.js");
__webpack_require__(/*! ./assets/scripts/components/pricingList.js */ "./src/assets/scripts/components/pricingList.js");
__webpack_require__(/*! ./assets/scripts/components/sales.js */ "./src/assets/scripts/components/sales.js");
__webpack_require__(/*! ./assets/scripts/components/treatment.js */ "./src/assets/scripts/components/treatment.js");
__webpack_require__(/*! ./assets/scripts/components/single-blog.js */ "./src/assets/scripts/components/single-blog.js");
__webpack_require__(/*! ./assets/scripts/components/services-list.js */ "./src/assets/scripts/components/services-list.js");
// require('./assets/scripts/components/anchor.js');
// require('./assets/scripts/components/showcase.js');
// require('./assets/scripts/components/dropdown.js');
// require('./assets/scripts/components/blogArticle.js');
// require('./assets/scripts/components/search.js');
// require('./assets/scripts/components/loader.js');
// require('./assets/scripts/components/filter.js');
// require('./assets/scripts/components/calendar.js');
// require('./assets/scripts/components/share.js');
// require('./assets/scripts/components/gallery.js');
// require('./assets/scripts/components/photoCollection.js');
// require('./assets/scripts/components/accreditation.js');
// require('./assets/scripts/components/splitText.js');
// require('./assets/scripts/components/images.js');

/***/ }),

/***/ "gsap":
/*!***********************!*\
  !*** external "gsap" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = gsap;

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),

/***/ "swiper":
/*!*************************!*\
  !*** external "Swiper" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Swiper;

/***/ })

/******/ });