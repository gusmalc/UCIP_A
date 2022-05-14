let defs = {
    def1: "Inicio Marzo 2023 - $80000",
    def2: "Inicio Marzo 2024 - $180000",
    def3: "Inicio Diciembre 2023 - $5000"
}
//defs[def1];

const box_botones = document.getElementById('box_botones');
const resultado = document.getElementById('resultado');

box_botones.addEventListener('click', function(e){
    let d = e.target.dataset.def;
    let df = defs[d];
    let i = e.target.dataset.img;
    resultado.innerHTML = `
    <h1>${df}</h1>
    <h3>Te esperamos !</h3>
    <img style="width: 100%" src="${i}" />
    
    `;
    //alert(d);
})