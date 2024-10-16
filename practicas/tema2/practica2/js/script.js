//Url del fichero Json
const urlApi = 'http://camacho.atwebpages.com/jumbotronAleatorio/getImagenes.php'
const ubicacion = document.querySelector('#cajaX')

fetch(urlApi)
    .then((response) => response.json())
    .then((datos) => mostrar(datos))
    // .finally(() => alert("Terminado."))
    // .catch((error) => alert(error));

function mostrar(datos) {
    datos.forEach(webc => {
        const columna = document.createElement('div')
        columna.className = 'col-lg-4'
        ubicacion.appendChild(columna)

        const tarjeta = document.createElement('div')
        tarjeta.className = 'card'
        columna.appendChild(tarjeta)

        const imagen = document.createElement('img')
        imagen.setAttribute('src', webc.imagen)
        tarjeta.appendChild(imagen)

        const cardBody = document.createElement('div')
        cardBody.className = 'card-body'
        tarjeta.appendChild(cardBody)

        const texto = document.createElement('h4')
        texto.className = 'card-title'
        texto.textContent = webc.texto
        cardBody.appendChild(texto)

        const subtexto = document.createElement('p')
        subtexto.className = 'card-text'
        subtexto.innerHTML = webc.subtexto
        cardBody.appendChild(subtexto)
    })
}