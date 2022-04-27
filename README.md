# 선택 요구사항
- [x] 시멘틱 태그를 최대한 활용해보세요.
- [x] 레거시 코드 활용보단 최신의 CSS Flex와 Grid를 활용해보세요.
- [x] JS가 필요한 부분은 생략하고 이유를 명시해보세요.(CSS로 대체 가능한지 피드백이 있을 수 있겠죠?!)
- [x] JS가 필요한 부분 중 구현할 부분이 있다면 자유롭게 구현해보세요.
- [ ] SCSS를 도입해보세요.
- [ ] SCSS 컴파일에 Webpack이나 Parcel 같은 번들러를 활용해보세요.
- [x] BEM 방법론을 도입해보세요.

## JS가 필요한 부분 중 구현할 부분이 있다면 자유롭게 구현해보세요.

  - 어려웠던 점 : 제이쿼리 선택자 처럼 쉽고 자유롭게 html 엘리먼트에 접근하지 못하는 점이 어려웠습니다.

```js
const gnbMenu = document.querySelector('#gnb-menu-btn')
const menuArea = document.querySelector('#gnb-menu-area')

gnbMenu.addEventListener('click', function() {
  menuArea.classList.add('on')
})

const menuCloes = document.querySelector('#gnb-menu__cloes')

menuCloes.addEventListener('click', function() {
  menuArea.classList.remove('on')
})
```

## JS가 필요한 부분은 생략하고 이유를 명시해보세요.

  - 메뉴 리스트 페이지의 마우스 오버 효과를 구현하지 못했습니다 ㅜㅜ

## BEM 방법론을 도입해보세요.
  - 시도하여 적용 하였는데 맞게 적용한지 모르겠네요...ㅠㅠ
  
## url
- 작업 url : https://creative-capybara-c63542.netlify.app/
- 참고 url : https://www.acro.co.kr/Mnmn_main.action
