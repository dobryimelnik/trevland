// swiper-slider
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 70,
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