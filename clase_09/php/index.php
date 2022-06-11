<?php 

$nombre = "Juan";
$apellido = "Perez";

$nombre = "Pedro";

$xx = "<h1>Tu apellido es: $apellido</h1>";

?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php include "elementos/menu.php"; ?>
    <h1>Hola <?php echo $nombre; ?></h1>

    <?php echo $xx; ?>
    
    


    <?php include "elementos/pie.php"; ?>
</body>
</html>