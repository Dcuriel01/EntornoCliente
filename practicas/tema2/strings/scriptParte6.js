window.addEventListener('DOMContentLoaded', inicio)
const cadena = 'red green blue yellow blue pink'
const cuerpo = document.querySelector('body')
const contenedor = document.querySelector('.col-lg-10')
const url = 'textoNotas.txt'



function inicio() {
    fetch(url)
        .then((response) => response.text())
        .then((datos) => mostrar(datos))
        .finally(() => console.log("Terminado."))
        .catch((error) => console.log(error));


}
function mostrar(datos) {
    let lineas = []
    let notas=[]
    lineas = datos.split('\n')
    lineas.forEach(linea => {
        notas=linea.split(':')
        let media = (Number(notas[2])+Number(notas[3])+Number(notas[4]))/3
        let mensaje = 'Media de: ' + notas[1] + ' = ' + media.toFixed(2)
        const espacio = document.createElement('p')
        espacio.textContent+=mensaje+('\n')
        contenedor.appendChild(espacio)
    });
}
