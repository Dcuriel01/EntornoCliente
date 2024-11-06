const url = 'coches.json'
let coches = []
let cochesKm = []
let cochesMar = []
let cochesConsu = []
let cochesKm2 = []
let cochesMar2 = []
let cochesConsu2 = []
let lista = null
const contenedor = document.querySelector('.container')
const bKm = document.createElement('button')
bKm.textContent='Ordenar por Km'
bKm.classList= 'btn btn-danger margin'
const bMar = document.createElement('button')
bMar.textContent='Ordenar por Marca'
bMar.classList= 'btn btn-info margin'
const bConsu = document.createElement('button')
bConsu.textContent='Ordenar por Consumo'
bConsu.classList = 'btn btn-warning margin'
const bKm2 = document.createElement('button')
bKm2.textContent='Ordenar por Km 2'
bKm2.classList= 'btn btn-success margin'
const bMar2 = document.createElement('button')
bMar2.textContent='Ordenar por Marca 2'
bMar2.classList= 'btn btn-secondary margin 2'
const bConsu2 = document.createElement('button')
bConsu2.textContent='Ordenar por Consumo 2'
bConsu2.classList = 'btn btn-primary margin'




window.addEventListener('load',()=>{
    leerFichero()
    contenedor.appendChild(bKm)
    contenedor.appendChild(bMar)
    contenedor.appendChild(bConsu)
    contenedor.appendChild(bKm2)
    contenedor.appendChild(bMar2)
    contenedor.appendChild(bConsu2)

})





function leerFichero() {
    fetch(url)
    .then((response) => response.json())
    .then((datos) => ordenar(datos))
    .finally(() => console.log("Terminado."))
    .catch((error) => console.log(error));
}

function ordenar(data){

    data.forEach(coche => {
        coches.push(coche)
    });

    bKm.addEventListener('click',()=>{
        limpiar()
        cochesKm = coches.slice().sort((a, b) => a.kms - b.kms)
        mostrar(cochesKm)
        
    })

    bMar.addEventListener('click',()=>{
        limpiar()
        cochesMar = coches.slice().sort((a, b) => a.marca.localeCompare(b.marca))
        mostrar(cochesMar)
        
        
    })

    bConsu.addEventListener('click',()=>{
        limpiar()
        cochesConsu2 = coches.slice().sort((a, b) => a.consumo - b.consumo).reverse()
        mostrar(cochesConsu2)
    })

    bKm2.addEventListener('click',()=>{
        limpiar()
        cochesKm2 = coches.slice().sort((a, b) => a.kms - b.kms).reverse()
        mostrar(cochesKm2)
        
    })

    bMar2.addEventListener('click',()=>{
        limpiar()
        cochesMar2 = coches.slice().sort((a, b) => a.marca.localeCompare(b.marca)).reverse()
        mostrar(cochesMar2)
        
        
    })

    bConsu2.addEventListener('click',()=>{
        limpiar()
        cochesConsu2 = coches.slice().sort((a, b) => a.consumo - b.consumo)
        mostrar(cochesConsu2)
    })
}

function mostrar(array,) {
    array.forEach(coche => {
        const li = document.createElement('li')
        li.textContent=`Color: ${coche.color}, Marca: ${coche.marca}, Modelo: ${coche.modelo}, Consumo: ${coche.consumo}, Precio: ${coche.precio}, Kms: ${coche.kms}, Tipo motor: ${coche.tipoMotor},`
        lista.appendChild(li)
    });
}

function limpiar() {
    if(contenedor.querySelector('ol')!=null){
        contenedor.removeChild(contenedor.querySelector('ol'))
    };
    lista = document.createElement('ol')
    contenedor.appendChild(lista)
}