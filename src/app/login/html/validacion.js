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
