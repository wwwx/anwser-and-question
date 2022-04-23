// Show menu
function showMenu(toggleId, menuId) {
  var toggle = document.getElementById(toggleId);
  var icon = toggle.getElementsByTagName('i')[0];
  var menu = document.getElementById(menuId);
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('show-menu');
      if (menu.classList.contains('show-menu')) {
        icon.className = 'ri-close-line';
      } else {
        icon.className = 'ri-menu-line';
      }
    });
  }
}
showMenu('nav-toggle', 'nav-menu');

// Change background header
function scrollHeader() {
  var header = document.getElementById('header');
  if (this.scrollY > 90) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}
window.addEventListener('scroll', scrollHeader);

// Scroll to top
function scrollEvent() {
  var scrolltop = document.getElementById('scrolltop');
  scrolltop.addEventListener('click', function () {
    window.scrollTo({ top: 0 });
  });
}
scrollEvent();

// Show scroll-top
function showScrollTop() {
  var scrolltop = document.getElementById('scrolltop');
  if (this.scrollY > 560) {
    scrolltop.classList.add('show-scrolltop');
  } else {
    scrolltop.classList.remove('show-scrolltop');
  }
}
window.addEventListener('scroll', showScrollTop);
