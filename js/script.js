// swiper-slider
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        460: {
        slidesPerView: 2,
        },
        890: {
        slidesPerView: 3,
        }
    },
    spaceBetween: 40,
    speed: 3000,
    effect: 'slide',  
    autoplay: {
        delay: 5000,
    },
    pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    },
});