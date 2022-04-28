# 📌 자신이 원하는 사이트 레이아웃 클론

- 과제 기한:
  - 과제 수행 기간: 2022년 04월 14일(목) 19시 ~ 2022년 04월 28일(목) 19시
  - 코드 리뷰 기간: 2022년 04월 28일(목) 19시 ~ 2022년 05월 06일(금) 19시
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


### 과제
클론 코딩 링크: [하남 스타필드](https://www.starfield.co.kr/hanam/main.do)

Netlify 링크: [하남 스타필드 과제](https://cozy-naiad-f7bc63.netlify.app/)



### css
  1. 레이아웃에 어떤 HTML구조가 필요한지 알게 되었다.
  1. 하지만 항상 생각대로 되는게 아니란 것을 깨달았다.
  1. 플렉스를 활용하면 간단히 구조의 범위를 잡을 수 있어서 편했다.
  1. 포지션을 활용해 디테일한 위치를 잡는 것이 가능해졌다.

### js
  1. 제대로 구현하지 못했거나 css로 대체했다.

### 하지 못한 것
topMain swiper 이미지 좌우 버튼에 마우스를 올리면 미리보기처럼 옆 사진이 보이는데 현재 화면에 보이는 이미지가 선택되도록 swiper-slide-active 클래스를 할당해줬다. 처음보이는 이미지만 구동이 되고 자동재생으로 active가 옮겨다니는걸 인식하지 못한다.
```js
const next = document.querySelector('.topMain .swiper-next')
const prev = document.querySelector('.topMain .swiper-prev')
const slide = document.querySelector('.topMain .swiper-slide-active')

prev.addEventListener('mouseover', function() {
  gsap.to(slide, .3, {
    x: 100
  })
})
prev.addEventListener('mouseout', function() {
  gsap.to(slide, .3, {
    x: 0
  })
})
next.addEventListener('mouseover', function() {
  gsap.to(slide, .3, {
    x: -100
  })
})
next.addEventListener('mouseout', function() {
  gsap.to(slide, .3, {
    x: 0
  })
})
```


footer에 있는 bottom 클래스에 패밀리 사이트 리스트를 클릭하면 열리고 마우스를 아웃하면 리스트가 꺼지도록 했는데 패밀리 사이트 텍스트 범위만 벗어나도 리스트가 꺼지는 것을 해결하지 못했다. 일단 마우스오버, 마우스아웃으로 구현했다.
```js
const famSite = document.querySelector('.family')
const famList = document.querySelector('.famList')

famSite.addEventListener('click', function () {
  famList.classList.add('famBlock')
})
famSite.addEventListener('mouseout', function () {
  famList.classList.remove('famBlock')
})
```

