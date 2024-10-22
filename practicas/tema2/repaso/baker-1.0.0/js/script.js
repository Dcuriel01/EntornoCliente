const urlPanaderos = 'getPanaderos.json'
const listaPanaderias = ["Jesus", "Almagro", "Julia", "Andalusi", "JoseAntonio", "el trigal"]
const listaEnlaces = ["panaderiajesus.com", "panalmagro.es",
    "panaderiasjulia.es", "panaderialaandalusi.com", "panaderiajoseantonio.com",
    "eltrigal.com"
]
window.addEventListener('load', inicio)

function inicio() {
    //Menu cambiado
    const div = document.querySelector('#navbarCollapse')
    const as = div.children[0].querySelectorAll('a')
    let i = 0
    for (const a of as) {
        a.setAttribute('href', 'http://' + listaEnlaces[i])
        a.textContent = listaPanaderias[i]
        i++
    }
    //Numeros autogenerados
    const numeros = document.querySelectorAll('.fact-item.bg-light.rounded.text-center.h-100.p-5')
    i = 0
    for (const num of numeros) {
        if (i == 0) {
            let n = generarNum(20);
            num.querySelector('h1').textContent=n
        } else if (i == 1) {
            let n = generarNum(200);
            num.querySelector('h1').textContent=n
        } else {
            let n = generarNum(2000);
            num.querySelector('h1').textContent=n
        }
        i++

    }

    fetch(urlPanaderos)
    .then((response) => response.json())
    .then((datos) => mostrarPanaderos(datos))
// .finally(() => alert("Terminado."))
// .catch((error) => alert(error));
    
}
//Cambiar panaderos
function mostrarPanaderos(datos) {
    const imgPanaderos = document.querySelectorAll('.team-item.text-center.rounded.overflow-hidden img')
    const infPanaderos = document.querySelectorAll('.team-title')
    datos.forEach((dato,i)=> {
        if (i<4) {
            imgPanaderos[i].setAttribute('src',dato.imagen)
            infPanaderos[i].querySelector('h5').textContent=dato.nombre
            infPanaderos[i].querySelector('span').textContent=dato.funcion
        }
    });
}
function generarNum(max) {
    const random = Math.floor(Math.random() * max)
    return random
}