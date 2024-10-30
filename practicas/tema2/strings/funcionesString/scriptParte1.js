window.addEventListener('DOMContentLoaded',inicio)

function inicio() {
    //primerApartado()
    //segundoApartado()
}
function primerApartado() {
    let miNombre = prompt('tu nombre:')
    let nombreMayus = miNombre.toUpperCase()
    alert('Tu nombre en mayusculas: ' + nombreMayus)
}
function segundoApartado() {
    let miNombre
    let nombreMayus
    do {
        miNombre = prompt('tu nombre en mayusculas:')
        nombreMayus = miNombre.toUpperCase()
        if (miNombre===nombreMayus) {
            alert('Muy bien')
        }else{
            alert('Tiene que ser completo en mayusculas')
        }
    } while (miNombre!==nombreMayus);
    
}