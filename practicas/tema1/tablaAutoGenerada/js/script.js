const cuerpo = document.body
const div = document.createElement('div')
const boton = document.querySelector('#boton')
cuerpo.appendChild(div)
boton.addEventListener('click',()=>{
    limpiar(div)
    let numeroFilas = prompt('Indique el número de filas') 
    let numeroColumnas = prompt('Indique el número de columnas')
    const tabla = document.createElement('table')
    tabla.style.border='1px solid black'
    div.appendChild(tabla)
    for (let i = 0; i < numeroFilas; i++) {
        const tr = document.createElement('tr')
        for (let j = 0; j < numeroColumnas; j++) {
            let x = generarNum(10)
            const td = document.createElement('td')
            td.style.border='1px solid black'
            td.style.textAlign='Center'
            td.textContent=x
            tr.appendChild(td)
        }
        tabla.appendChild(tr)
    }

})
function generarNum(max) {
    const random = Math.floor(Math.random() * max + 1);
    return random;
}



//Funcion limpiar importante
function limpiar(contenedor) {
    contenedor.childNodes.forEach(hijo => {
        contenedor.removeChild(hijo)
    });
}