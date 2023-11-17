/*check data of the form */
function checkform() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var emailError = document.getElementById("emailError");
  var passwordError = document.getElementById("passwordError");
  var google = document.getElementById("google");

  /*regex of email to be correct */
  function isCorrect(email) {
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }

  /*regex of password to be correct */
  function isPasswordCorrect(password) {
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    /*
      (?=.*[a-z])-> at least a lower case
      (?=.*[A-Z]) -> at least a upper case
      (?=.*\d) -> at least one digit
      (?=.*[\W_]) -> at least a special character
      {8,} -> minimum length of 8
      */
    return passwordRegex.test(password);
  }

/*if email its not correct we`ll show a message */
  if (!isCorrect(email)) {
    emailError.style.display = "block";
    google.style.marginTop = "-15px";
    google.style.marginBottom = "40px";
  } else {
    emailError.style.display = "none";
  }

/*if password its not correct we`ll show a message */
if (!isPasswordCorrect(password)) {
    passwordError.style.display = "block";
    google.style.marginTop = "-40px";
    google.style.marginBottom = "15px";
  } else {
    passwordError.style.display = "none";
  }

  /*if email is correct we`ll sign up */
  if (isCorrect(email) && isPasswordCorrect(password)) {
    window.location.href = "../../home/html/index.html";
  }

    /*here we change the logotype's position  */
  if (!isCorrect(email) && !isPasswordCorrect(password)) {
    google.style.marginTop = "-40px";
    google.style.marginBottom = "40px";
  }
}

  /*if user forget his password, they can send an email */
  function forgot(event) {
    function isCorrect(email) {
      var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailRegex.test(email);
    }
  
    event.preventDefault();
  
    Swal.fire({
      title: 'Please, enter your email address',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Submit',
      customClass: {
        confirmButton: 'custom-green-sweet-button' 
      }
    }).then((result) => {
      if (result.isConfirmed) {
        var email = result.value;
        if (isCorrect(email)) {
          //*AJAX request to script PHP
          var xhr = new XMLHttpRequest();
          xhr.open("POST", "../../../services/formLogin.php", true);
          xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
              if (xhr.status == 200) {
                //*Server Answer
                Swal.fire('Success', 'We have sent an email to ' + email, 'success');
              } else {
                //*Error fixing
                Swal.fire('Error', 'Error during AJAX request: ' + xhr.statusText, 'error');
              }
            }
          };
          xhr.onerror = function () {
            Swal.fire('Error', 'Network error during AJAX request', 'error');
          };
          // *send the email
          xhr.send("email=" + email);
        } else {
          Swal.fire('Error', 'The email address entered is not valid.', 'error');
        }
      }
    });
  }
  
