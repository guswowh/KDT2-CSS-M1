const promotionEl = document.querySelector('.content');
const promotionToggleBtn = document.querySelector('.btn');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    // 숨김 처리!
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리!
    promotionEl.classList.remove('hide');
  }
});

const promotionEl2 = document.querySelector('.familysite');
const promotionToggleBtn2 = document.querySelector('.familysite .btn');
let isHidePromotion2 = false;
promotionToggleBtn2.addEventListener('click', function () {
  isHidePromotion2 = !isHidePromotion2
  if (isHidePromotion2) {
    // 숨김 처리!
    promotionToggleBtn2.classList.add('on');
  } else {
    // 보임 처리!
    promotionToggleBtn2.classList.remove('on');
  }
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 1, // 한번에 보여줄 슬라이드 개수
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false // 클릭 후에도 자동 슬라이드
  },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

new Swiper('.slide .swiper-container', {
  slidesPerView: 4,
  spaceBetween : 10, //슬라이드간 간격
  slidesPerGroup : 4, //그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false // 사용자 제어 후에도 자동 슬라이드
  },
  pagination: {
    el: '.slide .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  }
});

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .6,
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

const backEls = document.querySelectorAll('section.scroll-back');
backEls.forEach(function (backEl) {
  new ScrollMagic
    .Scene({
      triggerElement: backEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .7,
    })
    .setClassToggle(backEl, 'back')
    .addTo(new ScrollMagic.Controller());
});

const fontEls = document.querySelectorAll('section.scroll-font');
fontEls.forEach(function (fontEl) {
  new ScrollMagic
    .Scene({
      triggerElement: fontEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .7,
    })
    .setClassToggle(fontEl, 'font')
    .addTo(new ScrollMagic.Controller());
});

new Swiper('.footer_slide .swiper-container', {
  slidesPerView: 7.5,
  slidesPerGroup : 4,
  spaceBetween : 0,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
});

function familysite() {
  let click = document.getElementById('familysite_menu')
  if(click.style.display === "none"){
    click.style.display = "block"
  }else {
    click.style.display = "none"
  }
}



