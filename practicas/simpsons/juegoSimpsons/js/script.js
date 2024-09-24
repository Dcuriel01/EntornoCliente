//Declaro todos los elemtos del html que uso
const cuerpo = document.body
const cajaGallery = document.querySelector('.gallery')
const divMuestra = document.querySelector('.imagenMuestra')
const puntos = document.querySelector('#puntos')
const tiempo = document.querySelector('#crono')
const boton = document.querySelector('#boton')
//Declaro todas las variables que necesito
let temporizador
let imagenMuestra = document.createElement('img')
let pts=0
let x
let pts10=0
//Funcion del boton
boton.addEventListener('click',()=>{
    boton.style.visibility='hidden'
    pts = 0
    x = generarNum(20)
    imagenMuestra.setAttribute('src',"img/" + x + ".JPG")
    divMuestra.appendChild(imagenMuestra)
    temporizador = setInterval(cargarImagenes,2000)
    cronometro()
})

function cargarImagenes() {
    limpiarCaja()
    for (let i = 0; i < 10; i++) {
        let imagenX = document.createElement('img')
        let num = generarNum(20)
        imagenX.setAttribute('src',"img/"+num+".JPG")
        cajaGallery.appendChild(imagenX)
        imagenX.addEventListener('click',()=>{
            if (x==num) {
                pts++
                pts10++
                //Este if sirve para cambiar la foto de muestra a los 10 aciertos
                if (pts10==10) {
                    pts10=0
                    x = generarNum(20)
                    imagenMuestra.setAttribute('src',"img/" + x + ".JPG")
                }
            }else{
                pts--
            }
            //Esta parte de aquí hace que al hacer click en una foto cambie
            //Para evitar poder hacer muchos clicks en una misma foto
            num = generarNum(20)
            imagenX.setAttribute('src',"img/"+num+".JPG")
            puntos.textContent='Puntos: ' + pts
        })
    }
}

function cronometro() {
    s = 30
    intervaloCrono = setInterval(() => {
        tiempo.textContent='Tiempo '+ s
        s--
        if (s==-1) {
            clearInterval(intervaloCrono)
            clearInterval(temporizador)
            tiempo.textContent='Tiempo 0:00'
            alert('Tu puntuación ha sido de: ' + pts)
            boton.style.visibility = 'visible'
            limpiarCaja()
            divMuestra.removeChild(divMuestra.firstChild)
        }
        
    }, 1000);
}

function limpiarCaja() {
    while (cajaGallery.firstChild) {
        cajaGallery.removeChild(cajaGallery.firstChild)
    }
}
function generarNum(max) {
    const random = Math.floor(Math.random() * max)
    return random;
}