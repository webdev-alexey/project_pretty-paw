import Swiper, {Pagination, Autoplay} from "swiper";

Swiper.use([Pagination, Autoplay]);

const swiper = new Swiper('.about__slider', {
  spaceBetween: 20,
  loop: true,
  autoplay: {
      delay: 3500,
      disableOnIneraction: false,
  },
  pagination: {
    el: '.about__slider-pagination',
  }
});

const swiper2 = new Swiper('.career__slider', {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnIneraction: false,
  },
  pagination: {
    el: '.career__slider-pagination',
  },
  breakpoints:{
      768:{
          slidesPerView: 'auto',
          spaceBetween: 20,
          pagination: false,
      },
      1024:{
          slidesPerView: 'auto',
          spaceBetween: 26,
          pagination: false,
      },
      1240:{
          slidesPerView: 'auto',
          spaceBetween: 30,
          pagination: false,
      },
  }
});
