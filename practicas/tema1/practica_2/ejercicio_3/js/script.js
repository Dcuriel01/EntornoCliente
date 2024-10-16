const b1 = document.getElementById('btn1')
const b2 = document.getElementById('btn2')
const b3 = document.getElementById('btn3')

b1.addEventListener("click",accion1)
b2.addEventListener("click",accion2)
b3.addEventListener("click",accion3)


function accion1() {
    setInterval(() => {
        let cajas = document.querySelector(".etiquetaR").children
        for (let caja of cajas) {
            const random = generarNum(1000)
            caja.textContent=random
        }
    }, 3000);
}

function accion2() {
    let cajas = document.querySelector(".etiquetaR").children
        for (let caja of cajas) {
            caja.style.backgroundColor=generarColor()
        }   
    setInterval(() => {
        for (let caja of cajas) {
            caja.style.backgroundColor=generarColor()
        }   
    }, 3000);
    
}

function accion3() {
    let cajas = document.querySelector(".etiquetaR").children
    for (let caja of cajas) {
        caja.textContent=prompt("Indique un numero")
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

function resetColor(){
    let cajas = document.querySelector(".etiquetaR").children
    for (let caja of cajas) {
        caja.style.backgroundColor=null
    }
}
function resetNum(){
    let cajas = document.querySelector(".etiquetaR").children
    for (let caja of cajas) {
        caja.textContent=""
    }
}