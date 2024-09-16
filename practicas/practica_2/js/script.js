window.onload = () => {

    
    const b1 = document.getElementById('btn1')
    const b2 = document.getElementById('btn2')
    const b3 = document.getElementById('btn3')
    const b4 = document.getElementById('btn4')

    const ul = b1.previousElementSibling
    const li1 = ul.firstElementChild
    const li2 = li1.nextElementSibling
    const li3 = li2.nextElementSibling
    const li4 = li3.nextElementSibling
    const li5 = li4.nextElementSibling

    let lis = [li1,li2,li3,li4,li5]
    b1.addEventListener("click",accion1)
    b2.addEventListener("click",accion2)
    b3.addEventListener("click",accion3)
    b4.addEventListener("click",accion4)

    function accion1(){
        resetColores()
        for (let index = 0; index < lis.length; index++) {
        const random = Math.floor(Math.random()*1000)
        lis[index].textContent=random
        
        }
    }

    function accion2(){
        
        for (let index = 0; index < lis.length; index++) {
        const random = Math.floor(Math.random()*1000)
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
        const random = Math.floor(Math.random()*1000)
        lis[index].textContent=random
        
        }
    }

    function accion4(){
        const n1 = Math.floor(Math.random()*10)
        const n2 = Math.floor(Math.random()*10)
        if (n1===n2) {
            alert("Los numeros son iguales y son: " + n1 )
        }
    }

    function resetColores(){
        for (let index = 0; index < lis.length; index++) {
            lis[index].style.color=null
        }
    }
}