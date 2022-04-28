'use strict';
/* MagicScroll */
const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
            triggerHook: .8 // 내가 감시하고 있는 요소가 뷰포트의 어떤 지점에서 감시되었다는 것을 판단할 것인가 (Hook: 갈고리)
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
})
    
$(document).ready(function() {
    // HEADER EFFECT //
    setHeader();
    /* SLICK */
    $(".slick__in").slick({
        centerMode: true,
        centerPadding: 0,
        slidesToShow: 3,
        arrows: true,
        infinite: true,
        speed: 300,
        initialSlide: 2,
        draggable: true,
        focusOnSelect: true,
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next')
    })
})

/* HEADER */
function setHeader () {
    $('header').hover(function () {
        $(this).toggleClass('on');
    });
    $('.gnb .gnb-item .gnb-item__name > a').mouseenter(function(){
        $(this).closest('.gnb-item').addClass('active').siblings().removeClass('active');
    });
}