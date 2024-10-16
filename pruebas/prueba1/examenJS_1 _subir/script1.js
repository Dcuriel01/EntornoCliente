let accion = document.querySelector('form')

accion.onsubmit = ()=>{
    //Lamo a todos los metodos de validar que he generado 
    let avanzar = true
    if (!validacion1()) {
        avanzar=false
    }
    if (!validacion2()) {
        avanzar=false
    }
    if (!validacion3()) {
        avanzar=false
    }
    if (!validacion4()) {
        avanzar=false
    }

    return avanzar
}

function validacion1() {
    //Este metodo valida que tiene 10 caracteres y termina y empieza en numero
    let avance = true
    let campo1 = document.getElementById('v1').value
    let smCampo1 = document.getElementById('smv1')
    if(campo1.length!=10){
        avance=false
        smCampo1.textContent='Error el campo debe tener exactamente 10 caracteres'
    }else if (isNaN(campo1.charAt(0))|isNaN(campo1.charAt(9))) {
        avance=false
        smCampo1.textContent='Error el campo debe empezar y terminar por un numero'
    }else{
        smCampo1.textContent=''
    }
    return avance
}


function validacion2() {
    //Comprueba que sea igual a 12
    let avance = true
    let campo2 = document.getElementById('v2').value
    let smCampo2 = document.getElementById('smv2')
    let cumple = true
    //Y con este bucle coompruebo los 6 primeros caracteres y los 6 ultimos
    if (campo2.length==12) {
        for (let i = 0; i < 6; i++) {
            if (!isNaN(campo2.charAt(i))) {
                cumple = false
            }
        }
        for (let j = 6; j < 13; j++) {
            if (isNaN(campo2.charAt(j))) {
                cumple = false
            }
        }
    }

    if(campo2.length!=12){
        avance=false
        smCampo2.textContent='Error el campo debe tener exactamente 12 caracteres'
    }else if (!cumple) {
        avance=false
        smCampo2.textContent='Error el campo debe empezar por 6 letras y termminar por 6 numeros'
    }else{
        smCampo2.textContent=''
    }
    return avance
}

function validacion3() {
    //Compruebo que mida 20 cararcteres
    let avance = true
    let campo3 = document.getElementById('v3').value
    let smCampo3 = document.getElementById('smv3')
    let cumple = true
    //compruebo las posiciones 4,9,14,19 que es donde deben ir colocados los -
    if (campo3.length==20) {
        for (let i = 0; i < 20; i++) {
            if (i==4||i==9||i==14||i==19) {
                if (campo3.charAt(i)!='-') {
                    cumple = false
                }
            }else if (isNaN(campo3.charAt(i))) {
                cumple = false
            }
            
        }
    }

    if(campo3.length!=20){
        avance=false
        smCampo3.textContent='Error el campo debe tener exactamente 20 caracteres'
    }else if (!cumple) {
        avance=false
        smCampo3.textContent='Error el campo debe tener 4 numeros seguidos de un - en 4 ocasiones'
    }else{
        smCampo3.textContent=''
    }
    return avance
}


function validacion4() {
    //Compruebo que mida 8 caracteres
    let avance = true
    let campo4 = document.getElementById('v4').value
    let smCampo4 = document.getElementById('smv4')
    const patron = /[A-Z]/
    let contMayus = 0
    //Compruebo con este patron si la letra es mayuscula o no y lo llevo a un contador para ver si hay mas de 2
    if (campo4.length==8) {
        for (let i = 0; i < 8; i++) {
            if (/[A-Z]/.test(campo4.charAt(i))) {
                contMayus++
            }
        }
    }
    if(campo4.length!=8){
        avance=false
        smCampo4.textContent='Error el campo debe tener exactamente 8 caracteres'
    }else if (contMayus<2) {
        avance=false
        smCampo4.textContent='Error el campo debe contener 2 mayusculas'
    }else{
        smCampo4.textContent=''
    }
    return avance
}
