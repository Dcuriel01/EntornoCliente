window.addEventListener('DOMContentLoaded',inicio)
const cuerpo = document.querySelector('body')
const contenedor = document.querySelector('.col-lg-10')
const espacio= document.createElement('span')
espacio.style.border='3px solid red'
contenedor.appendChild(espacio)
function inicio() {
    primerApartado()
}
function primerApartado() {
    const titulo = '          Desarrollo de aplicaciones web  '
    const titulo2 = '       Desarrollo aplicaciones multiplataforma '
    const resultado = titulo.trim().concat(titulo2.trim())
    espacio.textContent=resultado
}
