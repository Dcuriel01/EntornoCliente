//Url del fichero Json
const urlApi = 'http://camacho.atwebpages.com/webcam/getWebcam.php'
//Contenedor donde se meustran los datos 
const ubicacion = document.querySelector('#fila')

//Realizamos la solicitud
fetch(urlApi)
    .then((response) => response.json())
    .then((datos) => mostrar(datos))
    .finally(() => alert("Terminado."))
    .catch((error) => alert(error));



function mostrar(datos) {
    datos.forEach(webc => {

        const columna = document.createElement('div')
        columna.className = 'col-lg-4'
        ubicacion.appendChild(columna)

        const tarjeta = document.createElement('div')
        tarjeta.className = 'card'
        columna.appendChild(tarjeta)

        const videoW = document.createElement('video')
        videoW.setAttribute('src', webc.url)
        videoW.setAttribute('autoplay', '')
        videoW.setAttribute('loop', '')
        tarjeta.appendChild(videoW)

        const cardBody = document.createElement('div')
        cardBody.className = 'card-body'
        tarjeta.appendChild(cardBody)

        const titulo = document.createElement('h4')
        titulo.className = 'card-title'
        titulo.textContent = webc.lugar
        cardBody.appendChild(titulo)

        const subTitulo = document.createElement('p')
        subTitulo.className = 'card-text'
        subTitulo.innerHTML = webc.tiempo
        cardBody.appendChild(subTitulo)


    });
}
