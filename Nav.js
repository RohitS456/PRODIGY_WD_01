
  window.addEventListener('scroll', function() {
    var nav = document.getElementById('main-nav');
    if (window.scrollY > 30) {
      nav.style.backgroundColor = 'red';
      nav.style.fontFamily='Georgia';
    } else {
      nav.style.backgroundColor = 'darkBlue';
      nav.style.fontFamily='Roman';
    }
  });