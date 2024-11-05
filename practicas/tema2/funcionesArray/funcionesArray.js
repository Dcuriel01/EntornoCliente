// //Declaro el array
// const alumnos = [{ nombre: 'Lola', nota: 9 }, { nombre: 'Lolo', nota: 5 }]
// //Muestro su longitud
// console.log('Longitud array = ' + alumnos.length)
// //Añado dos mas 
// alumnos.push({ nombre: 'Petra', nota: 10 },{  nombre: 'Paco',  nota: 5})
// //Muestro de nuevo la longitud
// console.log('Longitud array = ' + alumnos.length)

// //pop() : elimina el último elemento del array y lo puede devolver
// let vector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
// console.log('Vector completo: ' +vector);
// let elemetoBorrado = vector.pop()
// console.log('Vector despues de pop: ' +vector);
// console.log('Elemento borrado: ' + elemetoBorrado)


// //unshift(item1,item2...): añade uno o más elementos al comienzo del array
// const arboles = [ { nombre: 'encina', altura: 10 }, { nombre: 'chopo', altura: 30 }] 
// console.log(arboles)
// arboles.unshift({ nombre: 'pino', altura: 25 })
// console.log(arboles)


// let vector2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(vector2)
// const primero = vector2.shift()
// console.log(vector2)


// const vector=[8,5,4,9,22,1]
// console.log(vector.sort());
// console.log(vector.sort().reverse());

// const letras=['D','A','R','S','M']
// console.log(letras.sort());
// console.log(letras.sort().reverse());

// console.log(vector.sort((a, b) => a - b));

const fruta = 
[{ nombre: 'naranja', precio: 4 , stock: 6300 }, 
{ nombre: 'manzanas', precio: 2 , stock: 2000},
{ nombre: 'kiwi', precio: 3 , stock: 4500}] 
const listadoPorPrecio = fruta.sort((a, b) => a.precio - b.precio)
const listadoPorStock = fruta.sort((a, b) => a.stock - b.stock)
console.log(listadoPorPrecio);
console.log(listadoPorStock)

