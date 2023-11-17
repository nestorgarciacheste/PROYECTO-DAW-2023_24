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
<<<<<<< HEAD
        <td> <img src="https://github.com/nestorgarciacheste/PROYECTO-DAW-2023_24/assets/131865422/83a059b3-55d8-4527-93ea-767c47bf6771"></td>        
        <td> <img src="https://github.com/nestorgarciacheste/PROYECTO-DAW-2023_24/assets/131865422/94504c03-a68a-426b-9aeb-ae0b39933484"></td>        
        <td> <img width ="2000px" src="https://github.com/nestorgarciacheste/PROYECTO-DAW-2023_24/assets/131865422/b19ee5ae-7480-462f-ab15-e34560312a7c"</td>        
        <td> <img src="https://github.com/nestorgarciacheste/PROYECTO-DAW-2023_24/assets/131865422/ed3e51cb-1971-48ea-b07b-83be57446b07"></td>        
=======
        <td> <img src="https://github.com/nestorgarciacheste/PROYECTO-DAW-2023_24/assets/131865422/d3b5e1e0-bace-417f-900c-c3d1e4d5be48"></td>        
        <td> <img src="https://github.com/nestorgarciacheste/PROYECTO-DAW-2023_24/assets/131865422/d3b5e1e0-bace-417f-900c-c3d1e4d5be48"></td>        
        <td> <img src="https://github.com/nestorgarciacheste/PROYECTO-DAW-2023_24/assets/131865422/d3b5e1e0-bace-417f-900c-c3d1e4d5be48"></td>        
        <td> <img src="https://github.com/nestorgarciacheste/PROYECTO-DAW-2023_24/assets/131865422/d3b5e1e0-bace-417f-900c-c3d1e4d5be48"></td>        
>>>>>>> feature/store
    </tr>
</table>
<br>

### Login

En el Login de WebCode nos encontramos con un **HTML** que hace de estructura - principalmente generada con divs - de un breve formulario el cual le pide al usuario su correo electrónico y contraseña. A falta de una base de datos, el usuario podrá acceder al **Home** de la web mediante el buen cumplimiento de las restricciones del formulario (explicadas a continuación). 

Este HTML consta del uso de Bootstrap, así como de un extenso **CSS** enlazado y generado de manera que sea responsive y válido para varios navegadores. <br> <br>
<details>
  <summary>Ver código HTML</summary>

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

</details>
<br>

Las **restricciones** mencionadas previamente son generadas cuando el usuario intenta acceder a la Web haciendo uso del botón de **Log in**. Pues este botón llama a una función realizada en `JavaScript` la cual comprueba dos aspectos esenciales:

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

### Login mediante Auth0
Si así lo prefiere el usuario, podrá iniciar sesión en nuestra página Web mediante el registro con **Google** y **GitHub**. Esto se ha realizado mediante la plataforma de gestión de entidades y acceso Auth0. 

<table>
    <tr>
        <th>Configuración en el sitio web de Auth0</th>
        <th>Resultado en WebCode</th>
    </tr>
    <tr>
        <td> <img src="https://github.com/nestorgarciacheste/PROYECTO-DAW-2023_24/assets/131865422/b0fc71d7-21d5-4db2-95ca-d9227157ac0a"></td>        
        <td> <img src="https://github.com/nestorgarciacheste/PROYECTO-DAW-2023_24/assets/131865422/307dca2f-4c7a-4447-b97d-99be35454a35"></td>        
    </tr>
</table>

Para hacer esto posible, hemos añadido en el **Head** de nuestro proyecto las siguientes rutas:
<code>
    <script src="app.js"></script>
    <script src="https://cdn.auth0.com/js/auth0-spa-js/2.0/auth0-spa-js.production.js"></script>
</code>

El Script sirve para redirigir mediante la clave de usuario de Auth0 al servicio que deseemos. En el caso de **Google** el script sería este:
<details>
  
<summary>Ver código JS</summary>

~~~

