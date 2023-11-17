document.addEventListener("DOMContentLoaded", function () {
  const headerContainer = document.getElementById("header-container");
  const footerContainer = document.getElementById("footer-container");
  fetch("../../header_footer/html/header.html")
    .then((response) => response.text())
    .then((data) => {
      headerContainer.innerHTML = data;
    })
    .catch((error) => {
      console.error("Error al cargar el header:", error);
    });
  fetch("../../header_footer/html/footer.html")
    .then((response) => response.text())
    .then((data) => {
      footerContainer.innerHTML = data;
    })
    .catch((error) => {
      console.error("Error al cargar el footer:", error);
    });
});

/* Barra lateral comienza aquí */

document.addEventListener("DOMContentLoaded", function (event) {
  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId);

    // Validate that all variables exist
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener("click", () => {
        // show navbar
        nav.classList.toggle("show");
        // change icon
        toggle.classList.toggle("bx-x");
        // add padding to body
        bodypd.classList.toggle("body-pd");
        // add padding to header
        headerpd.classList.toggle("body-pd");
      });
    }
  };

  // Call showNavbar with appropriate parameters
  showNavbar("toggleId", "navId", "bodyId", "headerId");
});

function hideAllCards() {
  const cards = document.querySelectorAll(".card");
  for (const card of cards) {
    card.style.display = "none";
  }
}

// Agregar evento de clic a cada botón
const buttons = document.querySelectorAll(".btn-custom");
for (const button of buttons) {
  button.addEventListener("click", function() {
    // Obtener la categoría del botón
    const category = button.dataset.category;

    // Ocultar todas las cartas que no pertenecen a la categoría
    hideAllCards();

    // Mostrar las cartas que pertenecen a la categoría
    const cards = document.querySelectorAll(".card[data-category='" + category + "']");
    for (const card of cards) {
      card.style.display = "block";
    }
  });
}