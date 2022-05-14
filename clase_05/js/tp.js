const btn_borrar = document.getElementById('btn_borrar');
const resultado = document.getElementById('resultado');
const textarea1 = document.getElementById('textarea1');

textarea1.addEventListener('input', function(e){
    resultado.innerHTML = textarea1.value ;
});

btn_borrar.addEventListener('click', function(ev){
    resultado.innerHTML = "";
    textarea1.value = "Inicia a escribir";
})