const auth0 = require('auth0');

  function loginWithGoogle() {
    const redirectUrl = 'http://localhost:5500/src/app/home/html/index.html';
    const responseType = 'code';
    const connection = 'google-oauth2';

    const auth0Domain = 'dev-nt6cgad86rkuabgq.us.auth0.com';
    const clientId = '15dHTMDSUZSYnvvxipcxTq70ccemkgC2';
    const authorizeUrl = `https://${auth0Domain}/authorize?      
    response_type=${responseType}&client_id=${clientId}&connection=${connection}&redirect_uri=${redirectUrl}`;
  
    window.location.href = authorizeUrl;
  }
  
  ~~~

</details>


### Olvido de contraseña
En caso de que el usuario envíe la contraseña para iniciar sesión, la administración de WebCode le enviará un correo con la recuperación de esta (de forma ficticia). Para ello, el usuario solo tendrá que situar un correo válido en un input que hemos modificado estéticamemente mediante la librería **SweetAlert2**.
La cual hemos añadido en el **Head** de nuestro proyecto:
<code>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</code>

<table>
    <tr>
        <th>Configuración del Script</th>
        <th>Resultado en WebCode</th>
    </tr>
    <tr>
        <td> <img src="https://github.com/nestorgarciacheste/PROYECTO-DAW-2023_24/assets/131865422/d47500b1-4e0a-4306-8e3c-2224a75cc7ae"></td>        
        <td> <img src="https://github.com/nestorgarciacheste/PROYECTO-DAW-2023_24/assets/131865422/910e2a8e-a085-40f6-8b4d-f3e08f099b39"></td>        
    </tr>
</table>

<br>

### Registro
En el registro de WebCode nos encontramos con un **HTML** que hace de estructura - generada mediante una tabla y divs - de un formulario de registro bastante detallado. A falta de una base de datos, el usuario podrá acceder al **Home** de la web mediante el buen cumplimiento de las restricciones del formulario (explicadas a continuación).
Este HTML consta del uso de Bootstrap, así como de un extenso **CSS** enlazado. <br> <br>
Las **restricciones** mencionadas previamente son generadas cuando el usuario intenta acceder a la Web haciendo uso del botón de **Submit form**. Este botón llama a una función realizada en `JavaScript` la cual comprueba los aspectos esenciales:

<details>
  <summary>Ver código JS</summary>

  ~~~
