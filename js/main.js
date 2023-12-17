// Gérer le chargement des différentes pages
document.getElementById("articles").addEventListener("click", function (e) {
  e.preventDefault();
  loadContent("pages/page1.html");
  document.getElementById("welcomeMessage").style.display = "none"; // Cacher le message sur la page 1
});

document.getElementById("article-from").addEventListener("click", function (e) {
  e.preventDefault();
  loadContent("pages/page2.html");
  document.getElementById("welcomeMessage").style.display = "none"; // Cacher le message sur la page 2
});

// Fonction pour charger le contenu dynamiquement
function loadContent(page) {
  fetch(page)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("mainContent").innerHTML = data;
    })
    .catch((error) => {
      console.error("Erreur : ", error);
    });
}
