<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recuperar la información del formulario
    $email = $_POST["email"];

    // Configurar el correo electrónico
    $destinatario = $email;
    $asunto = "Recuperacio de contraseña";

    // Construir el cuerpo del correo
    $cuerpoCorreo = "Hola, somos de WebCode\n";
    $cuerpoCorreo .= "Estamos encantados de poder ayudarte a recuperar tu contraseña\n";
    $cuerpoCorreo .= "Tu contraseña provisional es: 1WebCode.\n";

    // Configurar el remitente fijo
    $remitente = "contact@webcode.intecmedia.com";

    // Enviar el correo electrónico
    $headers = "From: $remitente";

    if (mail($destinatario, $asunto, $cuerpoCorreo, $headers)) {
        echo "Correo enviado con éxito";
    } else {
        echo "Error al enviar el correo";
    }
}
?>
