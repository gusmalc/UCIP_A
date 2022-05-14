let nombre = "Juan";
const edad = 25;
let estudia = true;


//console.log(typeof nombre);
//alert(nombre);
//console.log(nombre);

//let nombre = "aaa";



let materias = ["Ingles", "Matemtica", "Fisica", "Lengua"];

//console.log(materias);
//console.log(materias.length);


let estudiantes = {
    nombre: "Juan",
    edad: 25,
    materias: ["Ingles", "Matemtica", "Fisica", "Lengua"],
    saluda: function(){
        return "Hola soy Juan";
    }
}

// console.log(estudiantes.nombre);
// console.log(estudiantes.materias[0]);

// console.log(estudiantes.saluda());

// function encadena(a,b) {
//     console.log(a+b);
// }

function encadena(a,b) {
    return a + b;
}
let aa = encadena("Hola ", "Mundo");
console.log(aa);