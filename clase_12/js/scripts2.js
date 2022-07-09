let btn_carga = document.querySelector('#btn_carga');
let app = document.querySelector('#app');
let titulo = document.querySelector('#titulo');


btn_carga.addEventListener('click', ()=>{
    cargar_lista('https://jsonplaceholder.typicode.com/users');
});


function cargar_lista(url){


    fetch(url)
    .then((res)=>{
        return res.json();
    })
    .then(el =>{
        crear_lista(el);
    })
    .catch(err=>{
        console.log(err.message)
    });

}

function crear_lista(ll){

    let lista = `
    <table class="table table-dark table-hover"> 
    <thead>
    <tr> 
        <th>ID</th>
        <th>Nombre</th>
        <th>Email</th>
    </tr>
    </thead>
    <tbody>
    `

    ll.forEach(el => {
        
        lista += `
        
        <tr id="${el.id}" onclick="cargar_ficha(this)"> 
            <td>${el.id}</td>
            <td>${el.name}</td>
            <td>${el.email}</td>
        </tr>
        
        `
    });

    lista += `
    </tbody> 
    </table>
    `

    app.innerHTML = lista;


}


function cargar_ficha(oh){
    let idx = oh.id;
    
    let url = `https://jsonplaceholder.typicode.com/users/${idx}`;
    fetch(url)
    .then((res)=>{
        return res.json();
    })
    .then(el =>{
        crear_ficha(el);
    })
    .catch(err=>{
        console.log(err.message)
    });
}

function crear_ficha(usr){
    let htm = `
    <h1>${usr.name}</h1>
    <p>Telefono: ${usr.phone}</p>
    <p>Ciudad: ${usr.address.city}</p>
    
    
    `;
    app.innerHTML = htm;
    titulo.innerHTML = "Ficha Usuario";
}