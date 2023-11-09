# PROYECTO-DAW-2023_24

## Cuenta:
Nuestro apartado de Cuenta consta de lo esencial para que el usuario pueda registrarse en WebCode, iniciar sesión cuando desé mediante diversos métodos, y configurar su cuenta de una manera cómoda y visual.

Para realizar esto, hemos dividido nuestro apartado de Cuenta en la rama `feature/login` en varios subapartados, con sus respectivos responsables y ramas:
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
        <td> <img src="https://github.com/nestorgarciacheste/PROYECTO-DAW-2023_24/assets/131865422/d3b5e1e0-bace-417f-900c-c3d1e4d5be48"></td>        
        <td> <img src="https://github.com/nestorgarciacheste/PROYECTO-DAW-2023_24/assets/131865422/d3b5e1e0-bace-417f-900c-c3d1e4d5be48"></td>        
        <td> <img src="https://github.com/nestorgarciacheste/PROYECTO-DAW-2023_24/assets/131865422/d3b5e1e0-bace-417f-900c-c3d1e4d5be48"></td>        
        <td> <img src="https://github.com/nestorgarciacheste/PROYECTO-DAW-2023_24/assets/131865422/d3b5e1e0-bace-417f-900c-c3d1e4d5be48"></td>        
    </tr>
</table>
<br>

### Login

En el Login de WebCode nos encontramos con un **HTML** que hace de estructura - principalmente generada con divs - de un breve formulario el cual le pide al usuario su correo electrónico y contraseña. A falta de una base de datos, el usuario podrá acceder al **Home** de la web mediante el buen cumplimiento de las restricciones del formulario (explicadas a continuación). 

Este HTML consta del uso de Bootstrap, así como de un extenso **CSS** enlazado y generado de manera que sea responsive y válido para varios navegadores. <br> <br>
<details>
  <summary>Ver código HTML</summary>
```html
<body>
    <header id="header-container"></header>
    
    <div class="shadow-rectangle">
        <form>
            <div class="container">

                <div class="img-container">
                </div>

                <!-- Email -->
                <div>
                    <input type="email" id="email" placeholder="Email" title="Please write your email" required>
                    <div class="invalid-feedback" id="emailError">
                        Email must be xxx"@"yyyy"."zzzz.
                    </div>
                </div>

                <!-- Password -->
                <div>
                    <input type="password" id="password" placeholder="Password" title="Please write your password" required>
                    <div class="invalid-feedback" id="passwordError">
                        Password must be at least 8 characters: <br>
                        one uppercase and lowercase letter <br>
                        one digit and one special character.
                    </div>
                </div>

                <!-- Forgot password-->
                <div class="links">
                    <a href="#" id="forgotPassword" onclick="forgot(event)">Forgot password?</a>
                    <a href="">Sign up</a>
                </div>

                <!-- Button -->
                <div class="form-group">
                    <button type="button" class="custom-button" onclick="checkform()">Log in</button>
                </div>
            </div>

            <div class="text-center">
                <button type="button" class="btn btn-floating" id="google" onclick="loginWithGoogle()"> <i class="fab fa-google"></i> </button>
                <br />
                <button type="button" class="btn btn-floating" id="github" onclick="loginWithGitHub()"> <i class="fab fa-github"></i> </button>
            </div>
        </form>
    </div>
    <footer id="footer-container"></footer>
</body>
```
</details>
<br>

![LoginForm](https://github.com/nestorgarciacheste/PROYECTO-DAW-2023_24/assets/131865422/a9bad101-1847-4471-8156-8a6262b9d551)

<br> Las **restricciones** mencionadas previamente son generadas cuando el usuario intenta acceder a la Web haciendo uso del botón de **Log in**. Pues este botón llama a una función realizada en `JavaScript` la cual comprueba dos aspectos esenciales:

- Correo electrónico:<br>
  `var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;`    
    - Debe contener el @.
    - Debe contener el .(TLD).
- Contraseña:<br>
  `var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;`
    - (?=.*[a-z])-> at least a lower case
    - (?=.*[A-Z]) -> at least a upper case
    - (?=.*\d) -> at least one digit
    - (?=.*[\W_]) -> at least a special character
    - {8,} -> minimum length of 8


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
