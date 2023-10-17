# PROYECTO-DAW-2023_24

### HOW TO INSERT THE HEADER AND FOOTER

To insert the header and footer to each page u need to insert this in the js file:

~~~
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
~~~

And u need this 2 lines in your html:

~~~
    <header id="header-container"></header>
    <footer id="footer-container"></footer>
~~~
