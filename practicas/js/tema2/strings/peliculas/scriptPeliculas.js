const cont = document.querySelector('div')
const tHead = document.querySelector('thead')
const tBody = document.querySelector('tbody')
const url = 'peliculas.csv'

window.addEventListener('load',inicio())

function inicio() {
    fetch(url)
    .then((response) => response.text())
    .then((datos) => mostrar(datos))
    .finally(() => console.log("Terminado."))
    .catch((error) => console.log(error));
}
function mostrar(datos) {
    let peliculas = []
    let cadenas = datos.split('\n') 
    cadenas.forEach((cadena,i) => {
        if (i!=0) 
        peliculas.push(cadena.split(','))
    });
    let cabecera = cadenas[0].split(',')
    cabecera.forEach(item => {
        const th = document.createElement('th')
        th.textContent=item
        tHead.appendChild(th)
    });
    peliculas.forEach(pelicula => {
        const tr = document.createElement('tr')
        if (Number(pelicula[4])>2000) {
            tr.style.backgroundColor='lightpink'
        }else{
            tr.style.backgroundColor='green'
        }
        pelicula.forEach((item,i) => {
            const td = document.createElement('td')
            td.textContent=item
            tr.appendChild(td)
        });
        tBody.appendChild(tr)
    })
}