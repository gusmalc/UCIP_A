<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <link href='https://res.webserver.ar/img/dn_ico.png' rel='shortcut icon' type='image/png'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TA-TE-TI</title>
    
    <link rel='stylesheet' href='css/tateti.css?a=<?php echo time(); ?>'>
</head>
<body>

    
        <div id="app">    
            <div id="info" class="dp-container">
                <div>
                    <h1>TA-TE-TI 1.0.0</h1>
                </div>
                <div id="btns">
                    <button id="btn_nuevo" class="btn">NUEVO PARTIDO</button>
                </div>
                <div id="info-partido">
                    <div>Turno: </div>
                    <div id="turno"></div>
                    <div id="muestra_ficha"></div>
                </div>
                <div id="datos-partido">
                    <br>
                    <div class="dp-input">
                        <label for="jugador1">Nombre jugador 1</label>
                        <input type="text" name="" id="jugador1">
                    </div>
                    <br>
                    <div class="dp-input">
                        <label for="jugador2">Nombre jugador 2</label>
                        <input type="text" name="" id="jugador2">
                    </div>
                    <br>
                    <button id="btn_iniciar" class="btn">INICIAR PARTIDO</button>
                </div>
                <div id="info-ganador">
                    <div>Gana:</div>
                    <div id="nom-ganador"></div>
                </div>
                
            </div>
            <div id="juego" class="dp-container">
                    <div id="fondo-tablero">
                        <div id="tablero">
                            <div class="casillas" data-ncasilla="0" data-ocupada="0"></div>
                            <div class="casillas" data-ncasilla="1" data-ocupada="0"></div>
                            <div class="casillas" data-ncasilla="2" data-ocupada="0"></div>
                            <div class="casillas" data-ncasilla="3" data-ocupada="0"></div>
                            <div class="casillas" data-ncasilla="4" data-ocupada="0"></div>
                            <div class="casillas" data-ncasilla="5" data-ocupada="0"></div>
                            <div class="casillas" data-ncasilla="6" data-ocupada="0"></div>
                            <div class="casillas" data-ncasilla="7" data-ocupada="0"></div>
                            <div class="casillas" data-ncasilla="8" data-ocupada="0"></div>
                        </div>
                        <div id="linea-ganador"></div>
                    </div>
            </div>
        </div>

            

        </div>
    </div>


    
    <script src='js/tateti.js?a=<?php echo time(); ?>' charset='utf-8'></script>
</body>
</html>