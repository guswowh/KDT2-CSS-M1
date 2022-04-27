// Swiper

const swiperProductMenu = new Swiper('.swiper.product-menu', {
  // Default parameters
  slidesPerView: 'auto',
  spaceBetween: 10,
  centeredSlides: false,
  loop: false,
  breakpoints: { // 뷰포트 1405px이상일 때 모든 항목이 보여지도록 연구중
    1405: {
      slidesPerView: 8,
      spaceBetween: 10
    }
  },


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperNewProduct = new Swiper('.swiper.new-product', {
  // Default parameters
  slidesPerView: 'auto',
  spaceBetween: 20,
  centeredSlides: false,
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperOnlyApple = new Swiper('.swiper.only-apple', {
  // Default parameters
  slidesPerView: 'auto',
  spaceBetween: 20,
  centeredSlides: false,
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperAcc = new Swiper('.swiper.accessories', {
  // Default parameters
  slidesPerView: 'auto',
  spaceBetween: 20,
  centeredSlides: false,
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperAirPods = new Swiper('.swiper.air-pods', {
  // Default parameters
  slidesPerView: 'auto',
  spaceBetween: 20,
  centeredSlides: false,
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperSpecialPrice = new Swiper('.swiper.special-price', {
  // Default parameters
  slidesPerView: 'auto',
  spaceBetween: 20,
  centeredSlides: false,
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
