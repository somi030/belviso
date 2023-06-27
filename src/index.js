'use strict';

// ---------- Image / css assets ------------

require.context('./assets/', true, /\.(svg|png|jpe?g)$/);
require('./assets/styles/main.scss');

// -------------- Lazy load -----------------

/*
 * import LazyImageLoader from './assets/scripts/components/lazyimageloader.js';
 * LazyImageLoader.init();
 */

// ----------- Custom scripts ---------------

require('./assets/scripts/components/header.js');
require('./assets/scripts/components/slider.js');
require('./assets/scripts/components/form.js');
require('./assets/scripts/components/search.js');
require('./assets/scripts/components/pricingList.js');
require('./assets/scripts/components/sales.js');
require('./assets/scripts/components/treatment.js');
require('./assets/scripts/components/single-blog.js');
require('./assets/scripts/components/services-list.js');
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
