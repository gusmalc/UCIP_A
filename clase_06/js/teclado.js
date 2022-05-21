let colorx = document.getElementById('colorx');
let teclado = document.getElementById('teclado');
let btn_borrar = document.getElementById('btn_borrar');
let dx = document.getElementById('dx');
btn_borrar.style.display = "none";
let txt_color = "";
let clics = 0;
teclado.addEventListener('click', function(e){
    
if(e.target.id != "teclado"){
    if(clics < 6){
        let obj = e.target;
    txt_color += obj.innerHTML;
    clics += 1;
    colorx.innerHTML = "# " + txt_color;
    }
    if(clics == 6){
        btn_borrar.style.display = "block";
        dx.style.background = "#" + txt_color;
    }
    
}

btn_borrar.addEventListener('click', function(e){
    clics = 0;
    txt_color = "";
    colorx.innerHTML = "#222222";
    btn_borrar.style.display = "none";
    dx.style.background = "#222222";
})

    
})