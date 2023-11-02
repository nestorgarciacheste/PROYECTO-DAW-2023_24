function checkform() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var emailError = document.getElementById("emailError");
  var passwordError = document.getElementById("passwordError");
  var google = document.getElementById("google");

  function isCorrect(email) {
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }

  if (!isCorrect(email)) {
    emailError.style.display = "block";
    google.style.marginTop = "-15px";
    google.style.marginBottom = "40px";
  } else {
    emailError.style.display = "none";
  }

  if (!isPasswordCorrect(password)) {
    passwordError.style.display = "block";
    google.style.marginTop = "-40px";
    google.style.marginBottom = "15px";
  } else {
    passwordError.style.display = "none";
  }

  if (isCorrect(email) && isPasswordCorrect(password)) {
    window.location.href = "http://localhost:5500/src/app/home/html/index.html";
  }

  if (!isCorrect(email) && !isPasswordCorrect(password)) {
    google.style.marginTop = "-40px";
    google.style.marginBottom = "40px";
  }
}

function isPasswordCorrect(password) {
  var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  /*
    (?=.*[a-z])-> al menos una minúscula
    (?=.*[A-Z]) -> al menos una mayúscula
    (?=.*\d) -> al menos un dígito
    (?=.*[\W_]) -> al menos un carácter especial
    {8,} -> longitud mínima de 8
    */
  return passwordRegex.test(password);
}

function forgot() {
  function isCorrect(email) {
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }
  var email = prompt("Please, enter your email address:");
  if (isCorrect(email)) {
    alert("We have sent an email to " + email);
  } else {
    alert("The email address entered is not correct.");
  }
}
