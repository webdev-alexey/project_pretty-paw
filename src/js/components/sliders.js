import Swiper, {Pagination, Autoplay} from "swiper";

Swiper.use([Pagination, Autoplay]);

const swiper = new Swiper('.about__slider', {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnIneraction: false,
    },
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
    },
    modules: [Autoplay, Pagination]
});

// const params = {
//     spaceBetween: 20,
//     loop: true,
//     autoplay: {
//         delay: 3500,
//         disableOnIneraction: false,
//     },
//     slidesPerView: 1,
//     pagination: {
//         el: '.swiper-pagination',
//     },
//     modules: [Autoplay, Pagination]
// }

// export const slidersInit = (selectorSlider, newParams) =>{
//     new Swiper(selectorSlider, {
//         ...params,
//         ...newParams
//     })
// };
