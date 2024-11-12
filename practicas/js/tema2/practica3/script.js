
const urlApi = 'getWebcam.php.json'
const ubicacion = document.querySelector('#parrafo')
const mostrarBtn = document.querySelector('#mostrar')

fetch(urlApi)
    .then((response) => response.json())
    .then((datos) => mostrar(datos))
// .finally(() => alert("Terminado."))
// .catch((error) => alert(error));




function mostrar(datos) {
    mostrarBtn.addEventListener('click', () => {
        limpiar(ubicacion)
        const n = generarNum(6)
        const video = document.createElement('video')
        video.setAttribute('src', datos[n].url)
        video.setAttribute('autoplay', '')
        video.setAttribute('loop', '')
        video.setAttribute('width', '100%')
        ubicacion.appendChild(video)
        setInterval(() => {
            limpiar(ubicacion)
            const n = generarNum(6)
            const video = document.createElement('video')
            video.setAttribute('src', datos[n].url)
            video.setAttribute('autoplay', '')
            video.setAttribute('loop', '')
            video.setAttribute('width', '1200px')
            ubicacion.appendChild(video)
        }, 10000);
    })


}
function limpiar(contenedor) {
    contenedor.childNodes.forEach(hijo => {
        contenedor.removeChild(hijo)
    });
}
function generarNum(max) {
    const random = Math.floor(Math.random() * max)
    return random
}