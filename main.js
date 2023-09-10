// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';


const swiper = new Swiper('.swiper-navigation', {
   autoplay: {
     delay: 5000,
   },
    breakpoints: {
      768: {
        autoplay: {
          enabled: false,
        }
      }
    },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
const swiperScroller = new Swiper(".swiper-scroller", {
  spaceBetween: 24,
  mousewheel:true,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true
  },
  slidesPerView: "auto",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
})

import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

