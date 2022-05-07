let nombre = "Pedro";
let edad = 25;
let aprobo = true; // false
let materias = ['Ingles','Fisica'];

let estudiante = {
    nombre: "Pedro",
    edad: 25,
    aprobo: true,
    materias: ['Ingles','Fisica'],
    saluda: function(){
        return "Hola soy Pedro"
    }
}

let a = 1;
let b = "5.5";

function suma(x,y){
    let s = x + parseFloat(y);
    
    alert(s);
}

//suma(a,b);
//suma(4,8);

// gestor de evento

const btn_1 = document.getElementById('btn_1');
const respuesta = document.getElementById('respuesta');
const btn_form = document.getElementById('btn_form');

btn_1.addEventListener('click',function(){
    //alert('Soy el bnt_1');
    respuesta.innerHTML = "<h2>Hola Mundo</h2>";
    btn_form.style.display = "none";
});