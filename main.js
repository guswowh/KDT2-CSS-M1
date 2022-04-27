const toTopEl = document.querySelector('#to-top');
const toggleBtn = document.querySelector('#toggle-button');
const menu = document.querySelector('.popup-menu');

// 페이지 상단 이동 버튼
toTopEl.addEventListener('click', () => {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

// 반응형 웹 햄버거 메뉴 클릭 시 메뉴 펼침, 숨김 처리
toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// slide 영역
new Swiper('.swiper', {
  autoplay: {
    delay: 7000,
    loop: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
