const gnbMenu = document.querySelector('#gnb-menu-btn')
const menuArea = document.querySelector('#gnb-menu-area')

gnbMenu.addEventListener('click', function() {
  menuArea.classList.add('on')
})

const menuCloes = document.querySelector('#gnb-menu__cloes')

menuCloes.addEventListener('click', function() {
  menuArea.classList.remove('on')
})