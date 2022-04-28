import _ from 'lodash';

// NAV
const newsEl = document.querySelector('.news');
const guideEl = document.querySelector('.guide');
const guildEl = document.querySelector('.guild');
const rankingEl = document.querySelector('.ranking');
const communityEl = document.querySelector('.community');
const pdsEl = document.querySelector('.pds');
const customerEl = document.querySelector('.customer');

const menuNewsEl = document.querySelector('.news .sub_menu');
const menuGuideEl = document.querySelector('.guide .sub_menu');
const menuGuildEl = document.querySelector('.guild .sub_menu');
const menuRankingEl = document.querySelector('.ranking .sub_menu');
const menuCommunityEl = document.querySelector('.community .sub_menu');
const menuPdsEl = document.querySelector('.pds .sub_menu');
const menuCustomerEl = document.querySelector('.customer .sub_menu');

newsEl.addEventListener("mouseover", function () {
  menuNewsEl.setAttribute('style','display:block');
})
newsEl.addEventListener("mouseout", function () {
  menuNewsEl.setAttribute('style','display:none');
})
guideEl.addEventListener("mouseover", function () {
  menuGuideEl.setAttribute('style','display:block');
})
guideEl.addEventListener("mouseout", function () {
  menuGuideEl.setAttribute('style','display:none');
})
guildEl.addEventListener("mouseover", function () {
  menuGuildEl.setAttribute('style','display:block');
})
guildEl.addEventListener("mouseout", function () {
  menuGuildEl.setAttribute('style','display:none');
})
rankingEl.addEventListener("mouseover", function () {
  menuRankingEl.setAttribute('style','display:block');
})
rankingEl.addEventListener("mouseout", function () {
  menuRankingEl.setAttribute('style','display:none');
})
communityEl.addEventListener("mouseover", function () {
  menuCommunityEl.setAttribute('style','display:block');
})
communityEl.addEventListener("mouseout", function () {
  menuCommunityEl.setAttribute('style','display:none');
})
pdsEl.addEventListener("mouseover", function () {
  menuPdsEl.setAttribute('style','display:block');
})
pdsEl.addEventListener("mouseout", function () {
  menuPdsEl.setAttribute('style','display:none');
})
customerEl.addEventListener("mouseover", function () {
  menuCustomerEl.setAttribute('style','display:block');
})
customerEl.addEventListener("mouseout", function () {
  menuCustomerEl.setAttribute('style','display:none');
})


// HEADER SIDE BAR ON OFF
const menuEl = document.querySelector('.header .menu');
const closeEl = document.querySelector('.header_side_bar .layerButton .service_icon');
const headerSideBarmenuEl = document.querySelector('.header_side_bar');
const body = document.querySelector('body');

const sideBarEffectLayer = document.querySelector('.sideBarEffectLayer');

menuEl.addEventListener('click', function () {
  headerSideBarmenuEl.setAttribute('style', 'transform: translateX(0%); visibility: visible; opacity: 1;');
  sideBarEffectLayer.setAttribute('style','visibility: visible;');
  body.setAttribute('style','width: 100%; overflow:hidden;');
});
closeEl.addEventListener('click', function () {
  headerSideBarmenuEl.setAttribute('style', 'transform: translateX(-100%); visibility: hidden; opacity: 0;');
  sideBarEffectLayer.setAttribute('style','visibility: hidden');
  body.setAttribute('style','');
});

sideBarEffectLayer.addEventListener('click', function() {
  headerSideBarmenuEl.setAttribute('style', 'transform: translateX(-100%); visibility: hidden; opacity: 0;');
  sideBarEffectLayer.setAttribute('style','visibility: hidden');
  body.setAttribute('style','');
});


// HEADER SIDE BAR CHANGE GAME (MOBILE <-> PC)
const pcGame = document.querySelector('.header_side_bar .PC_Button a');
const mobileGame  = document.querySelector('.header_side_bar .Mobile_Button a');

const pcGameList = document.querySelector('.header_side_bar .PC_game_list');
const mobileGameList = document.querySelector('.header_side_bar .scrollContent .Mobile_game_list');

pcGame.setAttribute('style','display: block');
pcGame.setAttribute('style','border-bottom: 2px solid #17191d; color: #17191d; font-weight: 700;');
mobileGameList.setAttribute('style','display: none');


pcGame.addEventListener('click', function () {
  pcGameList.setAttribute('style', 'display: block');
  mobileGameList.setAttribute('style', 'display: none');
  pcGame.setAttribute('style', 'border-bottom: 2px solid #17191d; color: #17191d; font-weight: 700;');
  mobileGame.setAttribute('style', 'height: 20px; font: 12px Gothic;');
});

mobileGame.addEventListener('click', function () {
  mobileGameList.setAttribute('style', 'display: block;');
  pcGameList.setAttribute('style', 'display: none');
  mobileGame.setAttribute('style', 'border-bottom: 2px solid #17191d; color: #17191d; font-weight: 700;');
  pcGame.setAttribute('style', 'height: 20px; font: 12px Gothic;');
});



// QUICK FACEBOOK TRANS EFFECT - SCROLL
const quickFacebookEl = document.querySelector('.quick_facebook .fixed');

window.addEventListener('scroll', _.throttle(function () {
  const yScroll = window.scrollY;
  gsap.to(
    quickFacebookEl,
    {
      y: yScroll, 
      duration: 0.5
    });
  }, 100));



// SWIPER
// MAIN BAR
new Swiper ('.promotion .swiper-container', {
  speed: 0,
  allowTouchMove: false,
  paginationClickable: true,
  loop: true,
  autoplay: {
    delay: 2000
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
}); 

// KART INGAME
new Swiper('.kart_ingame .rolling_txt .swiper-container', {
  direction: 'vertical',
  allowTouchMove: false,
  autoplay: {
    delay: 20000
  },
  loop: true,
  speed: 0,
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev'
  }
});

// MEDIA KART STORY
new Swiper('.media_story .swiper-container', {
  direction: 'horizontal',
  speed: 0,
  allowTouchMove: false,
  slidesPerView: 4,
  slidesPerGroup: 5,
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev'
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction"
  },
});

// OUR KART STORY
new Swiper('.story_list_wrap .swiper-container', {
  direction: 'vertical',
  slidesPerView: 4,
  slidesPerGroup: 4,
  allowTouchMove: false,
  autoplay: {
    delay: 2000
  },
  loop: true
});