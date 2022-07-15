let dp_btn_hamb2 = document.getElementById('dp_btn_hamb2');
let menu = document.getElementById('menu');
let dp_btn_hamb2_div = document.querySelector('#dp_btn_hamb2>div');
dp_btn_hamb2.addEventListener('click', function(){
    dp_btn_hamb2_div.classList.toggle("dp-btn-close1");
    menu.classList.toggle("ver_menu");     
});