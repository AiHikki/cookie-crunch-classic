import Splide from '@splidejs/splide';

new Splide('#slider1', {
  perPage: 4,
  start: 1,
  focus: 'center',
  autoplay: true,
  rewind: true,
  speed: 600,
  interval: 2000,
  gap: 32,
  trimSpace: true,
  arrows: false,
  pagination: false,
  fixedWidth: 380,
  fixedHeight: 529,
  breakpoints: {
    1439: {
      perPage: 3,
      gap: 16,
      fixedWidth: 220,
      fixedHeight: 306,
      trimSpace: false,
    },
  },
}).mount();
