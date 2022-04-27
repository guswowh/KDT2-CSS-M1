

// 화살표바꾸기
const $btn = document.querySelector('.fa-solid.fa-circle-chevron-down');
console.log($btn)
const $i = document.querySelector('.nav--list button i');
const $a = document.querySelector('.a');
$btn.addEventListener('click',function(){
    if($a.style.display === 'block') {
        $a.style.display = 'none';
        $i.className = 'fa-solid fa-circle-chevron-up'
    } else{
        $a.style.display = 'block';
        $i.className = "fa-solid fa-circle-chevron-down"
    }
})

// swiper -> welcome
let swiper1 = new Swiper(".mySwiper", {
    slidesPerView:5,
    // spaceBetween:10,
    centeredSlides: true,
    loop:true,
    autoplay:{
        delay:4000,
    },
    breakpoints:{
      100:{
        slidesPerView: 2, 
        spaceBetween: 10       
      },

      640:{
        slidesPerView: 3, 
        spaceBetween: 10
      },
      800:{
        slidesPerView: 5, 
        spaceBetween: 10
      },
    },
    // pagination: {
    //     el: ".swiper-pagination",
    //     type: "fraction"
    //   },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  });

//   roadmap
var swiper2 = new Swiper(".roadmap .swiper", {
    slidesPerView:4,
    spaceBetween:10,
    // slidesPerGroup : 4,
    // centeredSlides: true,
    loop:true,
    autoplay:{
        delay:3000,
    },

    navigation: {
      nextEl: ".swiper--btn .swiper-button-next",
      prevEl: ".swiper--btn .swiper-button-prev",
    },
  });

//  new lecture
var swiper3 = new Swiper(".newLecture .swiper", {
    slidesPerView:4,
    spaceBetween:10,
    slidesPerGroup : 4,
    centeredSlides: true,
    loop:true,
    autoplay:{
        delay:4000,
    },
    	autoHeight : true,
  
    navigation: {
      nextEl: ".swiper--btn .swiper-button-next",
      prevEl: ".swiper--btn .swiper-button-prev",
    },
  });
// review
let swiper4 = new Swiper(".review .swiper",{
  direction: "vertical",
  slidesPerView:3,
  spaceBetween:20,
  loop:true,



  autoplay:{
    delay:3000,
  },
})

  // banner2
  let swiper5 = new Swiper(".banner2 .swiper",{
    slidesPerView:1,
    spaceBetween:10,
    centeredSlides: true,
    // loop:true,
    // autoplay:{
    //     delay:2000,
    // },

    navigation: {
      nextEl: ".banner2 .btn--container .swiper-button-next",
      prevEl: ".banner2 .btn--container .swiper-button-prev",
    },
    pagination: {
      el: ".banner2 .swiper-pagination",
      clickable: true,
    },
  })