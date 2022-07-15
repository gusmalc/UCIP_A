<?php include "contacto.php";  ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="css/estilos.css">

</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <form action="#" method="post">
                    <input type="hidden" name="aaa" value="Primavera">
                    <div class="mb-3">
                        <label for="nombre" class="form-label">Nombre</label>
                        <input name="nombre" type="texto" class="form-control" id="nombre" placeholder="nombre" required>
                    </div>

                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input name="email" type="email" class="form-control" id="email" placeholder="email" required>
                    </div>

                    <div class="mb-3">
                        <label for="telefono" class="form-label">Tel&eacute;fono</label>
                        <input name="telefono" type="text" class="form-control" id="telefono" placeholder="Tel&eacute;fono">
                    </div>

                    <div class="mb-3">
                        <label for="asunto" class="form-label">Asunto</label>
                        <input name="asunto" type="text" class="form-control" id="asunto" placeholder="name@example.com">
                    </div>
                    <div class="mb-3">
                        <label for="consulta" class="form-label">Consulta</label>
                        <textarea name="consulta" class="form-control" id="consulta" rows="3"></textarea>

                    </div>

                    <button type="submit" class="btn btn-primary" required>ENVIAR</button>


                </form>
            </div>

            <div class="col-md-6">
            <?php if($GLOBALS['enviado']=="si"){  ?>


            <div class="alert alert-primary" role="alert">
                Gracias por tu consulta.
            </div>

            <?php   } ?>



            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>

</html>