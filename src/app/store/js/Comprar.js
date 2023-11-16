function checkform() {
  function isCorrectE(email) {
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailRegex.test(email)) {
      return true;
    }else{
      Swal.fire('Error', 'Please enter a valid e-mail.', 'error');
    }
  }
  function isCorrectT(numero){
    var phoneNumber = /^[0-9]{9}$/;
    if (phoneNumber.test(numero)) {
      return true;
    }else{
      Swal.fire('Error', 'Please enter a valid phone number.', 'error');
    }
  }
  function isCorrectZ(codigo){
    var postalCode = /^\d{5}$/;
    if (postalCode.test(codigo)) {
      return true;
    }else{
      Swal.fire('Error', 'Please enter a valid postal code.', 'error');
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
      Swal.fire('Success', 'We have sent an email to ' + email+' with order confirmation', 'success');
    }
    
  } else {
    Swal.fire('Error', 'Please fill in all required fields with valid information.', 'error');
  }
}
function resaltarBorde(elemento) {
  elemento.classList.add('formulario-input-focus');
}

function restaurarBorde(elemento) {
  elemento.classList.remove('formulario-input-focus');
}
