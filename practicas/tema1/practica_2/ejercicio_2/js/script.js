const b1 = document.getElementById("btn1")
const b2 = document.getElementById("btn2")
const b3 = document.getElementById("btn3")
const b4 = document.getElementById("btn4")
const b5 = document.getElementById("btn5")
const b6 = document.getElementById("btn6")

b1.addEventListener("click",accion1)
b2.addEventListener("click",accion2)
b3.addEventListener("click",accion3)
b4.addEventListener("click",accion4)
b5.addEventListener("click",accion5)
b6.addEventListener("click",accion6)

function accion1() {
    const div1 = document.getElementById("c1")
    div1.style.backgroundColor="green"
}

function accion2() {
    const div2 = document.getElementById("c2")
    div2.style.backgroundColor="#33ffdd"
    div2.textContent=generarNum(1000)
    
}

function accion3() {

    let n1 = prompt("Dime un número para la suma")
    let n2 = prompt("Dime otro número para la suma")
    n1=parseInt(n1)
    n2=parseInt(n2)
    const div3 = document.getElementById("c3")
    div3.textContent=n1+n2
    
}

function accion4() {
    const div4 = document.getElementById("c4")
    let numUser=0
    let numJuego=generarNum(100)
    let contador =0
    while (numUser!==numJuego) {
        numUser = parseInt(prompt("Adivina el numero:"))
        if (numUser>numJuego) {
            alert("El numero es menor")
        }else if (numUser<numJuego) {
            alert("El numero es mayor")
        }
        contador++
    }
    alert("Has acertado el número era: " + numJuego)
    div4.textContent="Numero intentos " + contador
    
}
function accion5() {
    let fecha = new Date()
    const div5 = document.getElementById("c5")
    div5.innerHTML=fecha.getHours()+":"+fecha.getMinutes("mm")+"<br>"+fecha.getDay()+"/"+fecha.getMonth()+"/"+fecha.getFullYear()
    
}
function accion6() {
    const div6 = document.getElementById("c6")
    setInterval(() => {
        let fecha = new Date()
        div6.innerHTML=fecha.getHours()+":"+fecha.getMinutes("mm")+":"+fecha.getSeconds()
    }, 1000);
    
    
}

function generarNum(max){
    const random = Math.floor(Math.random()*max+1)
    return random
}