const headerEl = document.querySelector('header');

window.addEventListener('scroll', _.throttle(function () {
  if (window.scrollY > 5) {
    headerEl.classList.add('blur');

  } else {
    headerEl.classList.remove('blur');
  }
}, 100));

// function random(min, max) {
//   // `.toFixed()`를 통해 반환된 문자 데이터를,
//   // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
//   return parseFloat((Math.random() * (max - min) + min).toFixed(2))
// }

// function floatingObject(selector, delay, size) {
//   // gsap.to(요소, 시간, 옵션);
//   gsap.to(
//     selector, // 선택자
//      // 애니메이션 동작 시간
//     { // 옵션
//     y: size,
//     repeat: -1,
//     yoyo: true,
//     ease: "power2.ease",
//     }
//   );
// }
// floatingObject('.floating1', 0, 10);

const yearEls = document.querySelectorAll('.year');
const conEls = document.querySelectorAll('.contents')
for (const yearEl of yearEls) {
  yearEl.addEventListener('click', function () {
    const thisYear = this.dataset.year;
    for (const yearElClass of yearEls) {
      yearElClass.classList.remove('active');
    }
    this.classList.add('active');
    console.log(thisYear);
    for (const conEl of conEls) {
      const conYear = conEl.dataset.year;
      if (conYear === thisYear) {
        conEl.style.display = 'block';
      } else {
        conEl.style.display = 'none';
      }
    }
  })
}