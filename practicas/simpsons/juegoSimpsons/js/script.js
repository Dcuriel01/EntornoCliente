//Cada 2 seg cambia la imagen llamando a la funcion cargar imagenes
let temporidazor = setInterval(cargarImagenes, 2000);
//Contenedor de las imagenes
const cuerpo = document.body;
const cajaGallery = document.querySelector(".gallery");
const divMuestra = document.querySelector('.imagenMuestra')
const puntos = document.querySelector('#puntos')
let imagenMuestra = document.createElement('img')
const personajes = ['Toni','Chang','Ned','Homer','Marge',
'malospelos','Ken','Lisa','Krusty','Moe','Martin']

let pts = 0
let x = generarNum(personajes.length)
imagenMuestra.setAttribute('src',"img/" + x + ".JPG")
divMuestra.appendChild(imagenMuestra)

function cargarImagenes() {
  //Funcion que resetea la caja
  limpiarCaja();
  //Creamos las imagenes
  for (let index = 0; index < 10; index++) {
    let imagenX = document.createElement('img')
    let num = generarNum(personajes.length)
    imagenX.setAttribute('src',"img/" + num + ".JPG")
    cajaGallery.appendChild(imagenX);
    imagenX.addEventListener('click',()=>{
        if (x==num) {
            pts ++ 
        }else{
            pts --
        }
        num = generarNum(personajes.length)
        imagenX.setAttribute('src',"img/" + num + ".JPG")
        puntos.textContent='Puntos: ' + pts
    })
  }
}

function limpiarCaja() {
  //El while para cuando no exista ningun child en cajaGallery
  while (cajaGallery.firstChild) {
    cajaGallery.removeChild(cajaGallery.firstChild);
  }
}

function generarNum(max) {
  const random = Math.floor(Math.random() * max);
  return random;
}
