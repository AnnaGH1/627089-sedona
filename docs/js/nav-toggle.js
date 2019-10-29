  var navMain = document.querySelector('.nav-main');
  var navToggle = document.querySelector('.nav-main__toggle');

  navMain.classList.remove('nav-main--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('nav-main--closed')) {
      navMain.classList.remove('nav-main--closed');
      navMain.classList.add('nav-main--opened');
    } else {
      navMain.classList.add('nav-main--closed');
      navMain.classList.remove('nav-main--opened');
    }
  });
