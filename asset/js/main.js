window.addEventListener('scroll',function() {
  const header = document.querySelector('header');
  header.classList.toggle('sticky',scrollY > 50);
});

document.querySelector('.menu-btn').addEventListener('click', () => {
  if (document.querySelector('.menu-wrap').className !== 'active') {
    document.querySelector('.menu-wrap').classList.add('active');
  }
});

function closeBtn() {
  document.querySelector('.menu-wrap').classList.remove('active');
}

if (window.innerWidth <= 1280) {
  document.querySelector('.header-nav').classList.remove('hover');
  document.querySelectorAll('.header-nav > ul > li').forEach(item => {
    item.classList.remove('hover');
  });
  document.querySelectorAll('.header-nav_contents > li > a').forEach(item => {
    item.classList.remove('hover');
  });
} else {
  document.querySelector('.header-nav').classList.add('hover');
  document.querySelectorAll('.header-nav > ul > li').forEach(item => {
    item.classList.add('hover');
  });
  document.querySelectorAll('.header-nav_contents > li > a').forEach(item => {
    item.classList.add('hover');
  });
}

window.addEventListener('resize', function() {
  if (window.innerWidth <= 1280) {
    document.querySelector('.header-nav').classList.remove('hover');
    document.querySelectorAll('.header-nav > ul > li').forEach(item => {
      item.classList.remove('hover');
    });
    document.querySelectorAll('.header-nav_contents > li > a').forEach(item => {
      item.classList.remove('hover');
    });
  } else {
    document.querySelector('.header-nav').classList.add('hover');
    document.querySelectorAll('.header-nav > ul > li').forEach(item => {
      item.classList.add('hover');
    });
    document.querySelectorAll('.header-nav_contents > li > a').forEach(item => {
      item.classList.add('hover');
    });
  }
})

document.querySelectorAll('.header-nav > ul > li').forEach((item) => {
  item.addEventListener('click', function() {
    if (this.className !== 'active') {
      this.classList.add('active');
    } else {
      this.classList.remove('active');
    }
  })
})