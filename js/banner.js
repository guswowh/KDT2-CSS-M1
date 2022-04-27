const banner = document.querySelector('section.banner')
window.addEventListener('load', 
// 원본 페이지와 같이 배너 생성 딜레이 시간 맞추기
  setTimeout(() => {
    banner.classList.remove('hidden')
    
    // a태그 활성화를 위해 z-index 기능 삭제
    setTimeout(() => {
      banner.classList.remove('to-top')
    },1000)
    
  }, 500) )
