let btn_agregar = document.getElementById('btn_agregar');
let text1 = document.getElementById('text1');
let resultado = document.getElementById('resultado');

text1.value = "";
// window.onload = ()=>{
//     text1.value = "";
// }


let arr_num = [];

btn_agregar.onclick = ev =>{
    ev.preventDefault();
    let v = parseInt(text1.value);
    
    if(isNaN(v)){
        alert('Agregar solo numeros');
    }else{
        if(v==5){
            document.body.style.background = "#f00";
        }
        arr_num.push(v);
        console.log(arr_num);
        let nuevo_arr = arr_num.sort((a,b) => b-a);

        let t = "<ul>";
        nuevo_arr.forEach(el => {
            t += `
                <li>${el}</li>
            `
        });
        t += "</ul>";
        resultado.innerHTML = t;
        
    }
    text1.value = "";
}

// let a = 1;
// let b = "1";

// if(a===b){

// }else{

// }

// var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Ñiernes", "Sábado", "Domingo"];

// console.log(dias.sort());

// //arr.sort((a, b) => a.localeCompare(b, 'es', { ignorePunctuation: true }));

// console.log(dias.sort((a, b) => a.localeCompare(b, 'es', { ignorePunctuation: true })));