function validacion() {
  "use strict";
  var forms = document.querySelectorAll(".needs-validation");
  Array.from(forms).forEach((form) => {
    form.addEventListener("submit", function (event) {
      // Validación email
      var email = form.querySelector('[name="email"]').value;
      var emailPat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if (!emailPat.test(email)) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      // Validación contraseña
      var password = form.querySelector('[name="password"]').value;
      var confPassword = form.querySelector('[name="confPassword"]').value;
      var contPat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

      if (!contPat.test(password)) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      if (password !== confPassword) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      // Validación teléfono
      var telefono = form.querySelector('[name="telefono"]').value;
      var telPat = /^\d{9}$/;

      if (!telPat.test(telefono)) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      // Validación código postal
      var zip = form.querySelector('[name="zip"]').value;
      var zipPat = /^\d{5}$/;

      if (!zipPat.test(zip)) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
    });
    form.classList.add("was-validated");
  });
}
