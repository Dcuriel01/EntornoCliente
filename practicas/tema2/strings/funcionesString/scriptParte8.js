window.addEventListener('DOMContentLoaded',inicio)
const contenedor = document.querySelector('.col-lg-10')
function inicio() {
    let n1 = 0
    let n2 = 0
    let resultado = 0
    let i = 1
    do {
        n1 = generarNum(100)
        n2 = generarNum(100)
        resultado=n1+n2
        const cadena=`${i}: La suma de: ${n1} + ${n2} = ${resultado}`
        const p = document.createElement('p')
        p.textContent=cadena
        contenedor.appendChild(p)
        i++
    } while (n1!=n2);
}

function generarNum(max){
    const random = Math.floor(Math.random()*max)
    return random
}