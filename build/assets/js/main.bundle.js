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
/******/ 	__webpack_require__.p = "/";
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
  var headerFixed = $('.header-fixed');

  var changeState = function changeState(_ref) {
    var isActive = _ref.isActive;

    if (isActive) {
      headerFixed.addClass('open');
    } else headerFixed.removeClass('open');
  };

  ScrollTrigger.create({
    start: 'top+=350',
    onToggle: changeState
  });
}
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

var pricingListSection = $('section.pricing-list');

if (pricingListSection.length) {
  var pricingListCategory = $('.pricing-list__category');
  pricingListCategory.each(function () {
    var _this = this;

    var pricingListHeader = $(this).find('.pricing-list__category-header');
    var pricingListTable = $(this).find('.pricing-list__category-table');
    pricingListHeader.click(function () {
      $(_this).toggleClass('open');
      var maxHeight = $(pricingListTable).css('max-height');

      if (maxHeight === '0px') {
        $(pricingListTable).css('max-height', $(pricingListTable).prop('scrollHeight'));
      } else $(pricingListTable).css('max-height', '0px');
    });
  });
}
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



var swiperInstances;
var sliderMomentumRatio = 0.455;
var servicesSlider = $('.services-slider__slider');
var brandsSlider = $('.brands-slider__slider');

function setupServicesSlider() {
  swiperInstances.servicesSlider.instance = new swiper__WEBPACK_IMPORTED_MODULE_0___default.a(servicesSlider[0], {
    // eslint-disable-line
    slidesPerView: 3,
    spaceBetween: 20,
    freeMode: false,
    freeModeMomentumRatio: sliderMomentumRatio,
    centeredSlides: true,
    loop: true,
    autoplay: true // navigation: {
    //     prevEl: '.text-slider__arrow-left',
    //     nextEl: '.text-slider__arrow-right',
    // },

  });
}

function setupBrandsSlider() {
  swiperInstances.brandsSlider.instance = new swiper__WEBPACK_IMPORTED_MODULE_0___default.a(brandsSlider[0], {
    // eslint-disable-line
    slidesPerView: 4,
    // spaceBetween: 20,
    freeMode: false,
    freeModeMomentumRatio: sliderMomentumRatio,
    loop: true,
    speed: 1600,
    autoplay: {
      delay: 600,
      disableOnInteraction: false
    } // navigation: {
    //     prevEl: '.text-slider__arrow-left',
    //     nextEl: '.text-slider__arrow-right',
    // },

  });
}

