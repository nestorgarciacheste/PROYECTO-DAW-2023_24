(function() {
    'use strict';

    var forms = document.querySelectorAll('.needs-validation');

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else{
                // Validación email
                var email = form.querySelector('[name="email"]').value;

                if (!isValidEmail(email)) {
                    event.preventDefault();
                }

                //Validación contraseña
                var password = form.querySelector('[name="password"]').value;
                var confPassword = form.querySelector('[name="confPassword"]').value;

                if (!isValidPassword(password)) {
                    event.preventDefault();
                }

                if (password !== confPassword) {
                    event.preventDefault();
                }

                //Validación teléfono
                var telef = form.querySelector('[name="telefono"]').value;

                if (!isValidPhoneNumber(telef)) {
                    event.preventDefault();
                }
            }

            form.classList.add('was-validated');
        }, false);
    });

    function isValidEmail(email) {
        emailPat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }

    function isValidPassword(password) {
        contPat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        return contPat.test(password);
    }

    function isValidPhoneNumber(telefono) {
        telPat = /^\d{9}$/;
        return regex.test(telefono);
    }
})();