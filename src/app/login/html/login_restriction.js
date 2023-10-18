function checkform() {
    var correo = document.getElementById("email").value;
    var contraseña = document.getElementById("password").value;
    if (!esCorrecto(correo)) {
      alert("El correo debe tener el formato xxx@yyyy.zzzz");
    } else if (!esCorrecta(contraseña)) {
      alert("La contraseña debe tener entre 8 y 10 caracteres");
    } else {
      alert("Tus datos han sido enviados");
    }
  }
  
  function esCorrecto(correo) {
    var correoRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return correoRegex.test(correo);
  }
  
  function esCorrecta(contraseña) {
    var contraseñaRegex = /.{8,10}/;
    return contraseñaRegex.test(contraseña);
  }