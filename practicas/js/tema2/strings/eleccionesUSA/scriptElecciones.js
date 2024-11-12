const cont = document.querySelector('div')
const tHead = document.querySelector('thead')
const tBody = document.querySelector('tbody')
const url = 'eleccionesUSA.csv'
let contadorBiden=0
let contadorTrump=0
window.addEventListener('load',inicio())

function inicio() {
    fetch(url)
    .then((response) => response.text())
    .then((datos) => mostrar(datos))
    .finally(() => console.log("Terminado."))
    .catch((error) => console.log(error));
}

function mostrar(datos) {
    let estados = []
    let cadenas = datos.split('\n') 
    cadenas.forEach((cadena,i) => {
        if (i!=0) 
        estados.push(cadena.split(';'))
    });
    let cabecera = cadenas[0].split(';')
    cabecera.forEach(item => {
        const th = document.createElement('th')
        th.textContent=item
        tHead.appendChild(th)
    });
    const th = document.createElement('th')
    th.textContent='Ganador'
    tHead.appendChild(th)
    estados.forEach(estado => {
        let ganador = 0
        let ganadorText =''
        const tr = document.createElement('tr')
        if (Number(estado[2])>Number(estado[3])) {
            ganador=2
            ganadorText ='Biden'
            contadorBiden+=Number(estado[1])
        }else{
            ganador=3
            ganadorText ='Trump'
            contadorTrump+=Number(estado[1])
        }
        estado.forEach((item,i) => {
            const td = document.createElement('td')
            td.textContent=item
            if (i==ganador) {
                if (i==2) {
                    td.style.backgroundColor='blue'
                }else{
                    td.style.backgroundColor='red'
                }
            }
            tr.appendChild(td)
        });
        const td = document.createElement('td')
        td.textContent=ganadorText
        tr.appendChild(td)
        tBody.appendChild(tr)
    })
    let p = document.createElement('p')
    p.textContent=`Biden: ${contadorBiden} Trump: ${contadorTrump}`
    cont.appendChild(p)
}