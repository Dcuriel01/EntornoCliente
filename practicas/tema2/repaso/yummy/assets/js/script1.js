const urlPlatos = 'getPlatos.json'
const urlCocineros = 'getCocinero.json'
const listaPanaderias = ["Jesus", "Almagro", "Julia", "Andalusi", "JoseAntonio", "el trigal"]
const listaEnlaces = ["panaderiajesus.com", "panalmagro.es",
    "panaderiasjulia.es", "panaderialaandalusi.com", "panaderiajoseantonio.com",
    "eltrigal.com"
]
window.addEventListener('load', inicio)

function inicio() {
    //Menu cambiado
    const lista = document.querySelector('#navbar ul')
    const lis = lista.children
    let i = 0
    for (const li of lis) {
        li.firstElementChild.setAttribute('href', 'http://' + listaEnlaces[i])
        li.firstElementChild.textContent = listaPanaderias[i]
        i++
    }

    //Numeros autogenerados
    const numeros = document.querySelectorAll('.purecounter')
    i = 0
    for (const num of numeros) {
        if (i == 0) {
            let n = generarNum(20);
            num.setAttribute('data-purecounter-end', n)
        }else if(i == 1){
            let n = generarNum(200);
            num.setAttribute('data-purecounter-end', n)
        }else{
            let n = generarNum(2000);
            num.setAttribute('data-purecounter-end', n)
        }
        i++

    }
    //Cambiar platos
    fetch(urlPlatos)
    .then((response) => response.json())
    .then((datos) => mostrarPlatos(datos))
// .finally(() => alert("Terminado."))
// .catch((error) => alert(error));

    //Cambiar platos
    fetch(urlCocineros)
    .then((response) => response.json())
    .then((datos) => mostrarCocineros(datos))
// .finally(() => alert("Terminado."))
// .catch((error) => alert(error));


    
    

}
function mostrarPlatos(datos) {
    const platos = document.querySelectorAll('.col-lg-4.menu-item')
    datos.forEach((dato,i)=> {
        platos[i].children[0].firstElementChild.setAttribute('src',dato.imagen)
        platos[i].children[1].textContent=dato.nombre
        platos[i].children[2].textContent=dato.ingredientes
        platos[i].children[3].textContent=dato.precio
    });
}

function mostrarCocineros(datos) {
    const cocineros = document.querySelectorAll('.chef-member')
    console.log(cocineros)
    datos.forEach((dato,i)=> {
        if (i<4) {
            cocineros[i].children[0].firstElementChild.setAttribute('src',dato.imagen)
            cocineros[i].children[1].textContent=dato.nombre
            cocineros[i].children[2].textContent=dato.ingredientes
            cocineros[i].children[3].textContent=dato.precio
        }
        
    });
}


function generarNum(max) {
    const random = Math.floor(Math.random() * max)
    return random
}