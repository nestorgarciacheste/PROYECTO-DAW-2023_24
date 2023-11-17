function checkform() {
  function isCorrectE(email) {
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailRegex.test(email)) {
      return true;
    } else {
      Swal.fire("Error", "Please enter a valid e-mail.", "error");
      return false;
    }
  }
  function isCorrectT(numero) {
    var phoneNumber = /^[0-9]{9}$/;
    if (phoneNumber.test(numero)) {
      return true;
    } else {
      Swal.fire("Error", "Please enter a valid phone number.", "error");
      return false;
    }
  }
  function isCorrectZ(codigo) {
    var postalCode = /^\d{5}$/;
    if (postalCode.test(codigo)) {
      return true;
    } else {
      Swal.fire("Error", "Please enter a valid postal code.", "error");
      return false;
    }
  }

  // Obtén los valores de los campos
  var fullName = document.getElementById("billing-name").value;
  var email = document.getElementById("billing-email-address").value;
  var phone = document.getElementById("billing-phone").value;
  var address = document.getElementById("billing-address").value;
  var country = document.getElementById("billing-country").value;
  var city = document.getElementById("billing-city").value;
  var postalCode = document.getElementById("zip-code").value;
  var paymentMethod = document.querySelector(
    'input[name="pay-method"]:checked'
  ).value;

  // Verifica si todos los campos están completos y el email es correcto
  if (
    fullName &&
    address &&
    country &&
    city &&
    isCorrectE(email) &&
    isCorrectT(phone) &&
    isCorrectZ(postalCode)
  ) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../../../services/formLogin.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          // Respuesta del servidor
          Swal.fire("Success", "We have sent an email to " + email, "success");
        } else {
          // Manejo de errores
          Swal.fire(
            "Error",
            "Error during AJAX request: " + xhr.statusText,
            "error"
          );
        }
      }
    };
    xhr.onerror = function () {
      // Manejo de errores de red
      Swal.fire("Error", "Network error during AJAX request", "error");
    };
    // Enviar la dirección de correo electrónico al script PHP
    xhr.send("email=" + email);
  } else {
    Swal.fire("Error", "The email address entered is not valid.", "error");
  }
}
