var activa = true;

/* CHANGE SETTINGS */
function edit() {
  let nombre = document.getElementById("icono_nombre");
  let email = document.getElementById("icono_email");
  let editarFoto = document.getElementById("link_edit");

  activa = !activa;

  if (activa) {
    nombre.style.display = "none";
    email.style.display = "none";
    editarFoto.style.display = "none";
  } else {
    nombre.style.display = "flex";
    email.style.display = "flex";
    editarFoto.style.display = "flex";
  }
}

/* CHANGE NAME */
function cambiarNombre() {
  let nombre = document.getElementById("enter_name").value;
  if (nombre == "") {
    alert("Está vacío")
  } else {
    document.getElementById("enter_name").value = "";
    document.getElementById("nombre").innerHTML = `Welcome ${nombre}`;
    document.getElementById("ventana_nombre").style.width = "0%";
  }
}

/* CHANGE EMAIL */
function cambiarEmail() {
  let email = document.getElementById("enter_email").value;
  if (email == "") {
    alert("Está vacio");
  } else if (validarEmail(email)) {
    alert("Se ha introducido correctamente");
    document.getElementById("email").innerHTML = `${email}`;
    document.getElementById("ventana_email").style.width = "0%";
    document.getElementById("enter_email").value = " ";
  } else if (!validarEmail(email)) {
    alert("El formato del email es incorrecto -> xxx@yyyyy.zzzz");
    document.getElementById("enter_email").value = "";
  }
}

function validarEmail(email) {
  const regex = /\w+@\w{5}\.\w{3}/;
  if (regex.test(email)) {
    return true;
  } else {
    return false;
  }
}

/* CHANGE IMAGE */
  function cambiarImagen(event) {
  const inputImage = document.getElementById('enter_file');

  inputImage.click(); // Simula el clic en el input de tipo file

  inputImage.addEventListener('change', function(e) {
    const file = e.target.files[0]; /* Extraer el archivo en el primero elemento, input crea una lista de imagenes */
    const reader = new FileReader(); /* Sirve para leer el archivo */

    reader.onload = function(event) { /* La  */
      const imageUrl = event.target.result; /* Extrae la URL dentro de input file */
      const preview = document.querySelector('.circulo');
      preview.style.backgroundImage = `url(${imageUrl})`;
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  });
  }

/* OPEN AND CLOSE OVERLAY */
function openName() {
  document.getElementById("ventana_nombre").style.width = "100%";
}
function closeName() {
  document.getElementById("ventana_nombre").style.width = "0%";
}

function openEmail() {
  document.getElementById("ventana_email").style.width = "100%";
}
function closeEmail() {
  document.getElementById("ventana_email").style.width = "0%";
}

function openImage() {
  document.getElementById("ventana_imagen").style.width = "100%";
}
function closeImage() {
  document.getElementById("ventana_imagen").style.width = "0%";
}
