let ini_partido = document.getElementById('ini_partido');
let tablero = document.getElementById('tablero');
let total1 = document.getElementById('total1');
let total2 = document.getElementById('total2');
let ganador = document.getElementById('ganador');
let casillas = document.querySelectorAll('.casilla');

let en_juego = 0;
let turno = 1;
let suma1 = 0;
let suma2 = 0;

ini_partido.addEventListener('click', nuevo_partido);
tablero.addEventListener('click', jugada);

let arr_vals = [];
function nuevo_partido(){
 
 if(en_juego == 0){
    for (let i = 0; i < 4; i++) {     
        let n = Math.floor((Math.random() * 10) + 1);
        arr_vals.push(n);
    }
 }

 let nn = 0
casillas.forEach(e => {
    
    e.dataset.val = arr_vals[nn];
    console.log(arr_vals[nn]);
    nn++;
});

 
 en_juego = 1;
 
}

function jugada(e){
    let x = e.target.dataset.val;
    if(e.target.id != 'tablero'){
        // alert(x);
        e.target.innerHTML = x;
        if(turno==1){
            suma1 += parseInt(x);
            total1.innerHTML = suma1;
            turno = 2;
        }else{
            suma2 += parseInt(x);
            total2.innerHTML = suma2;
            turno = 1;
        }
    }
    
}