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

// burger handler

(function () {
    const burgerItem = document.querySelector('.burger');
    const burgerCloseItem = document.querySelector('.header__nav-close');
    const menu = document.querySelector('.header__nav');
    const menuLinks = document.querySelectorAll('.header__link');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav_active');
        burgerItem.classList.add('burger__hidden');
    });
    burgerCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav_active');
        burgerItem.classList.remove('burger__hidden');
    });
    if (window.innerWidth <= 767) {
        for (let i = 0; i < menuLinks.length; i++) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('header__nav_active');
                burgerItem.classList.remove('burger__hidden'); 
            });
        }
    }
}());

// Scroll to anchors

(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());