let menu = document.getElementById('menu');
let pagina = document.getElementById('pagina');

menu.addEventListener('click', (e)=>{
    if(e.target.id != "menu"){
        let el = e.target;
        let np = el.dataset.pag;
        cargar_pagina(np);
    }
   
})


function cargar_pagina(p){
    let url = "paginas/" + p;
    fetch(url)
    .then((res)=>{
        return res.text();
    })
    .then(el =>{
        pagina.innerHTML = el;
    })
    .catch(err=>{
        console.log(err.message)
    });
}


cargar_pagina('home.html');