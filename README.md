# 📌 자신이 원하는 사이트 레이아웃 클론

- 과제 기한:
  - 과제 수행 기간: 2022년 04월 14일(목) 19시 ~ 2022년 04월 28일(목) 19시
  - 코드 리뷰 기간: 2022년 04월 28일(목) 19시 ~ 2022년 05월 06일(금) 19시
  - 나의 제출 날짜: 2022년 04월 22일(금)
- 내용:
  - 원하는 사이트(페이지)를 자유롭게 선택하고 레이아웃을 클론 코딩하세요.
  - 평소에 도전해 보고 싶었거나 혹은 자신의 수준에 맞는 사이트(페이지)를 선택하세요.

## 필수 요구사항

- [x] 정리된 README.md 파일을 제공하세요!
- [x] 결과와 비교할 수 있는 선택 사이트의 주소를 명시하세요!
- [x] 제출 프로젝트에 확인 가능한 HTML, CSS 파일이 모두 있어야 합니다!
- [x] 브라우저에서 정상적으로 출력돼야 합니다!

## 선택 요구사항

- [x] 시멘틱 태그를 최대한 활용해보세요.
- [x] 레거시 코드 활용보단 최신의 CSS Flex와 Grid를 활용해보세요.
- [x] JS가 필요한 부분은 생략하고 이유를 명시해보세요.(CSS로 대체 가능한지 피드백이 있을 수 있겠죠?!)
- [x] JS가 필요한 부분 중 구현할 부분이 있다면 자유롭게 구현해보세요.
- [ ] SCSS를 도입해보세요.
- [ ] SCSS 컴파일에 Webpack이나 Parcel 같은 번들러를 활용해보세요.
- [ ] BEM 방법론을 도입해보세요.

<br />  
<br />
  
## 과제 링크

> 클론 코딩 홈페이지 링크: [DUNKIN' DONUTS'S](https://www.dunkindonuts.co.kr/)  
> Netlify 링크: [DD_Clone_Coding](https://unrivaled-biscochitos-d549f8.netlify.app)

<br />  
<br />
  
## 😎 내가 구현한 기술 (잘 구현되는지 확인해주세용!!)

### JS > CSS 
### 클론 홈페이지는 JS로 구현했지만 CSS로 구현해본 것.  
- 마우스 오버시 이미지가 올라오면서 입체적으로 변하는 것을 :hober에 transform과 box-shadow로 표현했다.
```css
section.dunkin-menu .product img {
  width: 222px;
  height: 222px;
  border-radius: 50%;
  transition: 0.2s;
}
section.dunkin-menu .product li:hover img {
  border: 1px solid rgba(196, 181, 151, .2);
  transform: translateY(-7px);
  box-shadow: -5px 5px #c4b597;
  box-sizing: border-box;
}
```

<br>

### JS (스타벅스 예제 코딩 참고 많이 했습니다!! 😊)
### addEventListener 
- 클릭시 보여지고 사라지는 이벤트를 헤더 상단에 있는 'MONTHLY DONKIN 버튼'과  
  
  풋터 맨 아래에 있는 'FAMILY SITE 메뉴버튼'에 적용했습니다.
```javascript
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
```
```css
aside .content.hide {
  height: 210px;
}
```

### Swiper
- 슬라이드 3개 모두 swiper로 작성했습니다. 

- 자동 슬라이드가 기본이며 사용자 제어가능, 사용자 제어 후에도 자동 슬라이드가 되게 구현했습니다. 
```javascript
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
```

### ScrollMagic
- 스크롤 위치에 따라 글씨가 나왔다 들어오고 배너가 뒤집혀서 보였다가 사라지는것을 구현했습니다.
```javascript
const fontEls = document.querySelectorAll('section.scroll-font');
fontEls.forEach(function (fontEl) {
  new ScrollMagic
    .Scene({
      triggerElement: fontEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .7, // 스크롤 위치 설정
    })
    .setClassToggle(fontEl, 'font')
    .addTo(new ScrollMagic.Controller());
});
```

<br />  
<br />
  
## 내가 구현하지 못한 기술 😥 
(혹시 방법을 아시는 능력자분~! 리뷰 부탁드려요~!! 🥰)

### CSS
#### 유튜브 링크 이미지 <iframe>
  
- <iframe>으로 유튜브 링크는 했지만 width와 height만 설정되고  
  
  던킨 홈페이지 처럼 모서리를 둥글게 하거나 유튜브 하단에 있는 상태바가 나오게 하는법을 못찾아서 구현을 못했습니다.
  
### JS
#### 마우스오버시 이미지가 슬라이드되는 기술
  
- 던킨 홈페이지 하단에 위치한 마지막 슬라이드는 
  
    마우스오버시에 마우스를 따라가면서 이미지가 슬라이드 되는데 구현 방법을 못찾아서 swipe로 대신 하였습니다.

<br />  
<br />
  
## 과제를 마치며...
스스로 처음부터 끝까지 만든 첫번째 홈페이지라 정말 뿌듯했습니다.   

내가 입력한 줄이 화면으로 뿅! 나올때 재미를 많이 느꼈습니다.   
  
노래 들으면서 코딩하면 힐링되는 기분이더라고요. 🤭  

시간도 많이 걸리고 허술한 부분도 많은 과제지만   
  
언젠가 강사님처럼 하게 되는 날을 꿈꾸며 열심히 공부해보겠습니다~!
  
(+) 과제보다 과제 제출이 더 힘들었네요 😓 git공부 더 열심히 해야겠습니다..!