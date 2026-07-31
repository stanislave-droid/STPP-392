import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

const swiper = new Swiper('#reviews-swiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 44,
  direction: 'horizontal',
  allowSlidePrev: true,
  allowSlideNext: true,
  breakpoints: {
    1440: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    bulletClass: 'swiper-pagination-empty',
    bulletActiveClass: 'swiper-pagination-active',
  },
});

createStars();
