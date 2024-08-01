function toggleMenu() {
  const menu = document.querySelector('.menu');
  const menuIcon = document.querySelector('.menuIcon');
  const closeIcon = document.querySelector('.closeIcon');
  const overlay = document.querySelector('.overlay');

  menu.classList.toggle('showMenu');
  overlay.classList.toggle('show');

  if (menu.classList.contains('showMenu')) {
    menuIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
  } else {
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  }
}
window.toggleMenu = toggleMenu;
