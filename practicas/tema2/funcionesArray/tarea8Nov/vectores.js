const boton1 = document.querySelector('#btnaniadirN')
const boton2 = document.querySelector('#btnaniadirB')
const boton3 = document.querySelector('#btnaniadirP')
const boton4 = document.querySelector('#btnEliminarN')
const boton5 = document.querySelector('#btnAniadirU')
const boton6 = document.querySelector('#btnEliminarS')
const boton7 = document.querySelector('#btnSlice')
const boton8 = document.querySelector('#btnJoin')
const boton9 = document.querySelector('#btnIncludes')
const boton10 = document.querySelector('#btnSort')
const boton11 = document.querySelector('#btnReverse')
const boton12 = document.querySelector('#btnMap')
const boton13 = document.querySelector('#btnReduce')
const boton14 = document.querySelector('#btnFilter')
const boton15 = document.querySelector('#btnSome')
const boton16 = document.querySelector('#btnEvery')
const boton17 = document.querySelector('#btnFind')
const boton18 = document.querySelector('#btnKeys')
const boton19 = document.querySelector('#btnValues')
const boton20 = document.querySelector('#btnEntry')


const vector1 = [2, 5, 2, 4, 6, 8, 9, 6];
const vector2 = ["paco", "lola", "pedro"];
const vector3 = [
  {
    titulo: 'Los lunes al sol',
    minutos: 120
  },
  {
    titulo: 'La delgada línea roja',
    minutos: 120
  },
  {
    titulo: "Bienvenido MrMarsall",
    minutos: 93
  }
]
window.addEventListener("DOMContentLoaded", inicio);

function inicio() {

  boton1.addEventListener('click',accion1)
  boton2.addEventListener('click',accion2)
  boton3.addEventListener('click',accion3)
  boton4.addEventListener('click',accion4)
  boton5.addEventListener('click',accion5)
  boton6.addEventListener('click',accion6)
  boton7.addEventListener('click',accion7)
  boton8.addEventListener('click',accion8)
  boton9.addEventListener('click',accion9)
  boton10.addEventListener('click',accion10)
  boton11.addEventListener('click',accion11)
  boton12.addEventListener('click',accion12)
  boton13.addEventListener('click',accion13)
  boton14.addEventListener('click',accion14)
  boton15.addEventListener('click',accion15)
  boton16.addEventListener('click',accion16)
  boton17.addEventListener('click',accion17)
  boton18.addEventListener('click',accion18)
  boton19.addEventListener('click',accion19)
  boton20.addEventListener('click',accion20)
}

function accion1() {
  let vectorC = vector1.slice()
  console.log('Antes del push: '+vectorC);
  let numR = generarNum(100)
  vector1.push(numR)
  console.log('Despues del push: '+vectorC);
}

function accion2() {
  let vectorC = vector2.slice()
  console.log('Antes del push: '+vectorC);
  let nombre = prompt('Indique el nombre que quiere añadir')
  vectorC.push(nombre)
  console.log('Despues del push: '+vectorC);
}

function accion3() {
  let vectorC = vector3.slice()
  console.log('Antes del push:');
  console.log(vectorC);
  let nombre = prompt('Indique el nombre de la pelicula que quiere añadir')
  let duracion = prompt('Indique la duracion de la pelicula que quiere añadir')
  vectorC.push({ titulo: nombre, duracion: duracion })
  console.log('Despues del push:');
  console.log(vectorC);
}

function accion4() {
  let vectorC = vector1.slice()
  console.log('Antes del push: '+vectorC);
  let borrado = vectorC.pop()
  console.log('Despues del push: '+vectorC);
  console.log('Numero borrado:'+ borrado)
}

function accion5() {
  let vectorC = vector1.slice()
  console.log('Antes del unshift: '+vectorC);
  let numR = generarNum(100)
  vectorC.unshift(numR)
  console.log('Despues del unshift: '+vectorC);
}

