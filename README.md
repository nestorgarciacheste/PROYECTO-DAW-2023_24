# PROYECTO-DAW-2023_24

## Home:

En Home hemos creado una descripcion de lo que seria la empresa, algunos de nuestos ejemplos de posibles trabajos , mapa con la localizacion con una API y reproductor de música.

Todo el trabajo ha pasado por varias ramas de trabajo, siendo la principal `feature/home`, trabajo de cada miembro del grupo en su respectiva rama:

<ul>
  <li>Lorenzo <code>Home_Lorenzo</code> : encargado de la estructuracion y creacion de la mayor parte del <b>home</b> , creacion de textos , diseño y gestión.
   <ul>
        <li>About us</li>
        <li>Slider Galeria</li>
        <li>Creacion de Mapa mediante API <b>Leaflet</b></li>
    </ul>
    </li>
   <br>
  <li>Denise <code>main</code> creacion de reproductor de música </li>
<br>
  <li>Manu <code>login_</code>
    
  </li>
<br>
  <li>Ruben <code>login_</code> </li>
      
</ul>
<br>
<table>
    <tr>
        <th>About us</th>
        <th>Slider Galeria</th>
        <th>Mapa</th>
        <th>Reproductor de música</th>
    </tr>
    <tr>
        <td> <img src="/src/assets/img/captura_readme_home_aboutUs.png"></td>        
        <td> <img src="/src/assets/img/captura_readme_home_galleySlider.png"></td>        
        <td> <img src="/src/assets/img/captura_readme_home_map.png"></td>        
        <td> <img src="https://github.com/nestorgarciacheste/PROYECTO-DAW-2023_24/assets/131865422/ed3e51cb-1971-48ea-b07b-83be57446b07"></td>        
    </tr>
</table>
<br>

### HOW TO INSERT THE HEADER AND FOOTER

To insert the header and footer to each page u need to insert this in the js file:

```
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
```

And u need this 2 lines in your html:

```
    <header id="header-container"></header>
    <footer id="footer-container"></footer>
```
