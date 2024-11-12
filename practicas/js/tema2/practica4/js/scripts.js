const urlApi = 'getTodoPersonal.json'
const ubicacion = document.querySelectorAll('.col-md-4')

window.addEventListener('load',inicio)

fetch(urlApi)
    .then((response) => response.json())
    .then((datos) => mostrar(datos))
// .finally(() => alert("Terminado."))
// .catch((error) => alert(error));

function inicio() {
    limpiar(ubicacion)
}

function limpiar(contenedor) {
    contenedor.forEach(bloque => {
        while (bloque.hasChildNodes()) {
            bloque.removeChild(bloque.firstChild)
        }
    });
}

function mostrar(data){
    data.forEach(datos=>{
        const caja1 = document.createElement('div')
        caja1.className='card' 
        ubicacion.appendChild(caja1)

        // const tarjeta = document.createElement('div')
        // tarjeta.className = 'card'
        // columna.appendChild(tarjeta)

        // const imagen = document.createElement('img')
        // imagen.setAttribute('src', webc.imagen)
        // tarjeta.appendChild(imagen)

        // const cardBody = document.createElement('div')
        // cardBody.className = 'card-body'
        // tarjeta.appendChild(cardBody)

        // const texto = document.createElement('h4')
        // texto.className = 'card-title'
        // texto.textContent = webc.texto
        // cardBody.appendChild(texto)

        // const subtexto = document.createElement('p')
        // subtexto.className = 'card-text'
        // subtexto.innerHTML = webc.subtexto
        // cardBody.appendChild(subtexto)
    })
}
