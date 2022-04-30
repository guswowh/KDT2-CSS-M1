const closeBtn = document.querySelector('.btn-close')
const openBtn = document.querySelector('.button__more')

function showPro() {
  const promotionBtn = document.querySelector('#promotionBtn')
  promotionBtn.classList.add('is--close')
  console.log('open!')
}

function hiddenPro() {
  const promotionBtn = document.querySelector('#promotionBtn')
  promotionBtn.classList.remove('is--close')
  console.log('close!')
}

closeBtn.addEventListener('click', showPro )
openBtn.addEventListener('click', hiddenPro )