function validar() {
  //Nombre
  const elemNombre = document.getElementById("myName");
  const nombre = elemNombre.value;

  //Apellido
  const elemApellido = document.getElementById("mySurname");
  const apellido = elemApellido.value;

  //Email
  const elemEmail = document.getElementById("myEmail");
  const email = elemEmail.value;
  const emailPat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  //Teléfono
  const elemTel = document.getElementById("myPhone");
  const telefono = elemTel.value;
  const telPat = /^\d{9}$/;

  //Contraseña y confirmación de contraseña
  const elemPass = document.getElementById("myPassword");
  const password = elemPass.value;
  const contPat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const elemConfPass = document.getElementById("myConfPass");
  const confPassword = elemConfPass.value;

  //Ciudad
  const elemCiudad = document.getElementById("myCity");
  const ciudad = elemCiudad.value;

  //País
  const elemPais = document.getElementById("myCountry");
  const pais = elemPais.value;

  //Código postal
  const elemZip = document.getElementById("myZip");
  const zip = elemZip.value;
  const zipPat = /^\d{5}$/;

  //About you
  const op1 = document.getElementById("particular");
  const op2 = document.getElementById("company");

  //Observaciones
  const obs = document.getElementById("observations");

  //Términos y condiciones
  const checkbox = document.getElementById("conditions");

  

  //Validación nombre
  if (nombre.trim() == "") {
    elementoIncorrecto(elemNombre);
  } else {
    elementoCorrecto(elemNombre);
  }

  //Validación apellido
  if (apellido.trim() == "") {
    elementoIncorrecto(elemApellido);
  } else {
    elementoCorrecto(elemApellido);
  }

  // Validación email
  if (!emailPat.test(email)) {
    elementoIncorrecto(elemEmail);
  } else {
    elementoCorrecto(elemEmail);
  }

  // Validación teléfono
  if (!telPat.test(telefono)) {
    elementoIncorrecto(elemTel);
  } else {
    elementoCorrecto(elemTel);
  }

  // Validación contraseña
  if (!contPat.test(password)) {
    elementoIncorrecto(elemPass);
  } else {
    elementoCorrecto(elemPass);
  }

  //Validación de que la confirmación de contraseña y la contraseña coinciden
  if(password.trim() == ""){
    elementoIncorrecto(elemConfPass);
  }else if (password !== confPassword) {
    elementoIncorrecto(elemConfPass);
  } else {
    elementoCorrecto(elemConfPass);
  }

  //Validación ciudad
  if (ciudad.trim() == "") {
    elementoIncorrecto(elemCiudad);
  } else {
    elementoCorrecto(elemCiudad);
  }

  //Validación país
  if (pais.trim() == "") {
    elementoIncorrecto(elemPais);
  } else {
    elementoCorrecto(elemPais);
  }

  // Validación código postal
  if (!zipPat.test(zip)) {
    elementoIncorrecto(elemZip);
  } else {
    elementoCorrecto(elemZip);
  }

  //Validación about you
  if (!op1.checked && !op2.checked) {
    elementoIncorrecto(op1);
    elementoIncorrecto(op2);
  } else if (op1.checked) {
    elementoCorrecto(op1);
    op1.style.backgroundColor = "green";
    op2.style.borderColor = "black";
    op2.style.borderWidth = "1px";
  } else {
    elementoCorrecto(op2);
    op2.style.backgroundColor = "green";
    op1.style.borderColor = "black";
    op1.style.borderWidth = "1px";
  }

  //Las observaciones no tienen restricción porque da igual que estén vacías
  elementoCorrecto(obs);

  //Validación términos y condiciones
  if (!checkbox.checked) {
    elementoIncorrecto(checkbox);
  } else {
    elementoCorrecto(checkbox);
    checkbox.style.backgroundColor = "green";
  }

  
}

function elementoIncorrecto(elemento) {
  elemento.style.borderColor = "red";
  elemento.style.borderWidth = "2px";
}

function elementoCorrecto(elemento) {
  elemento.style.borderColor = "green";
  elemento.style.borderWidth = "2px";
}

function enviarFormulario(){
  validar();
  const elementosIncorrectos = document.querySelectorAll("[style='border-color: red; border-width: 2px;']");
  
  if (elementosIncorrectos.length === 0) {
    // Si no hay elementos incorrectos, envía el formulario
    alert("Registro enviado con éxito");
    document.getElementById("myForm").submit();
    return true;
    
  } else {
    // Si hay elementos incorrectos, muestra una alerta u otro tipo de retroalimentación
    alert("Por favor, corrija los campos resaltados en rojo antes de enviar el registro.");
    return false;
  }
}
~~~
</details>

De esta manera la página **Sign up** quedará de la siguiente forma: <br><br>

<table>
    <tr>
        <th>Registro</th>
        <th>Registro con validación</th>
    </tr>
    <tr>
        <td> <img src="https://github.com/nestorgarciacheste/PROYECTO-DAW-2023_24/assets/131865422/83a059b3-55d8-4527-93ea-767c47bf6771"></td> 
        <td> <img src="https://github.com/nestorgarciacheste/PROYECTO-DAW-2023_24/assets/131865373/265f9bc7-ab6d-4f55-bfa2-e32f4b61bf8b"></td>
    </tr>
</table>
<br>

### Contact
En el contacto de WebCode nos encontramos con un **HTML** que hace de estructura - generada mediante una tabla y divs - de un formulario de contacto. 
Este HTML consta del uso de Bootstrap, así como de un extenso **CSS** enlazado. <br> <br>
En este formulario, también hay **restricciones** que son generadas cuando el usuario intenta enviar un mensaje haciendo uso del botón de **Send**. Este botón llama a una función realizada en `JavaScript` la cual comprueba los aspectos esenciales:
<details>
  <summary>Ver código JS</summary>

  ~~~
