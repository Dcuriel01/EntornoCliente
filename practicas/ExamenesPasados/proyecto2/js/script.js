const cuerpo = document.body
const boton = document.querySelector('#jugar')
const divPrincipal = document.createElement('div')
divPrincipal.className='gallery'
cuerpo.appendChild(divPrincipal)

for (let i = 0; i < 40; i++) {
    let divX = document.createElement('div')
    divX.className='fondo'
    divPrincipal.appendChild(divX)
}
boton.addEventListener('click',cambiarColor)

function cambiarColor() {
    const divs = divPrincipal.querySelectorAll('div')
    let i=0
    let intervalo = setInterval(() => {
        if (i==divs.length) {
            i=0
        }
        if (divs[i].style.backgroundColor=='green') {
            divs[i].style.backgroundColor='red'
            
        }else{
            divs[i].style.backgroundColor='green'
        }
        i++
        
    }, 50); 
}

