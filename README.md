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
- [x] BEM 방법론을 도입해보세요.

---

<a href="https://endearing-eclair-c6b858.netlify.app/">
  <img src="https://api.netlify.com/api/v1/badges/bc438b2e-9f12-4bbe-987e-d36fcef20a2f/deploy-status">
</a>

# Kiaf SEOUL layout Clone Coding

## 선정 이유

- <a href="https://kiaf.org/">키아프 서울</a> 사이트의 레이아웃 구조가 동적 요소를 최소화하고, HTML/CSS를 주로 활용한 홈페이지 레이아웃이라고 생각하여 선정하게 되었습니다.
- 레이아웃 클론 코딩 과제 성격에 맞게 가장 기본을 갖추고 있는 사이트라 과제에 적합하다고 생각했습니다.
- Swiper, gsap 등 강의에서 배운 라이브러리를 활용하기 좋은 예제였습니다.

## Demo

<a href="https://endearing-eclair-c6b858.netlify.app/
">Kiaf Seoul Demo site</a>

<img width="600" alt="demo" src="https://user-images.githubusercontent.com/85099612/165444379-26153a7c-1c61-4869-ac95-f10397acdcd9.png">

## Features

### 반응형 웹

- CSS media query를 이용하여 반응형 웹을 구현했습니다.
  - 반응형 헤더: 메인, 서브메뉴가 사라지고 토글 버튼이 생깁니다.
  - 컨텐츠들은 flex 속성을 사용하여 수직 정렬했습니다.

<img width="400" alt="mobile_ver" src="https://user-images.githubusercontent.com/85099612/165445391-74856de8-fe71-4e78-b7f6-a3afa611da49.png">

- 햄버거 메뉴 클릭 시 메뉴 펼침 및 닫힘
- 버튼 애니메이션(only HTML/CSS)

![togglebtn](https://user-images.githubusercontent.com/85099612/165449624-27a4463a-a876-4936-9856-6524a403e5aa.gif)

### Swiper

- Swiper에서 제공하는 슬라이드 라이브러리를 사용하여 메인 슬라이더 영역 구현했습니다.

<img width="600" alt="swiper" src="https://user-images.githubusercontent.com/85099612/165445581-c68fa662-1fa7-4508-8bc5-0f2e8a9cd81a.png">

### GSAP & ScrollToPlugin

GSAP(The GreenSock Animation Platform)에서 제공하는 애니메이션 라이브러리로 페이지 상단 이동 버튼을 쉽게 구현할 수 있었습니다.

![scrollto](https://user-images.githubusercontent.com/85099612/165447159-54aa1af9-2b83-4211-95d6-619edd2bbdb2.gif)

## Review

- 생각치도 못한 잦은 난관에 부딪히면서 레이아웃 구조에 대해 더 알게되었던 과제였습니다.
- 강의를 통해서 클론 코딩하는 것과, 스스로 사이트를 뜯어보며 클론 하는 것은 정말 많은 차이가 났고 공부도 많이 되었습니다.

- SCSS나 번들러를 활용하지는 못했지만 순수 CSS로 작성하는 것도 재미있었습니다. 하지만 다음부턴 SCSS를 사용하여 생산력을 높일 것입니다.

## Reference

- 이 프로젝트는 키아프 서울 사이트를 참조하여 학습목적으로 만들었습니다.
