const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {
  sidebar.style.right = sidebar.style.right === '0px' ? '-250px' : '0px';
});
