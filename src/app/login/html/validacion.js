function validacion() {
  var forms = document.querySelectorAll(".needs-validation");
  Array.from(forms).forEach((form) => {
    form.addEventListener("submit", function (event) {
      // Validación email
      const email = form.querySelector('[name="email"]').value;
      const emailPat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if (!emailPat.test(email)) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      // Validación contraseña
      const password = document.getElementById("pass");
      const confPassword = form.querySelector('[name="confPassword"]').value;
      const contPat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

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
      const telefono = form.querySelector('[name="telefono"]').value;
      const telPat = /^\d{9}$/;

      if (!telPat.test(telefono)) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      // Validación código postal
      const zip = form.querySelector('[name="zip"]').value;
      const zipPat = /^\d{5}$/;

      if (!zipPat.test(zip)) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
    });
    form.classList.add("was-validated");
  });
}
