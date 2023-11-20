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

## Account:
Our Account section contains the essentials for the user to register with WebCode, log in at any time using a variety of methods, and set up their account in a convenient and visual way.

To do this, we have divided our Account section in the `feature/login` branch into several sub-sections, with their respective managers and branches:
<ul>
  <li>Cecilia <code>login_Cecilia</code> : responsible for user <b>registration</b> using fields with validation. Also responsible for the <b>contact</b> section for users.
<br>
  <li>Denise <code>login_Denise</code> : Responsible for <b> user login </b> by:
    <ul>
      <li>Validating forms (email and password).</li>
      <li>Authenticating with Google and GitHub (via Auth0).</li>
      <li>Password recovery using SweetAlert2.</li>
    </ul>
  </li>
<br>
  <li>Alex <code>login_Alex</code> : in charge of <b>account configuration</b>:</li>
      <ul>
          <li>Editing user credentials.</li>
          <li>Editing user credentials.</li>
          <li>Performing LogOut.</li>
    </ul>
</ul>
<br>
<table>
    <tr>
        <th>Registration</th>
        <th>Contact</th>
        <th>Login</th>
        <th>Account</th>
    </tr>
    <tr>
        <td> <img src="https://github.com/nestorgarciacheste/PROYECTO-DAW-2023_24/assets/131865422/83a059b3-55d8-4527-93ea-767c47bf6771"></td>        
        <td> <img src="https://github.com/nestorgarciacheste/PROYECTO-DAW-2023_24/assets/131865422/94504c03-a68a-426b-9aeb-ae0b39933484"></td>        
        <td> <img width ="2000px" src="https://github.com/nestorgarciacheste/PROYECTO-DAW-2023_24/assets/131865422/b19ee5ae-7480-462f-ab15-e34560312a7c"</td>        
        <td> <img src="https://github.com/nestorgarciacheste/PROYECTO-DAW-2023_24/assets/131865422/ed3e51cb-1971-48ea-b07b-83be57446b07"></td>        
    </tr>
</table>
<br>

### Login

The WebCode login consists of an **HTML** structure mainly generated with divs, creating a brief form that requests the user's email and password. In the absence of a database, successful completion of the form's restrictions (explained below) grants users access to the web's Home page.

This HTML involves the usage of Bootstrap and an extensive **CSS linked and generated for responsiveness** and cross-browser compatibility. <br> <br>
<details>
  <summary>See HTML code</summary>

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

The aforementioned **restrictions** occur when the user attempts to access the website using the Log in button. This button triggers a JavaScript function that checks two essential aspects:

- Email adress:<br>
  `var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;`    
    - Must contain '@'.
    - Must contain a top-level domain (TLD) ('.').
- Password:<br>
  `var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;`
    - (?=.*[a-z])-> at least a lower case
    - (?=.*[A-Z]) -> at least a upper case
    - (?=.*\d) -> at least one digit
    - (?=.*[\W_]) -> at least a special character
    - {8,} -> minimum length of 8
<br>

### Auth0 Login 
Users can choose to log in to our website using their **Google** and **GitHub accounts**. This functionality is implemented through the **Auth0** entity and access management platform.
<table>
    <tr>
        <th>Configuration on Auth0 Website</th>
        <th>Outcome on WebCode</th>
    </tr>
    <tr>
        <td> <img src="https://github.com/nestorgarciacheste/PROYECTO-DAW-2023_24/assets/131865422/b0fc71d7-21d5-4db2-95ca-d9227157ac0a"></td>        
        <td> <img src="https://github.com/nestorgarciacheste/PROYECTO-DAW-2023_24/assets/131865422/307dca2f-4c7a-4447-b97d-99be35454a35"></td>        
    </tr>
</table>

To enable this feature, we've added the following paths to our **project's Head**:
<code>
    <script src="app.js"></script>
    <script src="https://cdn.auth0.com/js/auth0-spa-js/2.0/auth0-spa-js.production.js"></script>
</code>

The script redirects users using the Auth0 user key to the desired service. For **Google**, the script appears as follows:

<details>
  
<summary>See JS code</summary>

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


### Password Recovery
If the user sends a password request to log in, WebCode's administration will send an email with the password recovery. For this purpose, the user only needs to enter a valid email in an input field that we've aesthetically modified using the **SweetAlert2** library.
We've added this library to the **Head** of our project:
<code>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</code>

<table>
    <tr>
        <th>Script Configuration</th>
        <th>Outcome in WebCode</th>
    </tr>
    <tr>
        <td> <img src="https://github.com/nestorgarciacheste/PROYECTO-DAW-2023_24/assets/131865422/d47500b1-4e0a-4306-8e3c-2224a75cc7ae"></td>        
        <td> <img src="https://github.com/nestorgarciacheste/PROYECTO-DAW-2023_24/assets/131865422/910e2a8e-a085-40f6-8b4d-f3e08f099b39"></td>        
    </tr>
