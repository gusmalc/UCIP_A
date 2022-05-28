"use strict";

let box1 = document.getElementById('box1');

//let h1 = document.getElementsByTagName('h1');

box1.onclick = function(){
    alert('pasa algo')
}

let resultado = document.querySelector('#resultado');
let box = document.querySelector('#box1');
let boxes = document.querySelectorAll('.box');

box.style.background = "#ccc";

boxes.forEach(el => {
    el.style.background = "#f00";
});


let arr = [1,2,3,4,5,6,7,8,9,];

resultado.innerHTML = arr[0];
let txt_html = "<ul>";
arr.forEach(function(x) {
    
    txt_html +=  `
    
    <li style="color: #f00">${x} - ${arr[0]}</li>
    
    `
});
txt_html += "</ul>";
resultado.innerHTML = txt_html;

// function sumar(a,b){
//     let c = a + b;
//     return c;
//     // alert(c);
// }

// let x = sumar(3,7);

// alert(x);


function hace_algo(){

}

let hace_algo = function(e){
    return e + 1;
}

let hace_algo = (s,d)=>{
    // codigo
}

let hacer_algo = e =>{
    return e + 1;
}

let hacer_algo2 = e => e + 1;