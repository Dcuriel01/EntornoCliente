//Declaro todo lo necesario para el ejercicio
const urlJson = 'coches.json'
const body = document.querySelector('body')
const volfVerdes = []
const mayorAMedia = []
let cocheMasBarato
let cocheMasKm
let mediaKm = 0
let mediaPrecio = 0
let Red = 0
let Blue = 0
let Green = 0
let Black = 0
let White = 0
let Silver = 0
let Yellow = 0
let Gray = 0
window.addEventListener('click', inicio())
function inicio() {
    //Leo el fichero Json
    fetch(urlJson)
        .then((response) => response.json())
        .then((datos) => ordenar(datos))
        .finally(() => console.log("Terminado."))
        .catch((error) => console.log(error));

    //Trabajo con los datos que leo
    function ordenar(datos) {
        //Genero las medias
        calcularMedias(datos)
        datos.forEach(dato => {
            //Busco el primer objetivo
            if (encontrarVVerde(dato)) {
                volfVerdes.push(dato)
            }
            //busco el segundo objetivo
            if (mayorAlaMedia(dato)) {
                mayorAMedia.push(dato)
            }
            //Sumo los colores de cada coche para llevar la cuenta
            sumarColor(dato.color)
        });
        //Busco el tercer objetivo
        cocheMasKm = cocheMasKm(datos)
        //Busco el cuarto Objetivo
        cocheMasBarato = cocheMasBarato(datos)
        //Pinto todos los objetivos buscados
        pintarVolfVerde()
        pintarMayorAMedia()
        pintarCocheMasKm(cocheMasKm)
        pintarCocheMasBarato(cocheMasBarato)
        pintarColorMasUsado()

    }
    
    function calcularMedias(datos) {
        //Genero las medias sumando los datos de cada coche y dividiendo por el numero de coches
        let sumaKm = 0
        let sumaPrecio = 0
        datos.forEach(dato => {
            sumaKm = sumaKm + Number(dato.kms)
            sumaPrecio = sumaPrecio + Number(dato.precio)
        });
        mediaKm = sumaKm / datos.length
        mediaPrecio = sumaPrecio / datos.length
    }


    function encontrarVVerde(coche) {
        //Busco el coche preguntando si cumple los valores indicados
        let coincide = true
        if (coche.color != 'Green') {
            coincide = false
        } if (coche.consumo > 7) {
            coincide = false
        } if (coche.marca != 'Volkswagen') {
            coincide = false
        } if (coche.precio < 25000) {
            coincide = false
        }
        return coincide
    }

    function mayorAlaMedia(dato) {
        //Compruebo con las medias anteriormente generada
        let coincide = true
        if (dato.precio < mediaPrecio) {
            coincide = false
        }
        if (dato.kms < mediaKm) {
            coincide = false
        }
        return coincide
    }

    function sumarColor(color) {
        //Sumo uno al color que nos llega
        switch (color) {
            case 'Red':
                Red++
                break;
            case 'Blue':
                Blue++
                break;
            case 'Green':
                Green++
                break;
            case 'Black':
                Black++
                break;
            case 'White':
                White++
                break;
            case 'Silver':
                Silver++
                break;
            case 'Yellow':
                Yellow++
                break;
            case 'Gray':
                Gray++
                break;
        }
    }

    function cocheMasKm(datos) {
        //Voy almacenando el coche con mas km y comparando con el siguiente
        let cocheMasKm = datos[0]
        datos.forEach(coche => {
            if (coche.kms > cocheMasKm.kms) {
                cocheMasKm = coche
            }
        });
        return cocheMasKm
    }

    function cocheMasBarato(datos) {
        //Voy almacenando el menor precio y comparandolo con el siguiente
        let cocheMasBarato = datos[0]
        datos.forEach(coche => {
            if (coche.precio < cocheMasBarato.precio) {
                cocheMasBarato = coche
            }
        });
        return cocheMasBarato
    }


    //Todas las funciones pintar
    function pintarVolfVerde() {
        const h3 = document.createElement('h3')
        h3.textContent = 'Coches verdes de la marca Volkswagen  que consuman menos de 7 litros y que valgan más de 25.000 euros'
        body.appendChild(h3)
        volfVerdes.forEach(coche => {
            const p = document.createElement('p')
            p.textContent = coche.marca + ' ' + coche.modelo
            body.appendChild(p)
        });
    }

    function pintarMayorAMedia() {
        const h3 = document.createElement('h3')
        h3.textContent = 'Coches con mas Km de la media y mas precio de la media'
        body.appendChild(h3)
        mayorAMedia.forEach(coche => {
            const p = document.createElement('p')
            p.textContent = coche.marca + ' ' + coche.modelo
            body.appendChild(p)
        });
    }

    function pintarCocheMasKm(coche) {
        const h3 = document.createElement('h3')
        h3.textContent = 'Coche mas Km'
        body.appendChild(h3)
        const p = document.createElement('p')
        p.textContent = coche.marca + ' ' + coche.modelo + ' ' + coche.color + ' ' + coche.precio + ' ' + coche.kms +
            ' ' + coche.consumo + ' ' + coche.tipoMotor
        body.appendChild(p)
    }

    function pintarCocheMasBarato(coche) {
        const h3 = document.createElement('h3')
        h3.textContent = 'Coche mas barato'
        body.appendChild(h3)
        const p = document.createElement('p')
        p.textContent = coche.marca + ' ' + coche.modelo + ' ' + coche.color + ' ' + coche.precio + ' ' + coche.kms +
            ' ' + coche.consumo + ' ' + coche.tipoMotor
        body.appendChild(p)
    }

    function pintarColorMasUsado() {
        let colores = [Red, Blue, Green, Black, White, Silver, Yellow, Gray]
        let nombreMasUsado 
        colores.sort((a, b) => a - b)
        if (colores[colores.length-1]==Red) {
            nombreMasUsado='Red'
        }else if(colores[colores.length-1]==Blue){
            nombreMasUsado='Blue'
        }else if(colores[colores.length-1]==Green){
            nombreMasUsado='Green'
        }else if(colores[colores.length-1]==Black){
            nombreMasUsado='Black'
        }else if(colores[colores.length-1]==White){
            nombreMasUsado='White'
        }else if(colores[colores.length-1]==Silver){
            nombreMasUsado='Silver'
        }else if(colores[colores.length-1]==Yellow){
            nombreMasUsado='Yellow'
        }else if(colores[colores.length-1]==Gray){
            nombreMasUsado='Gray'
        }
        const h3 = document.createElement('h3')
        h3.textContent = 'Color mas usado'
        body.appendChild(h3)
        const p = document.createElement('p')
        p.textContent = nombreMasUsado + ' con ' + colores[colores.length-1] + ' repeticiones' 
        
        body.appendChild(p)
    }
}

