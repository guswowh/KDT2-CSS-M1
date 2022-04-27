# 📌 자신이 원하는 사이트 레이아웃 클론

- 과제 기한:
  - 과제 수행 기간: 2022년 04월 14일(목) 19시 ~ 2022년 04월 28일(목) 19시
  - 코드 리뷰 기간: 2022년 04월 28일(목) 19시 ~ 2022년 05월 06일(금) 19시
- 내용:
  - 원하는 사이트(페이지)를 자유롭게 선택하고 레이아웃을 클론 코딩하세요.
  - 평소에 도전해 보고 싶었거나 혹은 자신의 수준에 맞는 사이트(페이지)를 선택하세요.

## 필수 요구사항

- [ x] 정리된 README.md 파일을 제공하세요!
- [ x] 결과와 비교할 수 있는 선택 사이트의 주소를 명시하세요!
- [ x] 제출 프로젝트에 확인 가능한 HTML, CSS 파일이 모두 있어야 합니다!
- [ x] 브라우저에서 정상적으로 출력돼야 합니다!

## 선택 요구사항

- [ x] 시멘틱 태그를 최대한 활용해보세요.
- [ x] 레거시 코드 활용보단 최신의 CSS Flex와 Grid를 활용해보세요.
- [ x] JS가 필요한 부분은 생략하고 이유를 명시해보세요.(CSS로 대체 가능한지 피드백이 있을 수 있겠죠?!)
- [ x] JS가 필요한 부분 중 구현할 부분이 있다면 자유롭게 구현해보세요.
- [ ] SCSS를 도입해보세요.
- [ ] SCSS 컴파일에 Webpack이나 Parcel 같은 번들러를 활용해보세요.
- [ x] BEM 방법론을 도입해보세요.

## 이미지 추출법

사이트 클론에 필요한 이미지를 좀 더 쉽게 추출하기 위해서 Chrome 확장 프로그램인 [Image Downloader](https://chrome.google.com/webstore/detail/image-downloader/cnpniohnfphhjihaiiggeabnkjhpaldj?hl=ko)를 사용하세요.

1. 원하는 사이트 접속
1. Image Downloader 확장 프로그램 실행
1. 다운로드 원하는 이미지 선택
1. 서브 폴더 이름(Save to subfolder) 명시
1. 다운로드!

## 과제링크

- 클론코딩사이트:https://www.inflearn.com/
- 과제사이트: https://www.inflearn.com/

## 과제목표

- swiper.js 라이브러리를 이용해 인프런에있는 제품목록을 슬라이더로 구현
- 3층 계층의 dropdown menu를 구현
- 기존 인프런 레이아웃에 맞춰 동일하게 구현
- 반응형 사이트로 구현

## 과제회고

1. swiper.js라이브러리를 활용한 슬라이더기능 구현

- 스타벅스 인강클론코딩으로 swiper.js를 알게됐는데 당시에는 이걸 어떤식으로 구현할지 막막했었습니다. 하지만 이번 과젤르 통해 직접 라이브러리를 사용해봄으로써 완벽하게는 아니지만 어느정도 기능을 구현할 수준이 됐습니다.

2. css 전처리기의 필요성

- 과제전에 scss의 존재를 알았지만 익숙해지기 어렵다는 이유만으로 이번 과제에는 사용하지않았습니다. 그로인해 과제를 진행함에있어서 css의 중복에의해 코드가 난잡해 지고 가독성이 많이 떨어짐을 알게됐습니다. 결론적으로 다음 프로젝트에는 css 전처리기를 적극 활용해야겠다고 생각했습니다.

3. 구글링과 유튜브의 활용

- 이번 과제를 수행하면서 많은부분을 유튜브나 구글링을 통해서 도움을 받았습니다.
  예를들어 드롭다운 메뉴의 경우 어떤식으로 구현할지 감조차 안잡혔었는데 유튜브에 multilevel-dropdown menu 이런식으로 검색해보니 완벽하게는 아니지만 제가 구현하려는 틀을 어느정도 갖춘 영상들을 발견할수있었고 영상을통해서 제게 필요한 기능으로 수정을해 과제를 마칠수있었습니다. 과제하기전에는 모르는부분을 어떤식으로 구현해야 할지 막막했었는데 이번과제를 통해 모르는부분은 구글링이나 유튜브를 통해서 구현해볼수있음을 알게됐습니다.

## 과제진행중 에럭사항

1. local서버에서 Live-server를 통해 사이트를 열었을때는 이미지파일들이 제대로 열렸는데 netlify로 서버를 호스팅하니 몇개의 이미지 파일들이 제대로 나오지않습니다 왜그런지 모르겠습니다.
2. 반응형구현중 자바스크립트를 이용해 클릭하는 메뉴의 정보를 얻고 그에해당하는 목록들을 구현하는 기능이있는데 자바스크립트에 대한 지식이 부족해 구현하지못했습니다.
3. 슬라이더구현중 각 이미지에 대한 길이가 일정치않아 불안정하게 슬라이더가 되고있는데 이부분을 제대로 수정하지 못했습니다.
4. 슬라이더 기능중 네비게이션으로 슬라이더를 조작을하면 autoplay기능이 제대로 구현되지 않는데 이부분에 대해서 수정하지 못했습니다.
5. 기존 인프런사이트에는 상단부분에 슬라이더를 이용해 사이트 배너가 바뀌는것을 구현했지만 이부분을 구현하지못했습니다.
6. 스타벅스 강의 예제중 scorollMagic라이브러리를 사용해 스크롤에대해서 기능구현한부분이 있었는데 해당 라이브러리를 사용하지못한것에 아쉬움이 있습니다.