if (swiper__WEBPACK_IMPORTED_MODULE_0___default.a) {
  // ---- ALL SLIDERS -----
  var IsInitialized = function IsInitialized(ele) {
    return ele.hasClass('swiper-container-initialized');
  };

  swiperInstances = {
    servicesSlider: {
      instance: null,
      init: false
    },
    brandsSlider: {
      instance: null,
      init: false
    }
  }; // --------  SERVICE SLIDER --------

  if (servicesSlider.length) {
    if (!IsInitialized(servicesSlider)) {
      setupServicesSlider();
    }
  } // --------  BRANDS SLIDER --------


  if (brandsSlider.length) {
    if (!IsInitialized(brandsSlider)) {
      setupBrandsSlider();
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (swiperInstances);
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

__webpack_require__(/*! ./assets/styles/main.scss */ "./src/assets/styles/main.scss"); // -------------- Lazy load -----------------

/*
 * import LazyImageLoader from './assets/scripts/components/lazyimageloader.js';
 * LazyImageLoader.init();
 */
// ----------- Custom scripts ---------------


__webpack_require__(/*! ./assets/scripts/components/header.js */ "./src/assets/scripts/components/header.js");

__webpack_require__(/*! ./assets/scripts/components/slider.js */ "./src/assets/scripts/components/slider.js");

__webpack_require__(/*! ./assets/scripts/components/pricingList.js */ "./src/assets/scripts/components/pricingList.js"); // require('./assets/scripts/components/anchor.js');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cyBzeW5jIFxcLihzdmd8cG5nfGpwZSIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ljb25zL3N2Zy9hcnJvdy13aGl0ZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pY29ucy9zdmcvYXJyb3cuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaWNvbnMvc3ZnL2NhbGVuZGFyLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ljb25zL3N2Zy9jbG9zZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pY29ucy9zdmcvZGlhZ29uYWwtYXJyb3cuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaWNvbnMvc3ZnL2Ryb3Bkb3duLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy80MDQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9wcmljaW5nTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zdHlsZXMvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJnc2FwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiU3dpcGVyXCIiXSwibmFtZXMiOlsiZ3NhcCIsImhlYWRlckZpeGVkIiwiJCIsImNoYW5nZVN0YXRlIiwiaXNBY3RpdmUiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiU2Nyb2xsVHJpZ2dlciIsImNyZWF0ZSIsInN0YXJ0Iiwib25Ub2dnbGUiLCJwcmljaW5nTGlzdFNlY3Rpb24iLCJsZW5ndGgiLCJwcmljaW5nTGlzdENhdGVnb3J5IiwiZWFjaCIsInByaWNpbmdMaXN0SGVhZGVyIiwiZmluZCIsInByaWNpbmdMaXN0VGFibGUiLCJjbGljayIsInRvZ2dsZUNsYXNzIiwibWF4SGVpZ2h0IiwiY3NzIiwicHJvcCIsInN3aXBlckluc3RhbmNlcyIsInNsaWRlck1vbWVudHVtUmF0aW8iLCJzZXJ2aWNlc1NsaWRlciIsImJyYW5kc1NsaWRlciIsInNldHVwU2VydmljZXNTbGlkZXIiLCJpbnN0YW5jZSIsIlN3aXBlciIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJmcmVlTW9kZSIsImZyZWVNb2RlTW9tZW50dW1SYXRpbyIsImNlbnRlcmVkU2xpZGVzIiwibG9vcCIsImF1dG9wbGF5Iiwic2V0dXBCcmFuZHNTbGlkZXIiLCJzcGVlZCIsImRlbGF5IiwiZGlzYWJsZU9uSW50ZXJhY3Rpb24iLCJJc0luaXRpYWxpemVkIiwiZWxlIiwiaGFzQ2xhc3MiLCJpbml0IiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNB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Q0FBQ2hCLGNBQUQsQ0FBbEIsRUFBb0M7QUFDaENFLHlCQUFtQjtBQUN0QjtBQUNKLEdBZk8sQ0FpQlI7OztBQUVBLE1BQUlELFlBQVksQ0FBQ2QsTUFBakIsRUFBeUI7QUFDckIsUUFBSSxDQUFDNkIsYUFBYSxDQUFDZixZQUFELENBQWxCLEVBQWtDO0FBQzlCVyx1QkFBaUI7QUFDcEI7QUFDSjtBQUNKOztBQUVjZCw4RUFBZixFOzs7Ozs7Ozs7Ozs7QUN4RUEsdUM7Ozs7Ozs7Ozs7OztDQ0VBOztBQUVBc0Isc0VBQUE7O0FBQ0FBLG1CQUFPLENBQUMsZ0VBQUQsQ0FBUCxDLENBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUFBLG1CQUFPLENBQUMsd0ZBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyx3RkFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLGtHQUFELENBQVAsQyxDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0Q7Ozs7Ozs7Ozs7O0FDaENBLHNCOzs7Ozs7Ozs7OztBQ0FBLHdCOzs7Ozs7Ozs7OztBQ0FBLHdCIiwiZmlsZSI6ImFzc2V0cy9qcy9tYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9pY29ucy9zdmcvYXJyb3ctd2hpdGUuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ljb25zL3N2Zy9hcnJvdy13aGl0ZS5zdmdcIixcblx0XCIuL2ljb25zL3N2Zy9hcnJvdy5zdmdcIjogXCIuL3NyYy9hc3NldHMvaWNvbnMvc3ZnL2Fycm93LnN2Z1wiLFxuXHRcIi4vaWNvbnMvc3ZnL2NhbGVuZGFyLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pY29ucy9zdmcvY2FsZW5kYXIuc3ZnXCIsXG5cdFwiLi9pY29ucy9zdmcvY2xvc2Uuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ljb25zL3N2Zy9jbG9zZS5zdmdcIixcblx0XCIuL2ljb25zL3N2Zy9kaWFnb25hbC1hcnJvdy5zdmdcIjogXCIuL3NyYy9hc3NldHMvaWNvbnMvc3ZnL2RpYWdvbmFsLWFycm93LnN2Z1wiLFxuXHRcIi4vaWNvbnMvc3ZnL2Ryb3Bkb3duLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pY29ucy9zdmcvZHJvcGRvd24uc3ZnXCIsXG5cdFwiLi9pbWFnZXMvNDA0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvNDA0LnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMgc3luYyByZWN1cnNpdmUgXFxcXC4oc3ZnfHBuZ3xqcGU/ZykkXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uL2ljb25zL3N2Zy9hcnJvdy13aGl0ZS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vaWNvbnMvc3ZnL2Fycm93LnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi9pY29ucy9zdmcvY2FsZW5kYXIuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uL2ljb25zL3N2Zy9jbG9zZS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vaWNvbnMvc3ZnL2RpYWdvbmFsLWFycm93LnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIuLi9pY29ucy9zdmcvZHJvcGRvd24uc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi4uL2ltYWdlcy80MDQucG5nXCI7IiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJztcblxuaWYgKGdzYXApIHtcbiAgICBjb25zdCBoZWFkZXJGaXhlZCA9ICQoJy5oZWFkZXItZml4ZWQnKTtcblxuICAgIGNvbnN0IGNoYW5nZVN0YXRlID0gKHsgaXNBY3RpdmUgfSkgPT4ge1xuICAgICAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIGhlYWRlckZpeGVkLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgICAgIH0gZWxzZSBoZWFkZXJGaXhlZC5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgIH07XG5cbiAgICBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgICAgIHN0YXJ0OiAndG9wKz0zNTAnLFxuICAgICAgICBvblRvZ2dsZTogY2hhbmdlU3RhdGUsXG4gICAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBwcmljaW5nTGlzdFNlY3Rpb24gPSAkKCdzZWN0aW9uLnByaWNpbmctbGlzdCcpO1xyXG5cclxuaWYgKHByaWNpbmdMaXN0U2VjdGlvbi5sZW5ndGgpIHtcclxuICAgIGNvbnN0IHByaWNpbmdMaXN0Q2F0ZWdvcnkgPSAkKCcucHJpY2luZy1saXN0X19jYXRlZ29yeScpO1xyXG5cclxuICAgIHByaWNpbmdMaXN0Q2F0ZWdvcnkuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgcHJpY2luZ0xpc3RIZWFkZXIgPSAkKHRoaXMpLmZpbmQoJy5wcmljaW5nLWxpc3RfX2NhdGVnb3J5LWhlYWRlcicpO1xyXG4gICAgICAgIGNvbnN0IHByaWNpbmdMaXN0VGFibGUgPSAkKHRoaXMpLmZpbmQoJy5wcmljaW5nLWxpc3RfX2NhdGVnb3J5LXRhYmxlJyk7XHJcblxyXG4gICAgICAgIHByaWNpbmdMaXN0SGVhZGVyLmNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbWF4SGVpZ2h0ID0gJChwcmljaW5nTGlzdFRhYmxlKS5jc3MoJ21heC1oZWlnaHQnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChtYXhIZWlnaHQgPT09ICcwcHgnKSB7XHJcbiAgICAgICAgICAgICAgICAkKHByaWNpbmdMaXN0VGFibGUpLmNzcygnbWF4LWhlaWdodCcsICQocHJpY2luZ0xpc3RUYWJsZSkucHJvcCgnc2Nyb2xsSGVpZ2h0JykpO1xyXG4gICAgICAgICAgICB9IGVsc2UgJChwcmljaW5nTGlzdFRhYmxlKS5jc3MoJ21heC1oZWlnaHQnLCAnMHB4Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBTd2lwZXIgZnJvbSAnc3dpcGVyJztcblxubGV0IHN3aXBlckluc3RhbmNlcztcblxuY29uc3Qgc2xpZGVyTW9tZW50dW1SYXRpbyA9IDAuNDU1O1xuXG5jb25zdCBzZXJ2aWNlc1NsaWRlciA9ICQoJy5zZXJ2aWNlcy1zbGlkZXJfX3NsaWRlcicpO1xuY29uc3QgYnJhbmRzU2xpZGVyID0gJCgnLmJyYW5kcy1zbGlkZXJfX3NsaWRlcicpO1xuXG5mdW5jdGlvbiBzZXR1cFNlcnZpY2VzU2xpZGVyICgpIHtcbiAgICBzd2lwZXJJbnN0YW5jZXMuc2VydmljZXNTbGlkZXIuaW5zdGFuY2UgPSBuZXcgU3dpcGVyKHNlcnZpY2VzU2xpZGVyWzBdLCB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgICAgZnJlZU1vZGU6IGZhbHNlLFxuICAgICAgICBmcmVlTW9kZU1vbWVudHVtUmF0aW86IHNsaWRlck1vbWVudHVtUmF0aW8sXG4gICAgICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgLy8gbmF2aWdhdGlvbjoge1xuICAgICAgICAvLyAgICAgcHJldkVsOiAnLnRleHQtc2xpZGVyX19hcnJvdy1sZWZ0JyxcbiAgICAgICAgLy8gICAgIG5leHRFbDogJy50ZXh0LXNsaWRlcl9fYXJyb3ctcmlnaHQnLFxuICAgICAgICAvLyB9LFxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzZXR1cEJyYW5kc1NsaWRlciAoKSB7XG4gICAgc3dpcGVySW5zdGFuY2VzLmJyYW5kc1NsaWRlci5pbnN0YW5jZSA9IG5ldyBTd2lwZXIoYnJhbmRzU2xpZGVyWzBdLCB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICAgICAgLy8gc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgICAgZnJlZU1vZGU6IGZhbHNlLFxuICAgICAgICBmcmVlTW9kZU1vbWVudHVtUmF0aW86IHNsaWRlck1vbWVudHVtUmF0aW8sXG4gICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgIHNwZWVkOiAxNjAwLFxuICAgICAgICBhdXRvcGxheTp7XG4gICAgICAgICAgICBkZWxheTogNjAwLFxuICAgICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIC8vIG5hdmlnYXRpb246IHtcbiAgICAgICAgLy8gICAgIHByZXZFbDogJy50ZXh0LXNsaWRlcl9fYXJyb3ctbGVmdCcsXG4gICAgICAgIC8vICAgICBuZXh0RWw6ICcudGV4dC1zbGlkZXJfX2Fycm93LXJpZ2h0JyxcbiAgICAgICAgLy8gfSxcbiAgICB9KTtcbn1cblxuaWYgKFN3aXBlcikge1xuICAgIC8vIC0tLS0gQUxMIFNMSURFUlMgLS0tLS1cblxuICAgIGNvbnN0IElzSW5pdGlhbGl6ZWQgPSAoZWxlKSA9PiBlbGUuaGFzQ2xhc3MoJ3N3aXBlci1jb250YWluZXItaW5pdGlhbGl6ZWQnKTtcbiAgICBzd2lwZXJJbnN0YW5jZXMgPSB7XG4gICAgICAgIHNlcnZpY2VzU2xpZGVyOiAgICAgICB7IGluc3RhbmNlOiBudWxsLCBpbml0OiBmYWxzZSB9LFxuICAgICAgICBicmFuZHNTbGlkZXI6ICAgICAgICAgeyBpbnN0YW5jZTogbnVsbCwgaW5pdDogZmFsc2UgfSxcbiAgICB9O1xuXG4gICAgLy8gLS0tLS0tLS0gIFNFUlZJQ0UgU0xJREVSIC0tLS0tLS0tXG5cbiAgICBpZiAoc2VydmljZXNTbGlkZXIubGVuZ3RoKSB7XG4gICAgICAgIGlmICghSXNJbml0aWFsaXplZChzZXJ2aWNlc1NsaWRlcikpIHtcbiAgICAgICAgICAgIHNldHVwU2VydmljZXNTbGlkZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tICBCUkFORFMgU0xJREVSIC0tLS0tLS0tXG5cbiAgICBpZiAoYnJhbmRzU2xpZGVyLmxlbmd0aCkge1xuICAgICAgICBpZiAoIUlzSW5pdGlhbGl6ZWQoYnJhbmRzU2xpZGVyKSkge1xuICAgICAgICAgICAgc2V0dXBCcmFuZHNTbGlkZXIoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc3dpcGVySW5zdGFuY2VzO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLS0tLS0tIEltYWdlIC8gY3NzIGFzc2V0cyAtLS0tLS0tLS0tLS1cblxucmVxdWlyZS5jb250ZXh0KCcuL2Fzc2V0cy8nLCB0cnVlLCAvXFwuKHN2Z3xwbmd8anBlP2cpJC8pO1xucmVxdWlyZSgnLi9hc3NldHMvc3R5bGVzL21haW4uc2NzcycpO1xuXG4vLyAtLS0tLS0tLS0tLS0tLSBMYXp5IGxvYWQgLS0tLS0tLS0tLS0tLS0tLS1cblxuLypcbiAqIGltcG9ydCBMYXp5SW1hZ2VMb2FkZXIgZnJvbSAnLi9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL2xhenlpbWFnZWxvYWRlci5qcyc7XG4gKiBMYXp5SW1hZ2VMb2FkZXIuaW5pdCgpO1xuICovXG5cbi8vIC0tLS0tLS0tLS0tIEN1c3RvbSBzY3JpcHRzIC0tLS0tLS0tLS0tLS0tLVxuXG5yZXF1aXJlKCcuL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvaGVhZGVyLmpzJyk7XG5yZXF1aXJlKCcuL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvc2xpZGVyLmpzJyk7XG5yZXF1aXJlKCcuL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvcHJpY2luZ0xpc3QuanMnKTtcbi8vIHJlcXVpcmUoJy4vYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9hbmNob3IuanMnKTtcbi8vIHJlcXVpcmUoJy4vYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9zaG93Y2FzZS5qcycpO1xuLy8gcmVxdWlyZSgnLi9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL2Ryb3Bkb3duLmpzJyk7XG4vLyByZXF1aXJlKCcuL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvYmxvZ0FydGljbGUuanMnKTtcbi8vIHJlcXVpcmUoJy4vYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9zZWFyY2guanMnKTtcbi8vIHJlcXVpcmUoJy4vYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9sb2FkZXIuanMnKTtcbi8vIHJlcXVpcmUoJy4vYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9maWx0ZXIuanMnKTtcbi8vIHJlcXVpcmUoJy4vYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9jYWxlbmRhci5qcycpO1xuLy8gcmVxdWlyZSgnLi9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL3NoYXJlLmpzJyk7XG4vLyByZXF1aXJlKCcuL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvZ2FsbGVyeS5qcycpO1xuLy8gcmVxdWlyZSgnLi9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL3Bob3RvQ29sbGVjdGlvbi5qcycpO1xuLy8gcmVxdWlyZSgnLi9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL2FjY3JlZGl0YXRpb24uanMnKTtcbi8vIHJlcXVpcmUoJy4vYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9zcGxpdFRleHQuanMnKTtcbi8vIHJlcXVpcmUoJy4vYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9pbWFnZXMuanMnKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZ3NhcDsiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiLCJtb2R1bGUuZXhwb3J0cyA9IFN3aXBlcjsiXSwic291cmNlUm9vdCI6IiJ9