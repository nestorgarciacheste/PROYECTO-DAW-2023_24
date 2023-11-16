document.addEventListener("DOMContentLoaded", function () {
    const headerContainer = document.getElementById("header-container");
    const footerContainer = document.getElementById("footer-container");
    fetch("../../header_footer/html/header.html")
        .then(response => response.text())
        .then(data => {
            headerContainer.innerHTML = data;
        })
        .catch(error => {
            console.error("Error al cargar el header:", error);
        });
    fetch("../../header_footer/html/footer.html")
        .then(response => response.text())
        .then(data => {
            footerContainer.innerHTML = data;
        })
        .catch(error => {
            console.error("Error al cargar el footer:", error);
        });
});