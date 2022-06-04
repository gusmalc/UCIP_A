let btn1 = document.getElementById('btn1');
let titulo1 = document.getElementById('titulo1');


// window.onload = ()=>{
    
// }


let innTit1 = titulo1.innerHTML;

setTimeout(() => {
    btn1.classList.add('rotar');
}, 4000);

let letras = ['a','r','i','a','b','l','e','s', ' ', 'C','S','S'];
let colores = ['#f00','#ff0','#f00025','#f002589','#f00257','#f02444','#f00aaa','#f00222', '#f00255 ', '#f00','#00f','#ff0'];

let nint = 0;
let inter = setInterval(function(){    
    // codigo
    innTit1 += letras[nint];
    titulo1.innerHTML = innTit1;
    // if(nint%2 == 0){
    //     document.body.style.background = "#f00";
    // }else{
    //     document.body.style.background = "#0f0";
    // }

    document.body.style.background = colores[nint];


    nint++;
    if(nint==12){
        clearInterval(inter);
        nint = 0;
    }
}, 300);




// el.style.cssText = "background-color: black; color: white;";
// el.style.border = "#000 solid 2px";
// el.classList.add("clase1", "clase2");
// el.classList.remove("clase");
// el.classList.toggle("clase");
// document.getElementById("estilo").href = "css/estilosjs.css";