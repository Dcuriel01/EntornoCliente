window.addEventListener('DOMContentLoaded', inicio)
const cadena = 'red green blue yellow blue pink'
const cuerpo = document.querySelector('body')
const contenedor = document.querySelector('.col-lg-10')
const url = 'texto.txt'
const espacio = document.createElement('span')
contenedor.appendChild(espacio)


function inicio() {
    fetch(url)
        .then((response) => response.text())
        .then((datos) => mostrar(datos))
        .finally(() => console.log("Terminado."))
        .catch((error) => console.log(error));


}
function mostrar(datos) {
    let nombres=[]
    nombres = datos.split('\n')
    console.log(nombres)
    espacio.textContent='Vector: ' + nombres
}
