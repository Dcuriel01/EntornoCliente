let accion = document.getElementById('validar')

accion.onsubmit = ()=>{
    let avanzar = true
    if (!validarUsuario()) {
        avanzar=false
    }
    if (!validarContraseña()) {
        avanzar=false
    }
    if (!validarCoincidenciaPass()) {
        avanzar=false
    }
    if (!validarCorreo()) {
        avanzar=false
    }
    
    return avanzar
}

function validarUsuario() {
    //Validamos el usuario
    let avanzar = true
    let usuario = document.getElementById('user').value
    let smUser = document.getElementById('smUser')
    let contieneNum=false
    for (let i = 0; i < usuario.length; i++) {
        if (!isNaN(usuario.charAt(i))) {
          contieneNum=true
        }
    }
    if (usuario.length<3) {
        avanzar=false
        smUser.textContent='Error mínimo debe tener 3 caracteres'
    }else if (contieneNum) {
        avanzar=false
        smUser.textContent='Debe ser unicamente letras'
    }else{
        smUser.textContent=''
    }
    return avanzar
}
function validarContraseña() {
    let avanzar = true
    let pass = document.getElementById('pass').value
    let smPass = document.getElementById('smPass')

    const patron = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\$)[A-Za-z\d$]{8,}$/;

    if (!patron.test(pass)) {
        avanzar=false
        smPass.textContent='Error la contraseña no cumple el patron'
    } else{
        smPass.textContent=''
    }
    return avanzar
}
function validarCoincidenciaPass() {
    let avanzar = true
    let pass = document.getElementById('pass').value
    let pass2 = document.getElementById('pass2').value
    let smPass = document.getElementById('smPass2')

    if (pass!=pass2 || pass=='') {
        avanzar=false
        smPass.textContent='Error las contraseñas no coinciden'
    } else{
        smPass.textContent=''
    }
    return avanzar
}

function validarCorreo() {
    let avanzar = true
    let email = document.getElementById('email').value
    let smEmail = document.getElementById('smEmail')

    const patron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!patron.test(email)) {
        avanzar=false
        smEmail.textContent='Error el correo no cumple el patron'
    } else{
        smEmail.textContent=''
    }
    
    return avanzar
}