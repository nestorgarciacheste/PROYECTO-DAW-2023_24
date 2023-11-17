function checkform() {
  function isCorrectE(email) {
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailRegex.test(email)) {
      return true;
    } else {
      Swal.fire('Error', 'Please enter a valid e-mail.', 'error');
      return false;
    }
  }

  function isCorrectT(numero) {
    var phoneNumber = /^[0-9]{9}$/;
    if (phoneNumber.test(numero)) {
      return true;
    } else {
      Swal.fire('Error', 'Please enter a valid phone number.', 'error');
      return false;
    }
  }

  function isCorrectZ(codigo) {
    var postalCode = /^\d{5}$/;
    if (postalCode.test(codigo)) {
      return true;
    } else {
      Swal.fire('Error', 'Please enter a valid postal code.', 'error');
      return false;
    }
  }

  // Obtén los valores de los campos
  var fullName = document.getElementById('billing-name').value;
  var email = document.getElementById('billing-email-address').value;
  var phone = document.getElementById('billing-phone').value;
  var address = document.getElementById('billing-address').value;
  var country = document.getElementById('billing-country').value;
  var city = document.getElementById('billing-city').value;
  var postalCode = document.getElementById('zip-code').value;
  var paymentMethod = document.querySelector('input[name="pay-method"]:checked').value;

  // Verifica si todos los campos están completos y el email es correcto
  if (fullName && address && country && city) {
    // Envía la información al servidor o realiza la acción deseada
    if (isCorrectE(email) && isCorrectT(phone) && isCorrectZ(postalCode)) {
      // Envia el correo utilizando SendGrid o la API de correo que prefieras
      sendEmail(email);
      Swal.fire('Success', 'We have sent an email to ' + email + ' with order confirmation', 'success');
    }
  } else {
    Swal.fire('Error', 'Please fill in all required fields with valid information.', 'error');
  }
}

function sendEmail(email) {
  // Aquí debes implementar la lógica para enviar el correo utilizando la API de SendGrid o tu proveedor de correo preferido.
  // Puedes hacer una solicitud AJAX al backend que maneje el envío del correo.
  // El código a continuación es un ejemplo simplificado y debe ser adaptado según tu configuración.

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "../../../services/formPayment.php", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        // Respuesta del servidor
        console.log('Email sent successfully');
      } else {
        // Manejo de errores
        console.error('Error during email sending: ' + xhr.statusText);
      }
    }
  };
  xhr.onerror = function () {
    // Manejo de errores de red
    console.error('Network error during email sending');
  };
  // Enviar la dirección de correo electrónico al backend
  xhr.send("email=" + email);
}

