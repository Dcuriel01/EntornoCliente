let accion = document.getElementById('validar')
let avanzar = true
accion.onsubmit=()=>{
    avanzar=true
    //Declaro todos los input y mensajes del vormulario
    let n1 = document.getElementById('n1').value
    let smN1 = document.getElementById('smN1')
    let n2 = document.getElementById('n2').value
    let smN2 = document.getElementById('smN2')
    let n3 = document.getElementById('n3').value
    let smN3 = document.getElementById('smN3')
    let n4 = document.getElementById('n4').value
    let smN4 = document.getElementById('smN4')
    let n5 = document.getElementById('n5').value
    let smN5 = document.getElementById('smN5')
    let n6 = document.getElementById('n6').value
    let smN6 = document.getElementById('smN6')
    //Llamar a la funcion
    validar(n1,smN1)
    validar(n2,smN2)
    validar(n3,smN3)
    validar(n4,smN4)
    validar(n5,smN5)
    validar(n6,smN6)
    let arrayNumeros = [n1,n2,n3,n4,n5,n6]
    let arrayAux = []
    let esta = false
    for (let index = 0; index < arrayNumeros.length; index++) {
        if (arrayAux.includes(arrayNumeros[index])) {
            esta = true
        }else{
            arrayAux.push(arrayNumeros[index])
        }
    }
    let smEnv = document.getElementById('smEnv')
    if (esta) {
        smEnv.textContent='*Hay números duplicados'
        avanzar=false
    }else{
        smEnv.textContent=''
    }

    function validar(nX,smX) {
        if (nX.length==0) {
            avanzar=false
            smX.textContent='* Campo obligatorio'
        }else if (isNaN(nX)) {
            avanzar=false
            smX.textContent='** No es un número'
        }else if (!Number.isInteger(Number(nX))) {
            avanzar = false
            smX.textContent='*** Debe ser un número entero'
        }else if (Number(nX)<0||Number(nX)>50) {
            avanzar = false
            smX.textContent='*** El número esta fuera de rango (0-50)'
        }else{
            smX.textContent=''
        }
    }

    return avanzar
}

