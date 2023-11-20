<?php
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = isset($_POST["email"]) ? $_POST["email"] : "";

    if (!empty($email)) {
        $destinatario = $email;
        $asunto = "New order from Web Code";

        $cuerpoCorreo = "Hello, this is the WebCode team\n";
        $cuerpoCorreo .= "We sincerely thank you for your purchase with us.\n";
        $cuerpoCorreo .= "Your order is being processed and will be delivered within the next 24 hours.\n";
        $cuerpoCorreo .= "We appreciate your trust in our services and hope you enjoy your products.\n";
        $cuerpoCorreo .= "If you have any further questions or need assistance, feel free to contact us.\n";
        $cuerpoCorreo .= "Thank you once again for choosing WebCode.\n";
        $cuerpoCorreo .= "WebCode";

        $remitente = "contact@webcode.intecmedia.com";

        $headers = "From: $remitente";

        if (mail($destinatario, $asunto, $cuerpoCorreo, $headers)) {
            echo "Email sent successfully";
        } else {
            echo "Error sending email";
        }
    } else {
        echo "The email address was not provided correclty.";
    }
} else {
    http_response_code(405); 
    echo "Method not allowed";
}
?>