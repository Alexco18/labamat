function showInfo(theme) {
  const infoBox = document.getElementById("infoBox");
  const infoImg = document.getElementById("infoImg");
  const infoText = document.getElementById("infoText");

  const data = {
    avion: {
      img: "img/avion.jpg",
      text: "Design et aérodynamique des maquettes volantes.",
    },
    sub: {
      img: "img/submarine.jpg",
      text: "Exploration des systèmes immergés et propulsion sous-marine.",
    },
    bateau: {
      img: "img/boat.jpg",
      text: "Modélisation navale et stabilité en milieu aquatique.",
    },
  };

  infoImg.src = data[theme].img;
  infoText.textContent = data[theme].text;
  infoBox.style.display = "block";
}

function hideInfo() {
  document.getElementById("infoBox").style.display = "none";
}
