<?php

// Verificar que el formulario fue enviado
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Recibir los datos
    $nombre = $_POST["nombre"] ?? "";
    $correo = $_POST["correo"] ?? "";
    $mensaje = $_POST["mensaje"] ?? "";

    // Validación básica
    if ($nombre === "" || $correo === "" || $mensaje === "") {
        echo "<h2>Error: Todos los campos son obligatorios.</h2>";
        exit;
    }

    // Mostrar confirmación
    echo "<h2>Mensaje enviado correctamente</h2>";
    echo "<p><strong>Nombre:</strong> $nombre</p>";
    echo "<p><strong>Correo:</strong> $correo</p>";
    echo "<p><strong>Mensaje:</strong> $mensaje</p>";

} else {
    echo "<h2>No se envió ningún formulario.</h2>";
}

?>
