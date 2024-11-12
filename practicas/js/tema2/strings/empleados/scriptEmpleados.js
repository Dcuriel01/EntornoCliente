const cont = document.querySelector('div')
const tHead = document.querySelector('thead')
const tBody = document.querySelector('tbody')
const url = 'empleados.csv'

window.addEventListener('load',inicio())

function inicio() {
    fetch(url)
    .then((response) => response.text())
    .then((datos) => mostrar(datos))
    .finally(() => console.log("Terminado."))
    .catch((error) => console.log(error));
}
function mostrar(datos) {
    let empleados = []
    let cadenas = datos.split('\n') 
    cadenas.forEach((cadena,i) => {
        if (i!=0) 
        empleados.push(cadena.split(','))
    });
    let cabecera = cadenas[0].split(',')
    cabecera.forEach(item => {
        const th = document.createElement('th')
        th.textContent=item
        tHead.appendChild(th)
    });
    empleados.forEach(empleado => {
        const tr = document.createElement('tr')
        if (Number(empleado[1])>30) {
            tr.style.backgroundColor='yellow'
        }else{
            tr.style.backgroundColor='green'
        }
        empleado.forEach((item,i) => {
            const td = document.createElement('td')
            if (i==3) {
                if (Number(item)>100000) {
                    td.style.fontSize='25px'
                    td.style.color='red'
                }
            }
           
            td.textContent=item
            tr.appendChild(td)
        });
        tBody.appendChild(tr)
    })
}