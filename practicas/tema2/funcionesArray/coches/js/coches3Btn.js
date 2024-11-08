const url = 'coches.json'
let coches = []
let cochesKm = []
let cochesMar = []
let cochesConsu = []
let lista = null
let kmPulsado = false
let marPulsado = false
let consuPulsado = false
const contenedor = document.querySelector('.container')
const bKm = document.createElement('button')
bKm.textContent='Ordenar por Km <'
bKm.classList= 'btn btn-info margin'
const bMar = document.createElement('button')
bMar.textContent='Ordenar por Marca <'
bMar.classList= 'btn btn-info margin'
const bConsu = document.createElement('button')
bConsu.textContent='Ordenar por Consumo <'
bConsu.classList = 'btn btn-info margin'




window.addEventListener('load',()=>{
    leerFichero()
    contenedor.appendChild(bKm)
    contenedor.appendChild(bMar)
    contenedor.appendChild(bConsu)

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
        if (kmPulsado) {
            cochesKm = coches.slice().sort((a, b) => a.kms - b.kms).reverse()
            mostrar(cochesKm)
            kmPulsado=false
            bKm.classList= 'btn btn-info margin'
            bKm.textContent='Ordenar por Km <'
        }else{
            cochesKm = coches.slice().sort((a, b) => a.kms - b.kms)
            mostrar(cochesKm)
            kmPulsado=true
            bKm.classList= 'btn btn-danger margin'
            bKm.textContent='Ordenar por Km >'
        }
    })

    bMar.addEventListener('click',()=>{
        limpiar()
        if (marPulsado) {
            cochesMar = coches.slice().sort((a, b) => a.marca.localeCompare(b.marca)).reverse()
            mostrar(cochesMar)
            marPulsado=false
            bMar.classList= 'btn btn-info margin'
            bMar.textContent='Ordenar por Marca <'
        }else{
            cochesMar = coches.slice().sort((a, b) => a.marca.localeCompare(b.marca))
            mostrar(cochesMar)
            marPulsado=true
            bMar.classList= 'btn btn-danger margin'
            bMar.textContent='Ordenar por Marca >'
        }
        
    })

    bConsu.addEventListener('click',()=>{
        limpiar()
        if (consuPulsado) {
            cochesConsu = coches.slice().sort((a, b) => a.consumo - b.consumo).reverse()
            mostrar(cochesConsu)
            consuPulsado=false
            bConsu.classList = 'btn btn-info margin'
            bConsu.textContent='Ordenar por Consumo <'
        }else{
            cochesConsu = coches.slice().sort((a, b) => a.consumo - b.consumo)
            mostrar(cochesConsu)
            consuPulsado=true
            bConsu.classList = 'btn btn-danger margin'
            bConsu.textContent='Ordenar por Consumo >'
        }
    })
}

function mostrar(array) {
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