function validarContact() {
  //Nombre
  const elemNombre = document.getElementById("myName");
  const nombre = elemNombre.value;

  //Apellido
  const elemApellido = document.getElementById("mySurname");
  const apellido = elemApellido.value;

  //Email
  const elemEmail = document.getElementById("myEmail");
  const email = elemEmail.value;
  const emailPat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  //Opción select
  const selectElement = document.getElementById("info");
  const opcionSeleccionada = selectElement.options[selectElement.selectedIndex].value;

  //Observaciones
  const elemWriteus = document.getElementById("write");
  const writeus = elemWriteus.value;

  //Validación nombre
  if (nombre.trim() == "") {
    elementoIncorrecto(elemNombre);
  } else {
    elementoCorrecto(elemNombre);
  }

  //Validación apellido
  if (apellido.trim() == "") {
    elementoIncorrecto(elemApellido);
  } else {
    elementoCorrecto(elemApellido);
  }

  // Validación email
  if (!emailPat.test(email)) {
    elementoIncorrecto(elemEmail);
  } else {
    elementoCorrecto(elemEmail);
  }

  //Validación desplegable
  if (opcionSeleccionada == "type") {
    elementoIncorrecto(selectElement);
  } else {
    elementoCorrecto(selectElement);
  }

  //Validación write us
  if (writeus.trim() == "") {
    elementoIncorrecto(elemWriteus);
  } else {
    elementoCorrecto(elemWriteus);
  }
}

function elementoIncorrecto(elemento) {
  elemento.style.borderColor = "red";
  elemento.style.borderWidth = "2px";
}

function elementoCorrecto(elemento) {
  elemento.style.borderColor = "green";
  elemento.style.borderWidth = "2px";
}

function enviarFormulario() {
  validarContact();
  const elementosIncorrectos = document.querySelectorAll(
    "[style='border-color: red; border-width: 2px;']"
  );

  if (elementosIncorrectos.length === 0) {
    // Si no hay elementos incorrectos, envía el formulario
    alert("Enviado con éxito");
    //document.getElementById("myContact").submit();
    return true;
  } else {
    // Si hay elementos incorrectos, muestra una alerta u otro tipo de retroalimentación
    alert(
      "Por favor, corrija los campos resaltados en rojo antes de enviar el mensaje."
    );
    return false;
  }
}
~~~
</details>

De esta manera la página **Contact** quedará de la siguiente forma: <br><br>

<table>
    <tr>
        <th>Contacto</th>
        <th>Contacto con validación</th>
    </tr>
    <tr>
        <td> <img src="https://github.com/nestorgarciacheste/PROYECTO-DAW-2023_24/assets/131865422/94504c03-a68a-426b-9aeb-ae0b39933484"></td> 
        <td> <img src="https://github.com/nestorgarciacheste/PROYECTO-DAW-2023_24/assets/131865373/441a1ca9-124d-41c1-abe7-4c3b93c2883d"></td>
    </tr>
</table>
<br>

## Home:

En Home hemos creado una descripcion de lo que seria la empresa, algunos de nuestos ejemplos de posibles trabajos , mapa con la localizacion con una API y reproductor de música.

Todo el trabajo ha pasado por varias ramas de trabajo, siendo la principal `feature/home`, trabajo de cada miembro del grupo en su respectiva rama:

<ul>
  <li>Lorenzo <code>Home_Lorenzo</code> : encargado de la estructuracion y creacion de la mayor parte del <b>home</b> , creacion de textos , diseño y gestión.
   <ul>
        <li>About us</li>
        <li>Slider Galeria</li>
        <li>Creacion de Mapa mediante API <b>Leaflet</b></li>
        <li>Boton UP para desplazarse al principio de la página</li>
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
        <td> <img src=""></td>        
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
