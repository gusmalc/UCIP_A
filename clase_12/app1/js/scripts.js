let btn1 = document.getElementById('btn1');
let cardx = document.getElementById('cardx');

btn1.onclick = ()=>{
    fetch('elementos/card1.html')
    .then(res=> res.text() )
    .then(el =>{
        cardx.innerHTML = el;
    })
    .catch(err=>{
        console.log(err.message)
    });
}