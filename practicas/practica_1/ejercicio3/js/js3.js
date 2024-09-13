window.onload=inicio;

function inicio(){
const lista = document.getElementById("semana")
let dias = lista.querySelectorAll("li")
for (let i = 0; i < dias.length; i++) {
    dias[i].style.color="blue"
    dias[i].style.fontSize ='40px'
}
const sabado = document.getElementById("itemSabado")
sabado.style.backgroundColor="green"

const domingo = document.getElementById("itemDomingo")
domingo.style.backgroundColor="red"

const edad = document.getElementById("edad")
edad.style.color="red"
}