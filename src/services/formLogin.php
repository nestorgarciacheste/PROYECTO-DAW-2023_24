<?php
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = isset($_POST["email"]) ? $_POST["email"] : "";

    if (!empty($email)) {
        $destinatario = $email;
        $asunto = "Password recovery";

        $cuerpoCorreo = "Hello, this is the WebCode team.\n";
        $cuerpoCorreo .= "We are delighted to assist you in recovering your password.\n";
        $cuerpoCorreo .= "Your temporary password is: 1WebCode-\n";
        $cuerpoCorreo .= "We extended our thanks for your cooperation.\n";
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

