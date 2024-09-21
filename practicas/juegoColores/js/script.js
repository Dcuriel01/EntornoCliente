//Declaro todos los elementos del html que voy a usar
const puntuacion = document.querySelector('#puntuacion')
const tiempo = document.querySelector('#tiempo')
const boton = document.querySelector('#boton')
const div = document.querySelector('#divTexto')
//Declaro el div "Escondido" hasta que empieze el juego
divColor.style.visibility = 'hidden'
const divColor = document.querySelector('#colores')
const textoColor = document.querySelector('#colorText')
//Array con los colores tanto para el fondo como para el texto
let colores=['red','pink','blue','yellow','orange','white','brown','green','purple']
let coloresTexto=['Rojo','Rosa','Azul','Amarillo','Naranja','Blanco','Marron','Verde','Morado']
//Declaro las variables que necesito para el funcionamiento del juego
//Con esta constante defino el tiempo que tardan en cambiar el color y las letras
const tiempoActualizacion = 1500
let pts=0
let s = 0
let m = 0
//Esta variables es para dar formato al cronometro de forma que los ultimos 9 segundos tengan un 0 delante
let extra0 = ':'
let nTexto = 0
let nColor = 0 
//Declaro los intervalos para así poder cerrarlos
var intervaloCrono
var intervaloJuego
//Preparo el evento de hacer click en el botón
boton.addEventListener('click',()=>{
    //Lo pongo en invisible para que no pueda ser pulsado mas de una vez
    boton.style.visibility = 'hidden'
    pts = 0
    cronometro()
    cambiarColor()
    //El div pasa a visible
    divColor.style.visibility = 'visible'
    //Compruebo que los numeros que corresponden al color y al texto sean iguales
    divColor.addEventListener('click',()=>{
        if (nColor===nTexto) {
            pts ++
        }else{
            pts --
        }
        //Actualizo la puntuación del jugador
        puntuacion.textContent='Puntuación:'+ pts
        
    })
    
})



function cronometro() {
    //Aqui declaro el tiempo que quiero que dure el cronometro
    s = 59
    m = 1
    intervaloCrono = setInterval(() => {
        //Muestro el tiempo
        tiempo.textContent='Tiempo ' + m + extra0 + s
        s--
        //Este if sirve para dar un formato a los ultimos 9 seg
        if (s<10) {
            extra0 = ':0'
        }
        //Este if resta los minutos cuando los segundos llegan a 0
        if (s==0 & m!==0) {
            extra0 = ':'
            m --
            s=60
        }
        //Este if se encarga de parar los intervalos, esconder el div, monstrar la puntuación y mostrar de nuevo el botón
        //En resumen finaliza el juego y lo deja preparado para otra partida
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
        
    }, 1000);
}
//Función la cuál se encarga de ir actualizando los colores de manera random en el tiempo que se le indique
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
    }, tiempoActualizacion);
}

//Función para la generación de numeros ramdon con un max indicado
function generarNum(max){
    const random = Math.floor(Math.random()*max)
    return random
}