let btn_agregar = document.getElementById('btn_agregar');
let btn_sacar = document.getElementById('btn_sacar');
let lista = document.getElementById('lista');

let li = document.createElement('li');
btn_agregar.onclick = ()=>{
    
    li.innerHTML = "Nuevo li";
    lista.appendChild(li);


// let aa = lista.innerHTML;
// let bbb = aaa + "<li>HOla</li>"
// lista.innerHTML = bbb;

}

btn_sacar.onclick = ()=>{
    //lista.removeChild(li);
    let segundo = document.querySelector("#lista>li:nth-child(2)");
    lista.removeChild(segundo);
}


new WOW().init();