<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = "makeropzin@gmail.com"; // Substitua pelo seu endereço de e-mail
    $subject = "Mensagem do site Big-Dog de " . $name;
    $headers = "From: $email";
    
    // Envia o e-mail
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(array("success" => true));
    } else {
        echo json_encode(array("success" => false));
    }
}
?>
