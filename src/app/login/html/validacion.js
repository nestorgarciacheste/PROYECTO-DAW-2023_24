const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  //Validación nombre
  const elemNombre = document.getElementById("myName");
  const nombre = elemNombre.value;

  if (nombre == "" || nombre == " ") {
    elementoIncorrecto(elemNombre);
    event.stopPropagation();
    return;
  }else{
    elementoCorrecto(elemNombre);
  }
  
  //Validación apellido
  const elemApellido = document.getElementById("mySurname");
  const apellido = elemApellido.value;

  if (apellido == "" || apellido == " ") {
    elementoIncorrecto(elemApellido);
    event.stopPropagation();
    return;
  }else{
    elementoCorrecto(elemApellido);
  }
  
  // Validación email
  const elemEmail = document.getElementById("myEmail");
  const email = elemEmail.value;
  const emailPat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!emailPat.test(email)) {
    elementoIncorrecto(elemEmail);
    event.stopPropagation();
    return;
  }else{
    elementoCorrecto(elemEmail);
  }

  // Validación teléfono
  const elemTel = document.getElementById("myPhone");
  const telefono = elemTel.value;
  const telPat = /^\d{9}$/;

  if (!telPat.test(telefono)) {
    elementoIncorrecto(elemTel);
    event.stopPropagation();
    return;
  }else{
    elementoCorrecto(elemTel);
  }

  // Validación contraseña
  const elemPass = document.getElementById("myPassword");
  const password = elemPass.value;
  const contPat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  if (!contPat.test(password)) {
    elementoIncorrecto(elemPass);
    event.stopPropagation();
    return;
  }else{
    elementoCorrecto(elemPass);
  }

  //Validación de que la confirmación de contraseña y la contraseña coinciden
  const elemConfPass = document.getElementById("myConfPass");
  const confPassword = elemConfPass.value;
  if (password !== confPassword) {
    elementoIncorrecto(elemConfPass);
    event.stopPropagation();
    return;
  }else{
    elementoCorrecto(elemConfPass);
  }

  //Validación ciudad
  const elemCiudad = document.getElementById("myCity");
  const ciudad = elemCiudad.value;

  if (ciudad == "" || ciudad == " ") {
    elementoIncorrecto(elemCiudad);
    event.stopPropagation();
    return;
  }else{
    elementoCorrecto(elemCiudad);
  }

  //Validación país
  const elemPais = document.getElementById("myCountry");
  const pais = elemPais.value;

  if (pais == "" || pais == " ") {
    elementoIncorrecto(elemPais);
    event.stopPropagation();
    return;
  }else{
    elementoCorrecto(elemPais);
  }

  // Validación código postal
  const elemZip = document.getElementById("myZip");
  const zip = elemZip.value;
  const zipPat = /^\d{5}$/;

  if (!zipPat.test(zip)) {
    elementoIncorrecto(elemZip);
    event.stopPropagation();
    return;
  }else{
    elementoCorrecto(elemZip);
  }
  
});


function elementoIncorrecto(elemento) {
  elemento.style.borderColor = "red";
  elemento.style.borderWidth = "20px";
}

function elementoCorrecto(elemento) {
  elemento.style.borderColor = "green";
  elemento.style.borderWidth = "20px";
}