function accion6() {
  let vectorC = vector1.slice()
  console.log('Antes del shift: '+vectorC);
  vectorC.shift()
  console.log('Despues del shift: '+vectorC);
}

function accion7() {
  console.log('Antes del slice: '+vector1);
  let vectorC = vector1.slice(2,5)
  console.log('Despues del slice: '+vectorC);
}

function accion8() {
  let vectorC = vector1.slice()
  console.log('Antes del join: '+vectorC);
  console.log('Despues del join: '+vectorC.join(';'));
}

function accion9() {
  let vectorC = vector1.slice()
  console.log('Vector: '+vectorC);
  let nBus = Number(prompt('Introduzca el numero que quiere saber si esta en el vector'))
  console.log(vectorC.includes(nBus));
}

function accion10() {
  let vectorC = vector1.slice()
  console.log('Antes del sort: '+vectorC);
  let vectorCO = vector1.sort((a, b) => a - b)
  console.log('Despues del sort: '+ vectorCO);
}

function accion11() {
  let vectorC = vector1.slice()
  console.log('Antes del sort: '+vectorC);
  let vectorCO = vector1.sort((a, b) => a - b).reverse()
  console.log('Despues del sort: '+ vectorCO);
}

function accion12() {
  let vectorC = vector3.slice()
  console.log('Antes del map:');
  console.log(vectorC);
  let vectorCM = vectorC.map(pelicula=>pelicula.titulo)
  console.log('Despues del push:');
  console.log(vectorCM);
}

function accion13() {
  let vectorC = vector3.slice()
  let suma = 0
  let sumaTotal = vectorC.map(pelicula=>pelicula.minutos).reduce((suma, item) => suma + item)
  console.log(vectorC);
  console.log('Suma de todos las duraciones con reduce:');
  console.log(sumaTotal);
}

function accion14() {
  let vectorC = vector3.slice()
  let vectorCF = vectorC.filter(pelicula=>pelicula.minutos>100)
  console.log('Vector antes del filter:');
  console.log(vectorC);
  console.log('Vector despues del filter(duracion mayor a 100):');
  console.log(vectorCF);
}

function accion15() {
  let vectorC = vector1.slice()
  let num = Number(prompt('Indique el numero que quiera para ver si existen numeros menores a ese'))
  const hayMenores = vectorC.some(elemento => elemento < num)
  console.log('Vector antes del filter:');
  console.log(vectorC);
  console.log(hayMenores)
}

function accion16() {
  let vectorC = vector1.slice()
  let num = Number(prompt('Indique el numero que quiera para ver si todos los numeros son menores a ese'))
  const hayMenores = vectorC.every(elemento => elemento > num)
  console.log('Vector antes del filter:');
  console.log(vectorC);
  console.log(hayMenores)
}


function accion17() {
  let vectorC = vector3.slice()
  console.log(vectorC);
  let peliculaUser=prompt('Indique el titulo de la pelicula que busca')
  let aparicion = vectorC.find(pelicula=>pelicula.titulo.toUpperCase() == peliculaUser.toUpperCase())
  if (aparicion==undefined) {
    console.log('No existe');
  }else{
    console.log(aparicion);
  }
}

function accion18() {
  let vectorC = vector3.slice()
  console.log(vectorC);
  let vectorK = Object.keys(vectorC[0])
  console.log('Keys del vector:');
  console.log(vectorK);
}

function accion19() {
  let vectorC = vector3.slice()
  console.log(vectorC);
  let vectorV = Object.values(vectorC[0])
  console.log('Values de la primera pelicula del vector:');
  console.log(vectorV);
}

function accion20() {
  let vectorC = vector3.slice()
  let vectorCArray = Object.entries(vectorC[0])
  console.log(vectorC);
  console.log('Array con key:value de la primera pelicula de vector:');
  console.log(vectorCArray);
  
}


function generarNum(max) {
  const random = Math.floor(Math.random() * max + 1);
  return random;
  
}