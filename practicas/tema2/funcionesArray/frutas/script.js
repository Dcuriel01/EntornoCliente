const frutas = [
    { nombre: 'patatas', precio: 3, stock: 500 },
    { nombre: 'manzanas', precio: 2, stock: 200 },
    { nombre: 'peras', precio: 1, stock: 100 },
    { nombre: 'plátanos', precio: 1.5, stock: 0 },
    { nombre: 'uvas', precio: 4, stock: 150 },
    { nombre: 'naranjas', precio: 2.5, stock: 250 },
    { nombre: 'piñas', precio: 5, stock: 0 },
    { nombre: 'kiwis', precio: 3.5, stock: 120 },
    { nombre: 'fresas', precio: 6, stock: 90 },
    { nombre: 'mangos', precio: 4.5, stock: 75 }
];
const contenedor = document.querySelector('.container')
const lista = document.createElement('ul')
contenedor.appendChild(lista)

//solo el listado de los nombres (map): 10
const nombreFrutas = frutas.map(fruta => fruta.nombre)

//listado de frutas sin existencias (filter) : 2
const frutasSinStock = frutas.filter(fruta => fruta.stock === 0).map(fruta => fruta.nombre)

//suma total del stock (reduce) :1485
let suma=0
const sumaTotal = frutas.map(fruta => fruta.stock).reduce((suma, item) => suma + item)

//media de precios (recduce): 3.3 . Primero el total de medio y luego 
//divides entre frutas.length
suma=0
const mediaPrecio = frutas.map(fruta => fruta.precio).reduce((suma, item) => suma + item)/frutas.length
//productos cuyo precio está por encima de la media (5)
// 1. Calcular la media de precios con reduce
suma=0
const mediaPrecio2 = frutas.map(fruta => fruta.precio).reduce((suma, item) => suma + item)/frutas.length
// console.log(mediaPrecio2)

// 2. Filtrar los productos que están por encima de la media 
const frutasMMediaP = frutas.filter(fruta => fruta.precio >= mediaPrecio2).map(fruta => fruta.nombre)

//productos cuyo stock está por debajo de la media
// 1. Calcular la media del stock con reduce
suma=0
const mediaStock = frutas.map(fruta => fruta.stock).reduce((suma, item) => suma + item)/frutas.length

// 2. Filtrar las frutas con stock por debajo de la media (148.5) filter
const frutasMMediaS = frutas.filter(fruta => fruta.stock <= mediaStock).map(fruta => fruta.nombre)

// nombre de frutas cuyo precio es mayor o igual a 5 euros (piña,fresa)  filter y map
const frutasM5 = frutas.filter(fruta => fruta.precio >= 5).map(fruta => fruta.nombre)


//Todos los mostrar
mostrar(nombreFrutas)
mostrar(frutasSinStock)
mostrarNum('Suma total de Stock',sumaTotal)
mostrarNum('Media de precio',mediaPrecio)
mostrar(frutasMMediaP)
mostrarNum('Media de stock',mediaStock)
mostrar(frutasMMediaS)
mostrar(frutasM5)


function mostrar(array) {
    array.forEach(fruta => {
        const li = document.createElement('li')
        li.textContent=`Nombre: ${fruta}`
        lista.appendChild(li)
    });
    const li = document.createElement('li')
    li.textContent=`-----------------------------------------`
    lista.appendChild(li)
}

function mostrarNum(dato,numero) {
    const li = document.createElement('li')
    li.textContent=`${dato}: ${numero}`
    lista.appendChild(li)
    const li2 = document.createElement('li')
    li2.textContent=`-----------------------------------------`
    lista.appendChild(li2)
}