let accion = document.getElementById('validar')
accion.onsubmit=()=>{
    let avanzar = true
    validarN1()
    validarTxt1()
    validarN2()
    validarTxt2()
    validarTxt3()
    validarTxt4()
    validarN3()
    validarN4(3)

    return avanzar
    
    function validarN1() {
        let n1 = document.getElementById('n1')
        let smN1 = document.getElementById('smN1')
        if (n1.value=='') {
            avanzar=false
            smN1.textContent='Campo obligatorio'
        }else if(isNaN(n1.value)){
            avanzar=false
            smN1.textContent='Debe ser un numero'
        }else if(Number(n1.value)<0|Number(n1.value)>100){
            avanzar=false
            smN1.textContent='Debe estar comprendido entre 0 y 100'
        }else{
            smN1.textContent=''
        }

    }
    
    function validarTxt1() {
        let txt1 = document.getElementById('txt1').value
        let smTxt1 = document.getElementById('smTxt1')
        if (txt1=='') {
            avanzar=false
            smTxt1.textContent='Campo obligatorio'
        }else if(txt1.length<3|txt1.length>15){
            avanzar=false
            smTxt1.textContent='Debe tener entre 3 y 15 caracteres'
        }else{
            smTxt1.textContent=''
        }

    }

    function validarN2() {
        let n2 = document.getElementById('n2')
        let smN2 = document.getElementById('smN2')
        if (n2.value=='') {
            avanzar=false
            smN2.textContent='Campo obligatorio'
        }else if(isNaN(n2.value)){
            avanzar=false
            smN2.textContent='Debe ser un numero'
        }else if(Number(n2.value)<-10|Number(n2.value)>10){
            avanzar=false
            smN2.textContent='Debe estar comprendido entre -10 y 10'
        }else{
            smN2.textContent=''
        }

    }

    function validarTxt2() {
        let txt2 = document.getElementById('txt2').value
        let smTxt2 = document.getElementById('smTxt2')
        const patron =  /(?=.*a)(?=.*e)(?=.*o)/;
        if (txt2=='') {
            avanzar=false
            smTxt2.textContent='Campo obligatorio'
        }else if(!patron.test(txt2)){
            avanzar=false
            smTxt2.textContent='No cumple el patron de a,e,o'
        }else{
            smTxt2.textContent=''
        }

    }

    function validarTxt3() {
        let txt3 = document.getElementById('txt3').value
        let smTxt3 = document.getElementById('smTxt3')
        const patron = /(?=.*[A-Z])(?=.*\d)/;
        if (txt3=='') {
            avanzar=false
            smTxt3.textContent='Campo obligatorio'
        }else if(txt3.length<5|txt3.length>15){
            avanzar=false
            smTxt3.textContent='Debe tener entre 5 y 15 caracteres'
        }else if (!patron.test(txt3)) {
            avanzar=false
            smTxt3.textContent='No cumple el patron'
        }else{
            smTxt3.textContent=''
        }

    }

    function validarTxt4() {
        let txt4 = document.getElementById('txt4').value
        let smTxt4 = document.getElementById('smTxt4')
        const patron = /(?=([^@]*@){1}[^@]*$)/;
        if (txt4=='') {
            avanzar=false
            smTxt4.textContent='Campo obligatorio'
        }else if(txt4.length<20|txt4.length>30){
            avanzar=false
            smTxt4.textContent='Debe tener entre 20 y 30 caracteres'
        }else if (!patron.test(txt4)) {
            avanzar=false
            smTxt4.textContent='No cumple el patron'
        }else{
            smTxt4.textContent=''
        }

    }

    function validarN3() {
        let n3 = document.getElementById('n3')
        let smN3 = document.getElementById('smN3')
        if (n3.value=='') {
            avanzar=false
            smN3.textContent='Campo obligatorio'
        }else if(isNaN(n3.value)){
            avanzar=false
            smN3.textContent='Debe ser un numero'
        }else if(Number(n3.value)<1|Number(n3.value)>10){
            avanzar=false
            smN3.textContent='Debe estar comprendido entre 1 y 10'
        }else{
            smN3.textContent=''
        }
    }

    function validarN4() {
        let n4 = document.getElementById('n4')
        let smN4 = document.getElementById('smN4')
        if (n4.value=='') {
            avanzar=false
            smN4.textContent='Campo obligatorio'
        }else if(isNaN(n4.value)){
            avanzar=false
            smN4.textContent='Debe ser un numero'
        }else if(Number(n4.value)%5!=0){
            avanzar=false
            smN4.textContent='Debe ser multiplo de 5'
        }else{
            smN4.textContent=''
        }

    }


}