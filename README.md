# PROYECTO-DAW-2023_24

## Home:
En Home hemos creado una descripcion de lo que seria la empresa, algunos de nuestos ejemplos de posibles trabajos , mapa con la localizacion con una API y reproductor de música.

Todo el trabajo ha pasado por varias ramas de trabajo, siendo la principal `feature/home`, trabajo de cada miembro del grupo en su respectiva rama:
<ul>
  <li>Cecilia <code>login_Cecilia</code> : encargada del <b>registro</b> del usuario mediante campos con validación. Así como del apartado de <b>contacto</b> para los usuarios.</li>
<br>
  <li>Denise <code>login_Denise</code> : encargada de hacer el <b>login</b> de usuarios mediante:
    <ul>
      <li>Validación de formularios (email y contraseña).</li>
      <li>Autenticación con Google y GitHub (mediante Auth0).</li>
      <li>Recuperación de contraseña mediante SweetAlert2.</li>
    </ul>
  </li>
<br>
  <li>Alex <code>login_Alex</code> : encargado de la <b>configuración de la cuenta</b>:</li>
      <ul>
          <li>Editar credenciales del usuario.</li>
          <li>Acceder al contacto de WebCode.</li>
          <li>Realizar el LogOut</li>
    </ul>
</ul>
<br>
<table>
    <tr>
        <th>Registro</th>
        <th>Contacto</th>
        <th>Login</th>
        <th>Cuenta</th>
    </tr>
    <tr>
        <td> <img src="https://github.com/nestorgarciacheste/PROYECTO-DAW-2023_24/assets/131865422/83a059b3-55d8-4527-93ea-767c47bf6771"></td>        
        <td> <img src="https://github.com/nestorgarciacheste/PROYECTO-DAW-2023_24/assets/131865422/94504c03-a68a-426b-9aeb-ae0b39933484"></td>        
        <td> <img src="https://github.com/nestorgarciacheste/PROYECTO-DAW-2023_24/assets/131865422/5c6ad6e1-fcbb-40f6-8f6b-c04900e8d4c7"></td>        
        <td> <img src="https://github.com/nestorgarciacheste/PROYECTO-DAW-2023_24/assets/131865422/ed3e51cb-1971-48ea-b07b-83be57446b07"></td>        
    </tr>
</table>
<br>




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

