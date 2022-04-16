# 📌 NETFLIX Clone Coding
---
## clone
- https://www.netflix.com/kr/
- 작업도메인 : https://elegant-beignet-eda25d.netlify.app
---
## Feat
- html semantic tag
- faq accordion menu
---
## Review
---
css to scss compile 방식은
vscode extensions에서 live sasscompiler, sass 두개를 받아서 진행했습니다
해당 확장프로그램 설치시 vscode 하단화면에 watch sass 버튼이 보이는데 해당 버튼을 누르면 watching으로 바뀌면서 scss코드 작성 가능합니다.

안녕하세요 !
저는 이번 과제를 css중점적으로 수행했습니다.
scss import 방식을 사용했습니다.

scss 학습을 진행해야 하신다면 css파일로 리뷰 부탁드립니다.

scss 폴더 안에 폴더트리를 만들고 default.scss 파일에서 폴더트리를 한 번에 보여 줄 수 있어
아래와 같이 가시성을 좋게 만들어 봤습니다.
```css
@charset "utf-8";
/* **************************************************************************** */
/*	@CreateDate   :   */
/*	@ModifyDate   :             */
/*	@Description  : scss build  */
/*	@Author       :         */
/* ***************************************************************************** */
@import 'scss/utils/variables';
@import 'scss/utils/functions';
@import 'scss/utils/mixins';
@import 'scss/utils/mq';
@import 'scss/base/font';
@import 'scss/base/reset';
@import 'scss/base/common';
@import 'scss/pages/main';
```

대표적으로 공유해 드리고 싶은 내용은... 다음에 여유가 된다면 반응형으로 작업을 하고 싶어 rem 단위 방식을 채택했습니다.
'scss/base/common' 파일을 확인해 보시면 루트인 html의 font-size를 62.5%로 설정했습니다.
해당 작업 시 1rem = 10px 이라는 단위로 변경되어서 단위 계산이 보다 원활해지므로
반응형 작업 시 일일이 px을 낮춰가지 않아도 되는 장점이 있습니다.
고정적인 width나 height를 원하는 곳에는 px을 주시면 됩니다.

(반응형 분기점마다 % 만큼 rem 단위가 일괄로 줄어듭니다!)
추가내용이 궁금하신 분들은 구글에 html 62.5%를 검색해서 여러 자료를 찾아보셔도 좋을 것 같아요
아래는 예입니다

```css
html{
  fonts-zie:62.5%
}

/* pc */
@media ( max-width: 1280px ) { 
  html{
    fonts-zie:55%
  }
}
/* tablet & mobile */
@media ( max-width: 768px ) {
  html{
    fonts-zie:45%
  }
}
```
이번 과제를 진행하면서 script 사용은 아코디언 메뉴를 만들어 보는 것이었는데요
저는 퍼블리셔로 근무하면서 jQuery에 너무 익숙해지고 바닐라스크립트를 깊게 사용해 보지 않아서 어려움이 있는 것 같아요
이번 아코디언 기능을 만들 때도 jQuery에선 hasclass()와 siblings() 메소드를 통해
쉽게 if 문으로 클래스의 유무를 넣어줄 수 있었는데
바닐라스크립트는 contains()와 classList를 통해 만들어 보다 보니 문법적으로도 익숙하지 않아 어려움이 있었습니다.

이론적인 부분도 매우 중요하지만 저는 기능을 쭉 구현해보고 혹은 강의내용을 따라 써보고 난 뒤에
한 줄 한 줄 원리를 뜯어보시는 작업을 반복해보시는 걸 추천해 드려요. 행마다 주석을 달아보셔도 좋아요!
저도 부족한 점이 많아 위 방법으로 억지로라도 이해를 해보려고 노력해요. ㅜㅜ
다 같이 화이팅했으면 좋겠습니다 :)