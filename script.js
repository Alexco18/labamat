let currentTheme = null;
let keepVisible = false;

function showInfo(theme) {
  currentTheme = theme;
  keepVisible = false;

  const infoBox = document.getElementById("infoBox");
  const infoImg = document.getElementById("infoImg");
  const infoText = document.getElementById("infoText");
  const infoLink = document.getElementById("infoLink");

  const data = {
    avion: {
      img: "img/avion.jpg",
      text: "Design et aérodynamique des maquettes volantes.",
      link: "projets/avion.html"
    },
    sub: {
      img: "img/submarine.jpg",
      text: "Exploration des systèmes immergés et propulsion sous-marine.",
      link: "projets/sous-marin.html"
    },
    bateau: {
      img: "img/boat.jpg",
      text: "Modélisation navale et stabilité en milieu aquatique.",
      link: "projets/bateau.html"
    }
  };

  infoImg.src = data[theme].img;
  infoText.textContent = data[theme].text;
  infoLink.href = data[theme].link;

  infoBox.style.display = "block";
}

function keepInfoVisible() {
  keepVisible = true;
}

function hideInfo() {
  if (!keepVisible) {
    document.getElementById("infoBox").style.display = "none";
  }
}
