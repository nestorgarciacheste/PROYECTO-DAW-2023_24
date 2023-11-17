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
