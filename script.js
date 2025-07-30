let infoBox = document.getElementById("infoBox");
let infoImg = document.getElementById("infoImg");
let infoText = document.getElementById("infoText");
let infoLink = document.getElementById("infoLink");

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

function showInfo(theme) {
  const item = data[theme];
  infoImg.src = item.img;
  infoText.textContent = item.text;
  infoLink.href = item.link;
  infoBox.style.display = "block";
  setTimeout(() => {
    infoBox.style.opacity = "1";
  }, 10);
}

function setupPersistentHover() {
  const menuItems = document.querySelectorAll(".menu li");

  menuItems.forEach(li => {
    li.addEventListener("mouseenter", () => {
      const key = li.textContent.trim().toLowerCase();
      showInfo(key);
    });

    li.addEventListener("mouseleave", tryHideInfo);
  });

  infoBox.addEventListener("mouseenter", () => {
    infoBox.dataset.hovered = "true";
  });

  infoBox.addEventListener("mouseleave", tryHideInfo);
}

function tryHideInfo() {
  infoBox.dataset.hovered = "false";
  setTimeout(() => {
    if (infoBox.dataset.hovered === "false") {
      infoBox.style.opacity = "0";
      setTimeout(() => {
        infoBox.style.display = "none";
      }, 300);
    }
  }, 200);
}

document.addEventListener("DOMContentLoaded", setupPersistentHover);
