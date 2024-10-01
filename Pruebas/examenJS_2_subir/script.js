window.addEventListener("load", inicio);

const nombres = [ "chirimoya", "ciruela", "fresa", "kiwi", "mandarina",
"melocoton", "melon", "naranja", "nectarina", "papaya", "peras", "piña", 
"platanos", "pomelos", "prunus", "sandias" ];

const precios = [3, 4, 2, 3, 5, 6, 2, 3, 1, 1, 3, 5, 6, 1, 3, 6 ];

const imagenes=["imagenes/chirimoya.PNG","imagenes/ciruela.PNG", "imagenes/fresa.PNG", "imagenes/kiwi.PNG",
"imagenes/mandarina.PNG", "imagenes/melocoton.PNG", "imagenes/melon.PNG", "imagenes/naranja.PNG",
"imagenes/nectarina.PNG", "imagenes/papaya.PNG", "imagenes/peras.PNG", "imagenes/piña.PNG", 
"imagenes/platanos.PNG", "imagenes/pomelos.PNG", "imagenes/prunus.PNG", "imagenes/sandias.PNG"];
//Declaro los objetos del DOM que voy a necesitar
let galeria = document.getElementById('galeria')
let tabla = document.getElementById('cesta')
let total = document.getElementById('total')
let precioTotal = 0

function inicio() {
    introducirImagenes()
}

function introducirImagenes() {
    let kg = 0
    let precioT = 0
    //Creo el bucle que crea las imagenes y textos tantos como mida el array de precios
    for (let i = 0; i < precios.length; i++) {
        let divFruta = document.createElement('div')
        let imagenFruta = document.createElement('img')
        imagenFruta.setAttribute('src',imagenes[i])
        divFruta.appendChild(imagenFruta)
        let nombre = document.createElement('p')
        nombre.textContent=nombres[i]
        let precio = document.createElement('p')
        precio.textContent='Precio: ' + precios[i]
        divFruta.appendChild(nombre)
        divFruta.appendChild(precio)
        divFruta.style.backgroundColor='gray'
        //Hago que al hacer click en el div lance el prompt
        divFruta.addEventListener('click',()=>{
            kg = prompt('¿Cuanto kg quiere?')
            console.log(kg)
            precioT = kg*precios[i]
            console.log(precioT)
            console.log(nombre.textContent)
            //Lo paso a un metodo que lo introduzca en la tabla
            introducirTabla(kg,precioT,nombre.textContent)
        })
        galeria.appendChild(divFruta)
    }
    
    function introducirTabla(kg,precio,nombre) {
        //Creo los elementos necesarios para introducir los datos en la tabla 
        let tr = document.createElement('tr')

        let td1 = document.createElement('td')
        td1.textContent=nombre
        let td2 = document.createElement('td')
        td2.textContent=kg
        let td3 = document.createElement('td')
        td3.textContent=precio
        let boton = document.createElement('button')
        boton.textContent='Eliminar'
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(boton)
        tabla.appendChild(tr)
        precioTotal=precioTotal+precio
        total.textContent='Total= ' + precioTotal
        //Le doy al boton del poder de eliminiar el registro de la tabla y tambien el precio en el total
        boton.addEventListener('click',()=>{
            tabla.removeChild(tr)
            precioTotal=precioTotal-precio
            total.textContent='Total= ' + precioTotal
        })

    }

}


