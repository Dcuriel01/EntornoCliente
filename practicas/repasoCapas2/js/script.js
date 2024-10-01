const cuerpo = document.body
const divBotones = document.querySelector('.gallery')
const boton = document.querySelector('#boton-agregar')
const divPrincipal = document.querySelector('.container')
const divFotos = document.createElement('div')
let contadorBotones = 0
divFotos.className='gallery'
divPrincipal.appendChild(divFotos)

boton.addEventListener('click',()=>{
    let botonX = document.createElement('button')
    contadorBotones++
    botonX.textContent='Botón ' + contadorBotones
    botonX.style.backgroundColor='green'
    divBotones.appendChild(botonX)
    botonX.addEventListener('click',()=>{
        limpiar()
        let n = generarNum(11)
        botonX.textContent=n
        for (let index = 0; index < n; index++) {
        let imagenX = document.createElement('img')
        let x = generarNum(19)
        imagenX.setAttribute('src','img/'+ x +'.JPG')
        divFotos.appendChild(imagenX)
    }
    })
    
})

function generarNum(max) {
    const random = Math.floor(Math.random() * max );
    return random;
}
function limpiar() {
    let fotos = divFotos.querySelectorAll('img') 
    for (const foto of fotos) {
        divFotos.removeChild(foto)
    }
}