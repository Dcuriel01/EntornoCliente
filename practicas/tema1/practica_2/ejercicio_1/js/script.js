window.onload = () => {
    const b1 = document.getElementById('btn1')
    const b2 = document.getElementById('btn2')
    const b3 = document.getElementById('btn3')
    const b4 = document.getElementById('btn4')

    const ul = b1.previousElementSibling

    let lis = ul.children
    b1.addEventListener("click",accion1)
    b2.addEventListener("click",accion2)
    b3.addEventListener("click",accion3)
    b4.addEventListener("click",accion4)

    function accion1(){
        resetColores()
        for (let index = 0; index < lis.length; index++) {
        const random = generarNum(1000)
        lis[index].textContent=random
        }
    }
    
    function accion2(){
        
        for (let index = 0; index < lis.length; index++) {
        const random = generarNum(1000)
        lis[index].textContent=random
        
        if (lis[index].textContent < 500) {
            lis[index].style.color="green"
        }else{
            lis[index].style.color="blue"
        }
        }
    }
    
    function accion3(){
        resetColores()
        for (let index = 0; index < lis.length; index++) {
        const random = generarNum(1000)
        const color = generarColor()
        lis[index].textContent=random
        lis[index].style.color=color
        }
    }
    
    function accion4(){
        resetNum()
        resetColores()
        const n1 = generarNum(10)
        const n2 = generarNum(10)
        lis[0].textContent=n1
        lis[1].textContent=n2
        if (n1===n2) {
            alert("Los numeros son iguales y son: " + n1 )
        }
    }

    function resetColores(){
        for (let index = 0; index < lis.length; index++) {
            lis[index].style.color=null
        }
    }

    function resetNum(){
        for (let index = 0; index < lis.length; index++) {
            lis[index].textContent=null
        }
    }

    
}
function generarNum(max){
    const random = Math.floor(Math.random()*max+1)
    return random
}
function generarColor(){
    const r = generarNum(255)
    const g = generarNum(255)
    const b = generarNum(255)
    const color = "RGB(" + r + "," + g + "," + b + ")"
    return color
}


