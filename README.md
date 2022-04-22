## 선택 요구사항

- [x] 시멘틱 태그를 최대한 활용해보세요.
- [x] 레거시 코드 활용보단 최신의 CSS Flex와 Grid를 활용해보세요.
- [ ] JS가 필요한 부분은 생략하고 이유를 명시해보세요.(CSS로 대체 가능한지 피드백이 있을 수 있겠죠?!)
- [x] JS가 필요한 부분 중 구현할 부분이 있다면 자유롭게 구현해보세요.
- [x] SCSS를 도입해보세요.
- [x] SCSS 컴파일에 Webpack이나 Parcel 같은 번들러를 활용해보세요.
- [ ] BEM 방법론을 도입해보세요.

## 링크

> 원본: [아이폰12 소개 페이지](https://www.apple.com/kr/iphone-12/key-features/)
>
클론: [netlify 배포 페이지](https://jazzy-platypus-16b497.netlify.app/)

## 기능 및 특징

- [x] 반응형 웹
- [x] 스크롤에 따른 애니메이션, 각종 트랜지션
- [x] youtube iframe 특정 구간, 자동 반복 
- [x] 컬러 팔레트 선택시 이미지 전환
- gsap, swiper 라이브러리 사용

## css 최적화


### 이미지 최적화 

`img` 요소에 `loading="lazy", decoding="async"` 적용하여 viewport 영역 밖에 있는`img` 요소는 지연 로딩 및 비동기 디코딩을 적용하였습니다.

```
<img loading="lazy" decoding="async" src="./images/logo.png" >
```

### 반응형 최적화

해상도 구간별로 css를 작성한 후, `link` 요소의 `media` 속성을 적용해서 데스크탑은 데스크탑 코드만 태블릿은 태블릿 코드만 모바일은 모바일 코드만 렌더링 하도록 하였습니다.

```
<link rel="stylesheet" href="./scss/main.css">
<link rel="stylesheet" href="./scss/tablet.css" media="(max-width: 1023px)">
<link rel="stylesheet" href="./scss/mobile.css" media="(max-width: 768px)">
```

### LCP 최적화

LCP를 줄이기 위해서 히어로 이미지를 `preload` 하였습니다.


```
<link rel="preload" as="image" href="./images/purple_full.jpeg">

```

### Lighthouse-performance 점수 

chrome incognito 환경에서 측정하였습니다.

#### 데스크탑

![](https://velog.velcdn.com/images/jeajea0127/post/952d1229-ddfa-4a05-bdda-5cc83adb6795/image.png)

#### 모바일

LCP 점수에서 많이 깎인 모습 ... 주요 원인으로 picture 요소를 사용하여 해상도 별로 작은 사이즈의 이미지를 사용 했어야 했는데, 클론이다 보니 이미지를 구할 수 없어서 아쉬웠네요.

![](https://velog.velcdn.com/images/jeajea0127/post/cc15e8fb-d071-475e-8fe0-96b8eb658c1a/image.png)

## 개선점

- gsap 라이브러리를 통해 스크롤 애니메이션 구현을 하였는데, 애니메이션이 뭔가 부드럽지 않은 것 같습니다. 아무래도 애플은 네이티브로 구현한 것 같은데 ...  

- 스크롤에 따른 `video` 요소 제어는 `video` 리소스를 다운로드 받지 못하여서 iframe을 제어하려고 하다가 온갖 오류에 직면하여 결국엔 포기

- 두번째 nav바의 전환효과는 도무지 모르겠어서 포기한 점

- 애플은 float 속성을 활용하여 반응형 헤더바를 구현하였는데, float 속성을 이해하지못하여 이를 flex로 대체하였으나 어설프게 대체한 점 (모바일로 헤더바 전환시 로고 위치가 살짝 변경되는 문제)

- BEM 방법론을 도입하려 하였으나, html 구조가 딥해질수록 변수 이름이 한없이 길어져서, 그리고 갈피를 못잡겠어서 포기한 점


