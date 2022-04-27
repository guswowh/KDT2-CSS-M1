# Apple Store Page Clone Coding

[원본 페이지 링크](https://www.apple.com/kr/store) (https://www.apple.com/kr/store)


[클론 페이지 링크](https://stalwart-maamoul-b998eb.netlify.app) (https://stalwart-maamoul-b998eb.netlify.app)

---
<br/>

## 선택 이유 🥹

페이지 레이아웃이 Flex와 Grid 모두 활용해 만들어 보기 적합해 보여 선택하였고,    
스타벅스 클론 코딩 강의 예제에서 사용한 `swiper`기능과 유사한 기능을 가지고 있어 응용해 볼 수 있다는 생각에 도전하게 되었습니다.  
(원본 Apple 스토어 페이지는 `scroll-snap`을 사용하고 있습니다.  
추후, `swiper`를 `scroll-snap`로 변경해 볼 예정입니다. )

To. 코드 리뷰어님  
상품 페이지라 반복 내용이 많아서 줄이 긴 것이니 어지럽더라도 양해 부탁드립니다.😢

---
<br/>

## 느낀 점 🤔

페이지를 만들기 전 전체적인 레이아웃을 잘 살펴보는 것이 중요하다고 느꼈습니다.  
공통적으로 생긴 레이아웃에 대해 안일하게 생각하고 header, main, footer로 나누어 그 구역 기준만 생각하고 완성해 보니 반복되고 지저분한 CSS가 눈에 띄었습니다.  
반복되고 지저분해 보이는 부분을 정리하는데 많은 시간과 번거로움이 있었습니다.  
이런 경험으로, 반복되는 레이아웃이 있으면 같은 모양의 레이아웃을 어떻게 공통적으로 관리할 수 있을지 생각해보고, 공통 레이아웃에 적용하고 관리할 class명과 css적용 코드를 잘 적용해야 한다는 점을 느꼈습니다.  

---
<br/>

## 알게된 점 🤓

### a 태그
- 부모 요소에 z-index가 적용된 경우 a태그가 비활성화 된다.
- a태그를 hover했을 떄 일부분 밑줄 제외하는 법

  ```html
  <a href="javascript:void(0)" target="_blank">
    <div class="arrow-wrap">
            더 알아보기
        <div>
  <!-- 화살표를 hover해도 밑줄을 나타내지 않기 위해 div로 한번 더 랩핑  -->
          <span class="material-icons">
           navigate_next 
          </span>
        </div>
    </div>
  </a>
  ```
  ```css
  .a-hov-under-line a:hover {
  text-decoration: underline;
  }
  /* hover해도 밑줄을 나타내지 않기 위해 inline-block 설정 */
  .arrow-wrap .material-icons {
  display: inline-block;
  }
  ```
<br/>

### swiper
- 기본 제공되는 swiper 버튼을 없애고 싶을때
  ```css
  .swiper-button-next::after,
  .swiper-button-prev::after {
  display: none;
  }
  ```
- 비활성화 시 붙는 `.swiper-button-disabled` class명이 있어, css로 수정이 가능하다.
  ```css
  .swiper-button-disabled {
  display: none;
  }
  ```
<br/>

### 색상 바꾸기
- svg의 색상은 `fill`속성으로 변경할 수 있다.
  ```css
  svg.color-fog-blue {
  fill : #3f6eb8;
  }
  ```
- `-webkit-background-clip` 속성을 이용하면 글자색과 배경색이 뒤바뀐다(맞교환).
  [(mdn 참고)](https://developer.mozilla.org/ko/docs/Web/CSS/background-clip)
  ```css
  .color-rainbow  {
  background-image: linear-gradient(to right,#ffa600, #a96ba4, #77a8c7, #82e8a0);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  }
  ```
---
<br/>

## 보충할 점 👀
- 돋보기, 장바구니 버튼 메뉴 활성화
- 반응형 적용(header, footer)

<br/>

---
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
- [ ] JS가 필요한 부분은 생략하고 이유를 명시해보세요.(CSS로 대체 가능한지 피드백이 있을 수 있겠죠?!)
- [x] JS가 필요한 부분 중 구현할 부분이 있다면 자유롭게 구현해보세요.
- [ ] SCSS를 도입해보세요.
- [ ] SCSS 컴파일에 Webpack이나 Parcel 같은 번들러를 활용해보세요.
- [x] BEM 방법론을 도입해보세요.