</table>

Through our email server and PHP code, this email is sent in real, not simulated, to the user. This email contains a temporary password that the user can utilize to access the website.
<details>
  
<summary>See PHP code</summary>

~~~
<?php
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = isset($_POST["email"]) ? $_POST["email"] : "";

    if (!empty($email)) {
        $destinatario = $email;
        $asunto = "Password recovery";

        $cuerpoCorreo = "Hello, this is the WebCode team.\n";
        $cuerpoCorreo .= "We are delighted to assist you in recovering your password.\n";
        $cuerpoCorreo .= "Your temporary password is: 1WebCode-\n";
        $cuerpoCorreo .= "We extended our thanks for your cooperation.\n";
        $cuerpoCorreo .= "WebCode";

        $remitente = "contact@webcode.intecmedia.com";

        $headers = "From: $remitente";

        if (mail($destinatario, $asunto, $cuerpoCorreo, $headers)) {
            echo "Email sent successfully";
        } else {
            echo "Error sending email";
        }
    } else {
        echo "The email address was not provided correclty.";
    }
} else {
    http_response_code(405); 
    echo "Method not allowed";
}
?>
  
  ~~~

</details>

### Sign up

In the WebCode registration we find an **HTML** that acts as a structure - generated by means of a table and divs - of a quite detailed registration form. In the absence of a database, the user will be able to access the **Home page** of the web by means of the good fulfillment of the restrictions of the form (explained below). This HTML consists of the use of Bootstrap, as well as extensive linked **CSS**.<br> <br>
The previously mentioned **constraints** are generated when the user tries to access the Web using the **Submit form** button. This button calls a JavaScript function which checks the essential aspects:

<details>
  <summary>See JS code</summary>

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

This way the **Sign up** page will look like this:

<table>
    <tr>
        <th>Sign up</th>
        <th>Sign up with validation</th>
    </tr>
    <tr>
        <td> <img src="https://github.com/nestorgarciacheste/PROYECTO-DAW-2023_24/assets/131865422/83a059b3-55d8-4527-93ea-767c47bf6771"></td> 
        <td> <img src="https://github.com/nestorgarciacheste/PROYECTO-DAW-2023_24/assets/131865373/265f9bc7-ab6d-4f55-bfa2-e32f4b61bf8b"></td>
    </tr>
</table>
<br>

### Contact
In the WebCode contact we find an **HTML** that makes the structure - generated by a table and divs - of a contact form. 
This HTML consists of the use of Bootstrap, as well as extensive linked **CSS**.<br> <br>

In this form, there are also **constraints** that are generated when the user tries to send a message using the **Send** button. This button calls a function made in `JavaScript` which checks the essentials:

<details>
  <summary>See JS code</summary>

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

This way the **Contact** page will look like this: <br><br>

<table>
    <tr>
        <th>Contact</th>
        <th>Contact with validation</th>
    </tr>
    <tr>
        <td> <img src="https://github.com/nestorgarciacheste/PROYECTO-DAW-2023_24/assets/131865422/94504c03-a68a-426b-9aeb-ae0b39933484"></td> 
        <td> <img src="https://github.com/nestorgarciacheste/PROYECTO-DAW-2023_24/assets/131865373/441a1ca9-124d-41c1-abe7-4c3b93c2883d"></td>
    </tr>
</table>
<br>

## Home:

At Home we have created a description of what the company would be, some of our examples of possible jobs, a map with the location with an API and a music player.

All the work has gone through several branches of work, the main one being `feature/home`, the work of each member of the group in their respective branch:

<ul>
  <li>Lorenzo <code>Home_Lorenzo</code> : Responsible for the structuring and creation of most of the <b>home</b>, text creation, design and management.
   <ul>
        <li>About us</li>
        <li>Gallery slider</li>
        <li>Map creation via API <b>Leaflet</b></li>
        <li>UP button to move to the top of the page</li>
    </ul>
    </li>
   <br>
  <li>Denise <code>main</code> music player creation </li>
<br>
  <ul>
    
  <li>Manu <code>home_Manu</code> : encargado de la seccion nuestros servicios e implentacion de opiniones
    <ul>
        <li>Our services</li>
        <li>Opiniones</li>
      </ul> 
  </li>


<br>
  <li>Ruben <code>login_</code> </li>
      
</ul>
<br>
<table>
    <tr>
        <th>About us</th>
        <th>Gallery slider</th>
        <th>Map</th>
        <th>Music player</th>
    </tr>
    <tr>
        <td> <img src="/src/assets/img/captura_readme_home_aboutUs.png"></td>        
        <td> <img src="/src/assets/img/captura_readme_home_galleySlider.png"></td>        
        <td> <img src="/src/assets/img/captura_readme_home_map.png"></td>        
        <td> <img src="/src/assets/img/captura_readme_home_reproductor.png"></td>        
    </tr>
