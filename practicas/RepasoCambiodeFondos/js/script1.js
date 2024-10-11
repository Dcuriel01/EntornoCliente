window.onload = inicio;

const listaImagenes = document.querySelectorAll('#images img')
const listaFondos = document.querySelectorAll('#fondos div')
const listaBordes = document.querySelectorAll('#bordes div')
const zooms = document.querySelectorAll('#zoom img')
const imgDestino = document.querySelector('#picture img')
const contenedorDestino = document.querySelector('#picture')

function inicio() {
    listaImagenes.forEach(img=>{
        img.onclick=()=>{
            imgDestino.src=img.src
        }
    })
    listaFondos.forEach(cargarFondo)
    listaBordes.forEach(cargarBorde)
    zooms[0].onclick=zoomMas
    zooms[1].onclick=zoomMenos
}

function zoomMas() {
    imgDestino.style.transform='scale(2)'
}

function zoomMenos() {
    imgDestino.style.transform='scale(1)'
}

function cargarFondo(item) {
    item.onclick = mostrarFondo
}

function cargarBorde(item) {
    item.onclick = mostrarBorde
}

function mostrarFondo(div) {
    let nombreColor = div.target.id
    switch (nombreColor) {
        case 'negro': contenedorDestino.style.backgroundColor = 'black'
            break;
        case 'rojo': contenedorDestino.style.backgroundColor = 'red'
            break;
        case 'azul': contenedorDestino.style.backgroundColor = 'blue'
            break;
        case 'amarillo': contenedorDestino.style.backgroundColor = 'yellow'
            break;
        case 'verde': contenedorDestino.style.backgroundColor = 'green'
            break;
        case 'rosa': contenedorDestino.style.backgroundColor = 'pink'
            break;
    }
}

function mostrarBorde(borde) {
    let nombreColor = borde.target.id
    switch (nombreColor) {
        case 'negroBorde': contenedorDestino.style.borderColor = 'black'
            break;
        case 'rojoBorde': contenedorDestino.style.borderColor = 'red'
            break;
        case 'azulBorde': contenedorDestino.style.borderColor = 'blue'
            break;
        case 'amarilloBorde': contenedorDestino.style.borderColor = 'yellow'
            break;
        case 'verdeBorde': contenedorDestino.style.borderColor = 'green'
            break;
        case 'rosaBorde': contenedorDestino.style.borderColor = 'pink'
            break;
    }
}