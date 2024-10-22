const urlElecciones='getProvincias.json'
const body = document.querySelector('body')
let representantesPA = 0
let representantesPB = 0
let representantesPC = 0
let representantesPD = 0
let provinciasPA=[]
let provinciasPB=[]
let provinciasPC=[]
let provinciasPD=[]
let votosTotPA = 0
let votosTotPB = 0
let votosTotPC = 0
let votosTotPD = 0
window.addEventListener('load',inicio)


function inicio() {

    fetch(urlElecciones)
    .then((response) => response.json())
    .then((datos) => mostrarDatos(datos))

    
}
function mostrarDatos(datos) {
    datos.forEach((dato,i) => {
        calcularDatos(dato)

    });
    pintarRepresentantes()
    pintarProvincias()
    pintarVotosTot()
    ordenDeVotos()
}
function calcularDatos(dato) {
    let votosPA = dato.votosPA
    let votosPB = dato.votosPB
    let votosPC = dato.votosPC
    let votosPD = dato.votosPD
    let representantes = dato.Representantes
    let provincia = dato.nombreProvincia
    
    let votosTotales = [votosPA,votosPB,votosPC,votosPD]
    let masVotos = 0
    for (const votos of votosTotales) {
        if(votos>masVotos){ // 
            masVotos = votos;
        }
    }
    votosTotPA=votosTotPA+votosPA
    votosTotPB=votosTotPB+votosPB
    votosTotPC=votosTotPC+votosPC
    votosTotPD=votosTotPD+votosPD
    if (masVotos==votosPA) {
        representantesPA=representantesPA+representantes
        provinciasPA.push(provincia)
    }else if (masVotos==votosPB) {
        representantesPB=representantesPB+representantes
        provinciasPB.push(provincia)
    }else if (masVotos==votosPC) {
        representantesPC=representantesPC+representantes
        provinciasPC.push(provincia)
    }else if (masVotos==votosPD) {
        representantesPD=representantesPD+representantes
        provinciasPD.push(provincia)
    }

    
}
function pintarRepresentantes() {
    const tituloRepre = document.createElement('h3')
    tituloRepre.textContent='Representantes'
    const pRepre = document.createElement('p')
    pRepre.textContent='PA :'+representantesPA+' PB:'+representantesPB+' PC:'+representantesPC+' PD:'+representantesPD
    const br = document.createElement('br')
    body.appendChild(tituloRepre)
    body.appendChild(pRepre)
    body.appendChild(br)

}
function pintarProvincias() {
    const tituloProv = document.createElement('h3')
    tituloProv.textContent='Provincias Ganadas'
    body.appendChild(tituloProv)
    const br = document.createElement('br')
    mostrarProvincias(provinciasPA,'PA')
    mostrarProvincias(provinciasPB,'PB')
    mostrarProvincias(provinciasPC,'PC')
    mostrarProvincias(provinciasPD,'PD')
    body.appendChild(br)
}
function mostrarProvincias(provincia,nombre) {
    const pProv = document.createElement('p')
    pProv.textContent=nombre+': '
    provincia.forEach(e => {
        pProv.textContent=pProv.textContent+e+' '
    });
    body.appendChild(pProv)
}
function pintarVotosTot() {
    const tituloVotos = document.createElement('h3')
    tituloVotos.textContent='Votos Totales'
    const pVot = document.createElement('p')
    pVot.textContent='PA :'+votosTotPA+' PB:'+votosTotPB+' PC:'+votosTotPC+' PD:'+votosTotPD
    const br = document.createElement('br')
    body.appendChild(tituloVotos)
    body.appendChild(pVot)
    body.appendChild(br)

}
function ordenDeVotos() {
    let votosTotales = [votosTotPA,votosTotPB,votosTotPC,votosTotPD]
    votosTotales.sort((a, b) => a - b)
    mostrarOrden(votosTotales)
    
}
function mostrarOrden(votosTotales) {
    const tituloOrden = document.createElement('h3')
    tituloOrden.textContent='Orden de ganadores'
    const pA = document.createElement('p')
    body.appendChild(tituloOrden)
    for (let index = votosTotales.length-1 ; index >= 0; index--) {
        if (votosTotPA==votosTotales[index]) {
            const pA = document.createElement('p')
            pA.textContent=' PA : '+votosTotPA
            body.appendChild(pA)
        }else if (votosTotPB==votosTotales[index]) {
            const pB = document.createElement('p')
            pB.textContent=' PB : '+votosTotPB
            body.appendChild(pB)
        }else if (votosTotPC==votosTotales[index]) {
            const pC = document.createElement('p')
            pC.textContent=' PC : '+votosTotPC
            body.appendChild(pC)
        }else if (votosTotPD==votosTotales[index]) {
            const pD = document.createElement('p')
            pD.textContent=' PD : '+votosTotPD
            body.appendChild(pD)
        }
        
    }
    
}
