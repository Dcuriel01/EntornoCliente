window.addEventListener('DOMContentLoaded', inicio)
const url = 'temperaturas.txt'

function inicio() {
    fetch(url)
        .then((response) => response.text())
        .then((datos) => mostrar(datos))
        .finally(() => console.log("Terminado."))
        .catch((error) => console.log(error));

}
function mostrar(datos) {
    let cadenas = datos.split('\n')
    let pueblos = []
    cadenas.forEach(cadena => {
        pueblos.push(cadena.split(';'))
    });
    
    temperaturasMedias(pueblos)
    pluviMedia(pueblos)
    puebloMayorTemp(pueblos)
    puebloMayorPluvi(pueblos)
}

function temperaturasMedias(pueblos) {
    let temperaturaMediaMax=0
    pueblos.forEach(pueblo => {
        temperaturaMediaMax+=Number(pueblo[1])
    });
    temperaturaMediaMax = temperaturaMediaMax/pueblos.length
    console.log(`Media temperaturas: ${temperaturaMediaMax}`)
}

function pluviMedia(pueblos) {
    let pluviMedia=0
    pueblos.forEach(pueblo => {
        pluviMedia+=Number(pueblo[3])
    });
    pluviMedia = (pluviMedia/pueblos.length).toFixed(2)
    console.log(`Media de las lluvias: ${pluviMedia}`)
}

function puebloMayorTemp(pueblos) {
    let tempMax=pueblos[0][1]
    let puebloTempMax=pueblos[0]
    pueblos.forEach(pueblo => {
        if (tempMax<pueblo[1]) {
            tempMax=pueblo[1]
            puebloTempMax=pueblo
        }
    });
    console.log(`Pueblo con mas temperatura: ${puebloTempMax}`)
}

function puebloMayorPluvi(pueblos) {
    let pluviMax=pueblos[0][3]
    let puebloPluviMax=pueblos[0]
    pueblos.forEach(pueblo => {
        if (pluviMax<pueblo[3]) {
            pluviMax=pueblo[3]
            puebloPluviMax=pueblo
        }
    });
    console.log(`Pueblo con mas lluvia: ${puebloPluviMax}`)
}

