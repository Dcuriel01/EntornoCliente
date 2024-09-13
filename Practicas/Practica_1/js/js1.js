console.log("Accedo al js1")
// alert("Bienvenido al JS")
// window.onload=inicio;

window.addEventListener("load",activar)

function activar(){
    const boton = document.querySelector("#bActivar")
    boton.addEventListener("click",inicio)
}

function inicio(){
    // document.body.style.backgroundColor='red'
    const encab1=document.body.querySelector("h1")
    console.log("Emcabezado 1 " + encab1.tagName)
    encab1.style.backgroundColor='grey'
    const encab2=document.querySelector("h2")
    encab2.style.backgroundColor='blue'
    with (document.body.style){
        color='orange'
        backgroundColor='yellow'
        border='2px solid green'
        fontFamily='sans'
        padding = '15px'
        margin = '20px'
        // opacity='0,5'
    }

    setTimeout(() => {
        document.body.style.backgroundColor='grey'
    }, 5000);

    setInterval(() => {
        if(document.body.style.visibility === 'visible'){
            document.body.style.visibility = 'hidden'
        }else{
            document.body.style.visibility = 'visible'
        }
    },1000)


}
