// Tu peux ajouter des animations ou effets ici
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.textShadow = '0 0 5px #0ff';
  });
});
