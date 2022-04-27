// search swiper
const searchSwiper = new Swiper('.search .swiper', {
  // Optional parameters
  // direction: 'vertical',
  autoplay: true,
  loop: true,
  slidesPerView: 1, 

  // If we need pagination
  pagination: {
    el: '.search .swiper-pagination',
    type: "fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: '.search .swiper-button-next',
    prevEl: '.search .swiper-button-prev',
  },

});

let stop = document.querySelector('.stop')
stop.addEventListener('click', function() {
  searchSwiper.autoplay.stop();
  return false
})

// banner swiper
new Swiper('.banner .swiper', {
  // Optional parameters
  direction: 'vertical',
  // autoplay: true,
  loop: true,
  slidesPerView: 1, 

  // If we need pagination
  pagination: {
    el: '.banner .inner .swiper-pagination',
    type: "fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }

});

// template__event swiper
const eventSwiper = new Swiper('.template__event .swiper', {
  // Optional parameters
  // direction: 'vertical',
  autoplay: true,
  loop: true,
  slidesPerView: 1, 

  // If we need pagination
  pagination: {
    el: '.template__event .swiper-pagination',
    type: "fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: '.template__event .swiper-button-next',
    prevEl: '.template__event .swiper-button-prev',
  },

});

const pause = document.querySelector('.pause')
pause.addEventListener('click', function() {
  eventSwiper.autoplay.stop();
  return false
})


// template__marketing swiper
const marketing = new Swiper('.template__marketing .swiper', {
  // Optional parameters
  // direction: 'vertical',
  autoplay: true,
  loop: true,
  slidesPerView: 1, 

  // If we need pagination
  pagination: {
    el: '.template__marketing .swiper-pagination',
    type: "fraction",
  },

  // Navigation arrows
  navigation: {
    nextEl: '.template__marketing .swiper-button-next',
    prevEl: '.template__marketing .swiper-button-prev',
  },

});
//swiper pause
const pause1 = document.querySelector('.pause1')
pause1.addEventListener('click', function() {
  marketing.autoplay.stop();
  return false
})


// 상단 화면 + 버튼 누르면 화면 확대, - 누르면 돌아오기
const wrap = document.querySelector('.wrap')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')

plus.addEventListener('click', function (){
  wrap.style.transform += 'scale(1.2)'
  wrap.style.transformOrigin = '0px 0px'
})
minus.addEventListener('click', function (){
  wrap.style.transform = 'scale(1)'
  wrap.style.transformOrigin = '0px 0px'
})


// Language, Part 메뉴 최상단 클릭시 버튼 바뀌는 기능과 상자 이벤트리스너기능구현
const arrowL = document.querySelectorAll('.arrowL') 
const arrowR = document.querySelectorAll('.arrowR')
const language = document.querySelector('.language')
const languageBox = document.querySelector('.language__box')
const part = document.querySelector('.part')
const partBox = document.querySelector('.part__box')
let hide = false;
// 스타벅스 클론코딩 참조했어요
language.addEventListener('click', () => {
  languageBox.classList.toggle('on') //language클릭시 숨김처리된 클래스 불러오기
  hide = !hide
  if (hide) {
    arrowL[0].style.display='none' //language클릭시 버튼 내려가기 숨기기
    arrowR[0].style.display='block' //language클릭시 버튼 올리기 보이기 
  }
  else {
    arrowL[0].style.display='block' 
    arrowR[0].style.display='none'
  }
})

part.addEventListener('click', () => {
  partBox.classList.toggle('on') //part클릭시 숨김처리된 클래스 불러오기
  hide = !hide
  if (hide) {
    arrowL[1].style.display='none' //part클릭시 버튼 내려가기 숨기기
    arrowR[1].style.display='block' //part클릭시 버튼 올리기 보이기 
  }
  else {
    arrowL[1].style.display='block'
    arrowR[1].style.display='none'
  }
})


// VISITOR버튼 방문자별 맞춤 메뉴

const visitPerson = document.querySelector('.visitor__person')
const visitBusiness = document.querySelector('.visitor__business')
const person = document.querySelector('.person')
const business = document.querySelector('.business')


person.addEventListener('click', () => { //개인에 이벤트리스터 클릭
  visitPerson.style.display='block' //개인 클릭시 개인 리스트 block
  visitBusiness.style.display='none' //사업장 클릭시 개인 리스트 none
  person.classList.add('active') //개인 클릭시 css active 추가
  business.classList.remove('active') //사업장 클릭시 css active 제거
})

business.addEventListener('click', () =>{ //사업장에 이벤트리스터 클릭
  visitPerson.style.display='none' //사업장 클릭시 개인 리스트 none
  visitBusiness.style.display='block' //개인 클릭시 개인 리스트 block
  business.classList.add('active') //사업장 클릭시 css active 추가
  person.classList.remove('active') //개인 클릭시 css active 제거
})


// template__alarm  국민건강 알람서비스
const today = new Date();
const year = today.getFullYear(); //년도구하기
const month = today.getMonth()+1; //달 구하기 +1
const day = today.getDate(); //일 구하기

const res = `${year}.${month}.${day}`; //년.원.일 변수 res로
const date = document.querySelector('.date'); //data클래스
date.textContent = res; //국민건강 알람서비스부분 textContent를 통해 년, 월, 일 출력


// footer__inside, footer__family
const footerArrowL = document.querySelectorAll('.footerarrowL')
const footerArrowR = document.querySelectorAll('.footerarrowR')
const fooBtn = document.querySelectorAll('.footer__button')
const fooInsdie = document.querySelector('.footer__inside')
const fooFamily = document.querySelector('.footer__family')


fooBtn[0].addEventListener('click', () => { 
  fooInsdie.classList.toggle('on') //첫번째 footer__button에 css on값 주기
  hide = !hide
  if (hide) {
    footerArrowL[0].style.display='none' // 내부관련사이트 클릭시 버튼 내려가기 숨기기
    footerArrowR[0].style.display='block' //내부관련사이트 클릭시 버튼 올리기 보이기 
  }
  else {
    footerArrowL[0].style.display='block'
    footerArrowR[0].style.display='none'
  }
})

fooBtn[1].addEventListener('click', () => {
  fooFamily.classList.toggle('on') //두번째 footer__button에 css on값 주기
  hide = !hide
  if (hide) {
    footerArrowL[1].style.display='none' //관련사이트 클릭시 버튼 내려가기 숨기기
    footerArrowR[1].style.display='block' //관련사이트 클릭시 버튼 올리기 보이기 
  }
  else {
    footerArrowL[1].style.display='block'
    footerArrowR[1].style.display='none'
  }
})


// topbutton 상단이동
let toTop = function() {
  document.body.scrollIntoView({behavior:'smooth'}); //smooth 상단으로 부드럽게올리기
}


// footer 내부관련사이트, 관련사이트
const footerButton = document.querySelectorAll('.footer__button > .button')
const insideList = document.querySelectorAll('.footer__inside > ul > li')
const familyList = document.querySelectorAll('.footer__family > ul > li')
//list에 배열반복문을 줬고, 클릭한 값이 inside부분에 뜨게끔 적용했습니다
for(let i = 0; i < insideList.length; i++ ) {
  // console.log(aa[insideList])
  insideList[i].addEventListener('click', function(){
    let insideRes = insideList[i].innerHTML
    footerButton[0].innerHTML = insideRes
    fooInsdie.classList.remove('on') // 내부관련사이트를 눌렀을때 열린 상자 제거해주기
  })
}
//list에 배열반복문을 줬고, 클릭한 값이 family부분에 뜨게끔 적용했습니다
for(let i = 0; i < familyList.length; i++ ) {
  // console.log(aa[insideList])
  familyList[i].addEventListener('click', function(){
    let familyeRes = familyList[i].innerHTML
    footerButton[1].innerHTML = familyeRes
    fooFamily.classList.remove('on') // 관련사이트를 눌렀을때 열린 상자 제거해주기
  })
}

