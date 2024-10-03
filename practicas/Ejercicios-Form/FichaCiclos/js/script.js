let accion = document.getElementById('validar')
let avanzar
accion.onsubmit = () => {
    avanzar = true
    let ciclo = document.querySelector('input[name="ciclo"]:checked');
    let smCiclos = document.getElementById('smCiclos')
    //Comprobación de los radio de los ciclos
    if (!ciclo) {
        avanzar = false
        smCiclos.textContent = '* Debe seleccionar alguno de los ciclos'
    } else {
        smCiclos.textContent = ''
    }
    //Comprobacion de los checkbox de modulo
    let modulo = document.querySelectorAll('input[name="modulo"]:checked');
    let smModulo = document.getElementById('smModulos')
    if (modulo.length == 0) {
        avanzar = false
        smModulo.textContent = '* Debe seleccionar alguno de los modulos'
    } else {
        smModulo.textContent = ''
    }
    //Comprobacion del nombre
    let contieneNum = false
    let nombre = document.getElementById("nombre")
    for (let i = 0; i < nombre.length; i++) {
        if (!isNaN(nombre.charAt(i))) {
            contieneNum = true
        }
    }
    if (nombre.value < 3) {
        avanzar = false
        nombre.placeholder='Introduzca un nombre valido'
    } else if (contieneNum) {
        avanzar = false
    }
    //Comprobacion de los comentarios
    let comentario = document.getElementById('comentario')
    let coment = comentario.value
    if (coment=='') {
        comentario.placeholder='Introduzca un comentario por favor'
    }
    return avanzar
}