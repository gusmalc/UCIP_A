
let fichaO = `
<div class="fichaO" data-ocupada="1"></div>
`;
let fichaX = `
<div class="fichaX" data-ocupada="1"><div data-ocupada="1"></div></div>
`;

let valCasillas = [0,0,0,0,0,0,0,0,0];
let enJuego = false;
let turnoJugador = 1;
let ganador = 0;
let numJugada = 0;
let nom_jugador1 = "";
let nom_jugador2 = "";

let btn_nuevo = document.getElementById('btn_nuevo');
let btn_iniciar = document.getElementById('btn_iniciar');
let tablero = document.getElementById('tablero');
let turno = document.getElementById('turno');
let linea_ganador = document.getElementById('linea-ganador');
let datos_partido = document.getElementById('datos-partido');
let info_partido = document.getElementById('info-partido');
let info_ganador = document.getElementById('info-ganador');
let jugador1 = document.getElementById('jugador1');
let jugador2 = document.getElementById('jugador2');
let nom_ganador = document.getElementById('nom-ganador');
let muestra_ficha = document.getElementById('muestra_ficha');

btn_nuevo.addEventListener('click', nuevoPartido);
btn_iniciar.addEventListener('click', iniciaPartido);

tablero.addEventListener('click', (e)=>{
    let ocupada = e.target.dataset.ocupada;
    let valC = parseInt(e.target.dataset.ncasilla);
    if(ocupada == 0 && enJuego){
        if(turnoJugador == 1){            
            e.target.innerHTML = fichaX;
            e.target.dataset.ocupada = 1;
            valCasillas[valC] = 1;
            turnoJugador = 2;
            turno.innerHTML = nom_jugador2;
            muestra_ficha.innerHTML = fichaO;
        }else{            
            e.target.innerHTML = fichaO;
            e.target.dataset.ocupada = 1;
            valCasillas[valC] = 4;
            turnoJugador = 1;
            turno.innerHTML = nom_jugador1;
            muestra_ficha.innerHTML = fichaX;
        }
        numJugada++;
        controlaGanador();        
    }
});


function controlaGanador(){
    let tateti = [
        valCasillas[0]+valCasillas[1]+valCasillas[2],
        valCasillas[3]+valCasillas[4]+valCasillas[5],
        valCasillas[6]+valCasillas[7]+valCasillas[8],
        valCasillas[0]+valCasillas[3]+valCasillas[6],
        valCasillas[1]+valCasillas[4]+valCasillas[7],
        valCasillas[2]+valCasillas[5]+valCasillas[8],
        valCasillas[0]+valCasillas[4]+valCasillas[8],
        valCasillas[2]+valCasillas[4]+valCasillas[6]
    ];
    
    for (var i = 0; i < tateti.length; i++) {
        if(tateti[i]==3){
            muestraGanador(1);
            ganador = 1;
            break;            
        }
        if(tateti[i]==12){
           
           muestraGanador(2);
            ganador = 2;
            break;        
        }
    }
    if(numJugada==9 && ganador == 0){
        muestraGanador(0);
        
    }

}
function nuevoPartido(){
    cierraPartido();
    datos_partido.style.display = "block";
    valCasillas.forEach(function(v,i){
        valCasillas[i]=0;
    })
}

function iniciaPartido(){    
    nom_jugador1 = jugador1.value.trim();
    nom_jugador2 = jugador2.value.trim();
    if(nom_jugador1 != "" && nom_jugador2 != "" && nom_jugador1 != nom_jugador2){
        enJuego = true;
        turno.innerHTML = nom_jugador1;
        muestra_ficha.innerHTML = fichaX;
        turnoJugador = 1;
        datos_partido.style.display = "none";
        info_partido.style.display = "block";
    }
    
}

function muestraGanador(j){
    if(j==0){
        info_ganador.innerHTML = "<div id='empate'>EMPATE !</div>";
    }else{
        let ng = (j==1) ? nom_jugador1 : nom_jugador2;        
        nom_ganador.innerHTML = ng;        
    }
    info_partido.style.display = "none";
    info_ganador.style.display = "block";
    enJuego = false;
}

function cierraPartido(){
    info_partido.style.display = "none";
    info_ganador.style.display = "none";
    enJuego = false;
    ganador = 0;
    numJugada = 0;
    turno.innerHTML = "";
    let casillas = document.querySelectorAll("#tablero>div");
    casillas.forEach((el)=>{
        el.innerHTML = "";
        el.dataset.ocupada = 0;
    });
    nom_jugador1 = "";
    nom_jugador2 = "";
    jugador1.value = "";
    jugador2.value = "";
    nom_ganador.innerHTML = "";
    muestra_ficha.innerHTML = "";
}