</table>
<br>

<br>

## Gallery:
Nuestro equipo formado por Nestor, Cristian y David somos los encargados de hacer el apartado de Gallery de WebCode, la galería de la web.

Para realizar este apartado hemos hecho una rama principal llamada <code>features_gallery</code>, dividida esta rama, en tres subramas, una para cada integrante del equipo, para poder desarrollar nuestras tareas para el correcto funcionamiento de la web:

  <li>Nestor, líder del grupo, encargado del <b>JavaScript, TopBar, Footer</b>. La tarea consiste en desarrollar el código JavaScript, una vez diseñada la estructura de <b>.html</b> y el diseño con <b>.css</b> darle funcionamiento para que las fotos cambien su distribucion de manera autónoma.</li>
    <ul>
        <li>Organizador de commits de los diferentes equipos. </li>
        <li>Dado que tres personas eran demasiadas para gallery, se ha basado más en ayudar a los compañeros con sus respectivas partes como:
            <ul>
                <li>Home (reproductor de video)</li>
                <li>Store (moreinfo)</li>
                <li>Login (ayudando a denise)</li>
                <li>Hacer responsive parte de la web</li>
                <li>Github</li>
                <li>Y resolviendo dudas de compañeros </li>


            </ul>
</li>
<br>
  <li>Cristian con su rama <code>gallery_Cristina</code> : encargado de hacer el <b>HTML, TopBar, Footer. </b> La tarea consiste en diseñar la estructura de la gellery, la cual se compone de un contenedor principal que dentro de este, encapsulamos todo el contenido que tendrá la web. Consiste en cuatro apartados:
    <ul>
      <li>Primer apartado. Diseñado con un contenedor <b>firts_container</b>, desarrollado con dos etiquetas <b>div</b>, la primera con una imagen que ocupe toda la altura del contenedor y el segundo <b>div</b> desarrollado con tres fotos, colocadas una encima de otra.</li>
      <li>Segundo apartado. Diseñado con un contenedor <b>second_container</b>, desarrollado con dos etiquetas <b>div</b>, la primera a la parte izquierda, con una imagen que este centrada y el segundo <b>div</b> desarrollado con un texto de tres párrafos.</li>
       <li>Tercer apartado. Diseñado con un contenedor <b>therd_container</b>, desarrollado con dos etiquetas <b>div</b>, la primera a la parte izquierda, con un texto dividido en tres párrafod y el segundo <b>div</b> desarrollado con una imagen centrada</li>
        <li>Cuarto apartado. Diseñado con una etiqueta <b>videoWrapper</b>, desarrollado con un video</li>
    </ul>
  </li>
</ul>
<br>
   <table>
    <tr>
        <th>Primer Apartado</th>
        <th>Segundo Apartado</th>
        <th>Tercer Apartado</th>
        <th>Cuarto Apartado</th>
    </tr>
    <tr>
        <td> <img src="/src/assets/img/conededor_principal.PNG"></td>        
        <td> <img src="/src/assets/img/segundo_contenedor.PNG"></td>        
        <td> <img src="/src/assets/img/tercerContenedor.PNG"></td>        
        <td> <img src="/src/assets/img/cuartoContenedor.PNG"></td>      
    </tr>
</table>
<br>

<br>
<ul>
  <li>David con su rama <code>gallery_DavidParedes</code> : encargado de <b>CSS, Responsive, TopBar y Footer</b>. La tarea consiste en darle diseño al <b>.html</b> y que sea <b>Responsive</b> para poder navegar por la web desde diferentes dispositivos.</li>
      <ul>
          <li>Con las clases de CSS añadirle estilos en el archivo .html</li>
          <li>con @media establecemos dependiendo del dispositivos un tamaño determinado al <code>body</code> y al <code>main-container</code></li>
</ul>
<br>
<table>
    <tr>
        <th>Código CSS</th>
        <th>Tamaño Ordenador</th>
        <th>Tamaño iPad</th>
        <th>Tamaño Movil</th>
    </tr>
    <tr>
        <td> <img src="/src/assets/img/codigoGalleryResponsive.PNG"></td>        
        <td> <img src="/src/assets/img/vistaOrdenador.PNG"></td>        
        <td> <img src="/src/assets/img/vistaIpad.PNG"></td>        
        <td> <img src="/src/assets/img/vistaMovil.PNG"></td>      
    </tr>
</table>
<br>

<ul>
</ul>

  <li>Por último, mencionar que el grupo se ha encargado del desarrollo del <b>TopBar</b> y del <b>Footer</b> para poder navegar por toda la web, añadiendo enlaces para navegar en las diferentes páginas, con un buscador y el perfil del usuario. Por otro lado, en el <b>Footer</b> hemos añadido las redes sociales, en el caso de la web son: facebook, Instagram y Linkedin</li>



      
  
