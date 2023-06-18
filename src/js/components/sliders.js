import Swiper, {Pagination, Autoplay} from "swiper";

Swiper.use([Pagination, Autoplay]);

const careerImageItems = document.querySelectorAll('.career__image-item');

careerImageItems.forEach((item, i) => {
  item.classList.add(`career__image-item_${i % 2 ? 'even' : 'odd'}`)
});

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
      576:{
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
