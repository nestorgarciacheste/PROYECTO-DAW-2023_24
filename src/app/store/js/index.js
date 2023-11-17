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

const imgContainer = document.querySelector(".img-ctn");
const textContainer = document.querySelector(".text-ctn");

function updateHeight() {
  let width = imgContainer.clientWidth;
  width = imgContainer.clientWidth;
  imgContainer.style.height = `${width}px`;
  textContainer.style.minHeight = `${width}px`;
}

updateHeight();

window.addEventListener("resize", updateHeight);

function verProducto(idProducto) {
  var producto = document.getElementById(idProducto);
  var titulo = producto.querySelector(".card-title").innerText;
  var descripcion = producto.querySelector(".card-text").innerText;
  var imagen = producto.querySelector(".card-img-top").src;
  console.log(imagen)

  localStorage.setItem("tituloProducto", titulo);
  localStorage.setItem("descripcionProducto", descripcion);
  localStorage.setItem("imagenProducto", imagen);

  window.location.href = "moreinfo.html";
}

document.addEventListener("DOMContentLoaded", function () {
  var titulo = localStorage.getItem("tituloProducto");
  var descripcion = localStorage.getItem("descripcionProducto");
  var imagen = localStorage.getItem("imagenProducto");
  console.log(imagen)
  document.getElementById("Title").innerText = titulo;
  document.getElementById("Description").innerText = descripcion;
  document.querySelector(".img-ctn").style.backgroundImage = `url(${imagen})`;
});

