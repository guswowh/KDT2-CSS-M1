
// 탑배너 아이콘 변경

const topBanner = document.querySelector('.top-banner')
const bannerIcon = document.querySelector('.top-banner .inner .material-icons')

bannerIcon.addEventListener('click', function(){
    topBanner.style.display = 'none'
    mainHeight()
})


// 검색창클릭시변경점들

const searchEl = document.querySelector('header .search .search__main')
const searchInput = document.querySelector('header .search .search__main .input')
const searchContents = document.querySelector('header .search .search__contents')

searchEl.addEventListener('mouseover', function(){
    searchEl.style.backgroundColor = '#c8c8c8';
    searchInput.style.backgroundColor = '#c8c8c8'})

searchEl.addEventListener('mouseout', function(){
    searchEl.style.backgroundColor = '';
    searchInput.style.backgroundColor = ''})    

searchInput.onfocus = function() {
    searchEl.style.backgroundColor = '';
    searchInput.style.backgroundColor = ''
    searchContents.style.display = 'block'
}

searchInput.onblur = function() {
    searchContents.style.display = 'none'
}


// 헤더프로필 아이콘 변경

const searchProfile = document.querySelector('header .profile')
const profileArrow = document.querySelector('header .profile .arrow')

searchProfile.addEventListener('mouseover', function(){
    profileArrow.innerHTML = 'arrow_drop_up'
})

searchProfile.addEventListener('mouseout', function(){
    profileArrow.innerHTML = 'arrow_drop_down'
})

const searchEducation = document.querySelector('header .education')
const educationArrow = document.querySelector('header .education .arrow')

searchEducation.addEventListener('mouseover', function(){
    educationArrow.innerHTML = 'keyboard_arrow_up'
})

searchEducation.addEventListener('mouseout', function(){
    educationArrow.innerHTML = 'keyboard_arrow_down'
})

// 탑배너 아이콘변경 및 배너 제거시 본문 크기변경

const topBanner2 = document.querySelector('.top-banner2')
const bannerIcon2 = document.querySelector('.top-banner2 .inner .material-icons')

bannerIcon2.addEventListener('click', function(){
    topBanner2.style.display = 'none'
    mainHeight()
})

function mainHeight () {
const header = document.querySelector('.header')
const headerStyle = window.getComputedStyle(header)
const headerHeight = headerStyle.height

const main = document.querySelector('.main')

main.style.marginTop = headerHeight}

mainHeight()


// 기본정보부분
const searchInfoTitle = document.querySelector('.basic-info .info .title')
const infoTitleIcon = document.querySelector('.basic-info .info .title .material-icons')
const infoContents = document.querySelector('.basic-info .info .contents')
const searchKdigitTitle = document.querySelector('.basic-info .kdigit .title')
const kdigitTitleIcon = document.querySelector('.basic-info .kdigit .title .material-icons')
const kdigitContents = document.querySelector('.basic-info .kdigit .contents')

let isHide1 = true

searchInfoTitle.addEventListener('click', function(){
    isHide1 = !isHide1

if(isHide1) {
    infoContents.classList.add('hide1')
    infoTitleIcon.innerHTML = 'keyboard_arrow_down'
} else {
    infoContents.classList.remove('hide1')
    infoTitleIcon.innerHTML = 'keyboard_arrow_up'
}
})

infoContents.addEventListener('click', function(){
    isHide1 = !isHide1

if(isHide1) {
    infoContents.classList.add('hide1')
    infoTitleIcon.innerHTML = 'keyboard_arrow_down'
} else {
    infoContents.classList.remove('hide1')
    infoTitleIcon.innerHTML = 'keyboard_arrow_up'
}
})

let isHide2 = true

searchKdigitTitle.addEventListener('click', function(){
    isHide2 = !isHide2

if(isHide2) {
    kdigitContents.classList.add('hide2')
    kdigitTitleIcon.innerHTML = 'keyboard_arrow_down'
} else {
    kdigitContents.classList.remove('hide2')
    kdigitTitleIcon.innerHTML = 'keyboard_arrow_up'
}
})

kdigitContents.addEventListener('click', function(){
    isHide2 = !isHide2

if(isHide2) {
    kdigitContents.classList.add('hide2')
    kdigitTitleIcon.innerHTML = 'keyboard_arrow_down'
} else {
    kdigitContents.classList.remove('hide2')
    kdigitTitleIcon.innerHTML = 'keyboard_arrow_up'
}
})


// QNA부분
const searchQnaQuestion = document.querySelectorAll('.QNA .question')
const searchQnaIcon = document.querySelectorAll('.QNA .question .material-icons')
const searchQnaAnswer = document.querySelectorAll('.QNA .answer')



for(let i = 0; i< searchQnaQuestion.length; i++) {
searchQnaQuestion[i].addEventListener('click', function(){

    isHide1 = !isHide1

if(isHide1) {
        searchQnaAnswer[i].classList.add('hide1')
       searchQnaIcon[i].innerHTML = 'add_circle_outline'
} else {
    searchQnaAnswer[i].classList.remove('hide1')
    searchQnaIcon[i].innerHTML = 'remove_circle_outline'
}
})    
}

for(let i = 0; i< searchQnaQuestion.length; i++) {
  

searchQnaAnswer[i].addEventListener('click', function(){
    isHide1 = !isHide1

if(isHide1) {
        searchQnaAnswer[i].classList.add('hide1')
       searchQnaIcon[i].innerHTML = 'add_circle_outline'
} else {
    searchQnaAnswer[i].classList.remove('hide1')
    searchQnaIcon[i].innerHTML = 'remove_circle_outline'
}
})    
}

