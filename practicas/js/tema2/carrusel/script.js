const urlJson = 'getTodoPersonal.json';
const ubicacionlis = document.querySelector('.carousel-indicators')
const ubicacionDiv = document.querySelector('.carousel-inner')

window.addEventListener('load', inicio)

function inicio() {

    fetch(urlJson)
        .then((response) => response.json())
        .then((datos) => mostrar(datos))
        .finally(() => console.log("Terminado."))
        .catch((error) => console.log(error));


}
function mostrar(datos) {
    datos.forEach((dato,i) => {
        crearLi(dato, i)
        crearDiv(dato, i)
    });
}



function crearLi(dato, i) {
    const li = document.createElement('li')
    li.setAttribute('data-target', '#carouselId')
    li.setAttribute('data-slide-to', i)
    if (i == 0) {
        li.className = 'active'
    }
    ubicacionlis.appendChild(li)
}
function crearDiv(dato, i) {
    const div = document.createElement('div')
    div.className = 'carousel-item'
    if (i == 0) {
        div.className = 'carousel-item active'
    }
    const img = document.createElement('img')
    img.setAttribute('src', dato.imagen)
    div.appendChild(img)
    const div2 = document.createElement('div')
    div2.classList="carousel-caption d-none d-md-block"
    const h3 = document.createElement('h3')
    h3.textContent = dato.nombre
    div2.appendChild(h3)
    const p = document.createElement('p')
    p.textContent = dato.cargo
    div2.appendChild(p)
    div.appendChild(div2)
    ubicacionDiv.appendChild(div)
}




