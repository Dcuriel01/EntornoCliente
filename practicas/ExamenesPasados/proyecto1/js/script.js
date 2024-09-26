//Creo todos los elementos que necesito
const cuerpo = document.body
const divPrincipal = document.createElement('div')
const fieldsetTodos = document.createElement('fieldset')
const legendTodos = document.createElement('legend')
const fieldsetAzul = document.createElement('fieldset')
const legendAzul = document.createElement('legend')
const fieldsetVerde = document.createElement('fieldset')
const legendVerde = document.createElement('legend')
const fieldsetRojo = document.createElement('fieldset')
const legendRojo = document.createElement('legend')
const fieldsetNaranja = document.createElement('fieldset')
const legendNaranja = document.createElement('legend')
const boton = document.querySelector('#mover')
//Creo arrays y variables necesarias
let colores = ['blue','green','red','orange']
let coloresTexto = ['Azul','Verde','Rojo','Naranja']
let ordenado=false

legendTodos.textContent='Todos'
fieldsetTodos.appendChild(legendTodos)
fieldsetTodos.className='gallery'

legendAzul.textContent='Azul'
fieldsetAzul.appendChild(legendAzul)
fieldsetAzul.className='gallery'

legendVerde.textContent='Verde'
fieldsetVerde.appendChild(legendVerde)
fieldsetVerde.className='gallery'

legendRojo.textContent='Rojo'
fieldsetRojo.appendChild(legendRojo)
fieldsetRojo.className='gallery'

legendNaranja.textContent='Naranja'
fieldsetNaranja.appendChild(legendNaranja)
fieldsetNaranja.className='gallery'

divPrincipal.appendChild(fieldsetTodos)
divPrincipal.appendChild(fieldsetAzul)
divPrincipal.appendChild(fieldsetVerde)
divPrincipal.appendChild(fieldsetRojo)-
divPrincipal.appendChild(fieldsetNaranja)
divPrincipal.className='container'

cuerpo.appendChild(divPrincipal)
generarColores()
boton.addEventListener('click',ordenar)




function generarColores() {
    let n =0
    for (let i = 0; i< 20; i++) {
        n=generarNum(colores.length)
        let divX=document.createElement('div')
        divX.style.backgroundColor=colores[n]
        divX.textContent=coloresTexto[n]
        with (divX.style){
            paddingBottom='25px'
            fontWeight='bold'
            width='70px'
            height='50px'
        }
        fieldsetTodos.appendChild(divX)
    }

}

function ordenar() {
    if (!ordenado) {
        let divs = fieldsetTodos.querySelectorAll('div')
        ordenado=true
        for (const div of divs) {
            if (div.textContent=='Azul') {
                fieldsetAzul.appendChild(div)
            }else if (div.textContent=='Verde') {
                fieldsetVerde.appendChild(div)
            }else if (div.textContent=='Rojo') {
                fieldsetRojo.appendChild(div)
            }else {
                fieldsetNaranja.appendChild(div)
            }
        }
        //Esta sirve para que se vuelva a crear todos los div y vacie los fieldset
    }else{
        ordenado=false
        vaciar(fieldsetAzul)
        vaciar(fieldsetVerde)
        vaciar(fieldsetRojo)
        vaciar(fieldsetNaranja)
        generarColores()
    }

    
}
function vaciar(fieldset) {
    let divFieldSet = fieldset.querySelectorAll('div') 
    for (const div of divFieldSet) {
        fieldset.removeChild(div)
    }
}
function generarNum(max) {
    const random = Math.floor(Math.random() * max);
    return random;
}