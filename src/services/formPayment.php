<?php
header("Access-Control-Allow-Origin: *"); // Esto permite solicitudes desde cualquier origen. En producción, deberías especificar el dominio permitido.
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recuperar la dirección de correo electrónico del cuerpo de la solicitud
    $email = isset($_POST["email"]) ? $_POST["email"] : "";

    if (!empty($email)) {
        // Configurar el correo electrónico
        $destinatario = $email;
        $asunto = "Nuevo pedido Web Code";

        // Construir el cuerpo del correo
        $cuerpoCorreo = "Hola, somos de WebCode\n";
        $cuerpoCorreo .= "Te damos la gracias por tu compra\n";
        $cuerpoCorreo .= "En menos de 24h tendras tu pedido.\n";

        // Configurar el remitente fijo
        $remitente = "contact@webcode.intecmedia.com";

        // Enviar el correo electrónico
        $headers = "From: $remitente";

        if (mail($destinatario, $asunto, $cuerpoCorreo, $headers)) {
            // Enviar una respuesta al cliente
            echo "Correo enviado con éxito";
        } else {
            echo "Error al enviar el correo";
        }
    } else {
        echo "La dirección de correo electrónico no se proporcionó correctamente.";
    }
} else {
    http_response_code(405); // Método no permitido
    echo "Método no permitido";
}
?>