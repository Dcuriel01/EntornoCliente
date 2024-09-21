const puntuacion = document.querySelector('#puntuacion')
const tiempo = document.querySelector('#tiempo')
const boton = document.querySelector('#boton')
const div = document.querySelector('#divTexto')
const divColor = document.querySelector('#colores')
const textoColor = document.querySelector('#colorText')
let colores=['red','pink','blue','yellow','orange','white','brown','green','purple']
let coloresTexto=['Rojo','Rosa','Azul','Amarillo','Naranja','Blanco','Marron','Verde','Morado']
boton.textContent='Jugar'
divColor.style.visibility = 'hidden'
let pts=0
let s = 0
let m = 0
let extra0 = ':'
let nTexto = 0
let nColor = 0 
var intervaloCrono
var intervaloJuego

boton.addEventListener('click',()=>{
    boton.style.visibility = 'hidden'
    pts = 0
    cronometro()
    cambiarColor()
    divColor.style.visibility = 'visible'
    divColor.addEventListener('click',()=>{
        if (nColor===nTexto) {
            pts ++
        }else{
            pts --
        }
        puntuacion.textContent='Puntuación:'+ pts
        
    })
    
})



function cronometro() {
    s = 59
    m = 1
    intervaloCrono = setInterval(() => {
        tiempo.textContent='Tiempo ' + m + extra0 + s
        s--
        if (s<10) {
            extra0 = ':0'
        }
        if (s==0 & m!==0) {
            extra0 = ':'
            m --
            s=60
        }
        if (s==-1 & m==0) {
            clearInterval(intervaloCrono)
            clearInterval(intervaloJuego)
            tiempo.textContent='Tiempo 0:00'
            extra0 = ':'
            textoColor.textContent=''
            divColor.style.visibility = 'hidden'
            tiempo.textContent=''
            alert('Tu puntuación ha sido de: ' + pts)
            boton.style.visibility = 'visible'
        }
        
    }, 900);
}

function cambiarColor(){
    nTexto = generarNum(colores.length)
    nColor = generarNum(colores.length)
    textoColor.textContent=coloresTexto[nTexto]
    divColor.style.backgroundColor = colores[nColor]
    
    intervaloJuego = setInterval(() => {
        nTexto = generarNum(colores.length)
        nColor = generarNum(colores.length)
        textoColor.textContent=coloresTexto[nTexto]
        divColor.style.backgroundColor = colores[nColor]
    }, 1500);
}


function generarNum(max){
    const random = Math.floor(Math.random()*max)
    return random
}