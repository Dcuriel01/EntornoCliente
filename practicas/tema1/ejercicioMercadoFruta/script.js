window.addEventListener("load", inicio);

const nombres = [ "chirimoya", "ciruela", "fresa", "kiwi", "mandarina",
"melocoton", "melon", "naranja", "nectarina", "papaya", "peras", "piña", 
"platanos", "pomelos", "prunus", "sandias" ];

const precios = [3, 4, 2, 3, 5, 6, 2, 3, 1, 1, 3, 5, 6, 1, 3, 6 ];

const imagenes=["imagenes/chirimoya.PNG","imagenes/ciruela.PNG", "imagenes/fresa.PNG", "imagenes/kiwi.PNG",
"imagenes/mandarina.PNG", "imagenes/melocoton.PNG", "imagenes/melon.PNG", "imagenes/naranja.PNG",
"imagenes/nectarina.PNG", "imagenes/papaya.PNG", "imagenes/peras.PNG", "imagenes/piña.PNG", 
"imagenes/platanos.PNG", "imagenes/pomelos.PNG", "imagenes/prunus.PNG", "imagenes/sandias.PNG"];

//Identificamos la galeria de imagens,nombre,precio
const galeria = document.querySelector('#galeria');
//Identificar la tabla,carrito
const carrito = document.querySelector('#cesta');
//identificar el primer tr (se corresponde con la cabecera)
let encabezado=carrito.querySelector("tr");
//identificar el rótulo del precio total
const precio = document.querySelector('#total');
//nuevo th para el precio parcial 
let precioParcialTh=document.createElement("th");
precioParcialTh.textContent="Precio_total";
//añadir el nuevo th al encabezado de la tabla
encabezado.appendChild(precioParcialTh);
//añadir el encabezado del botón de eliminar una fruta
let botonEliminar=document.createElement("th");
botonEliminar.textContent="Eliminar";
encabezado.appendChild(botonEliminar);
//precio total
let precioTotal=0;

//Rellenamos la galeria
function inicio(){

   

    for(let i=0;i<imagenes.length;i++){
       //contenedor de fondo gris : imágenes, precio y nombrs
        const contenedorProducto  = document.createElement('div');
        contenedorProducto.style.backgroundColor = "grey";
        //Dentro de contenedorProducto creamos las imagenes,precio y nombres
        galeria.appendChild(contenedorProducto);
        let imgFruta = document.createElement('img');
        imgFruta.setAttribute("src",imagenes[i]);
        imgFruta.setAttribute("alt",nombres[i]);
        //imgFruta.setAttribute("value",precios[i]);
        imgFruta.value=precios[i];
        contenedorProducto.appendChild(imgFruta);
        //Creamos un parrafo para introducir nombre y precio
        const pFruta= document.createElement('p');
        pFruta.textContent=nombres[i];
        contenedorProducto.appendChild(pFruta);
        //precio
        const pPrecioFruta = document.createElement('p');
        pPrecioFruta.textContent = precios[i];
        contenedorProducto.appendChild(pPrecioFruta);
         //precio Parcial
         const precioParcial=document.createElement('p')
        //Le ponemos un evento a las imagenes
        //imgFruta.addEventListener('click',comprar);
        imgFruta.onclick = comprar;

    }

}

function comprar(objetoimg){
    //mensaje emergente para añadir peso
let peso=prompt("teclea el peso de "+objetoimg.target.alt)
//crear una nueva fila (tr) de la tabla con el nuevo producto (añadir a carrito)
const fila=document.createElement("tr");
carrito.appendChild(fila);
//hay que crear tantos td como columnas tenga la tabla
//nombre, peso, precio_unitario, precio_parcial, botonEliminar
const celdaNombre=document.createElement("td");
celdaNombre.textContent=objetoimg.target.alt;
fila.appendChild(celdaNombre);
//añadir peso
const celdaPeso=document.createElement("td");
celdaPeso.textContent=peso;
fila.appendChild(celdaPeso);
//precio unitario
const celdaPrecio=document.createElement("td");
celdaPrecio.textContent=objetoimg.target.value + " €";
fila.appendChild(celdaPrecio);
//precio parcial
const celdaPrecioParcial=document.createElement("td");
celdaPrecioParcial.textContent=parseInt(peso)*parseInt(objetoimg.target.value) + " €";
fila.appendChild(celdaPrecioParcial);
//botón Eliminar
const celdaEliminar=document.createElement("td");
const btnEliminar=document.createElement("button");
btnEliminar.textContent="Quitar cesta "+celdaNombre.textContent;
//crear el evento de eliminar
btnEliminar.onclick=eliminarProductoCesta;
celdaEliminar.appendChild(btnEliminar);
fila.appendChild(celdaEliminar);
//acumular el precio parcial al total
precioTotal+=parseInt(peso)*parseInt(objetoimg.target.value) ;
precio.textContent="";
precio.textContent="Total= "+precioTotal+ " €"
}



function eliminarProductoCesta(objetoEliminar){
   alert(objetoEliminar.target);
}
