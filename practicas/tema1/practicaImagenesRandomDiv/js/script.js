const cuerpo = document.body
const boton = document.createElement('button')
boton.textContent='Cargar imagenes'
cuerpo.appendChild(boton)
let imagenes=[]
let sexo
let div = document.createElement('div')
cuerpo.appendChild(div)
let pulsado = 0
boton.onclick=()=>{
    if(pulsado>0){
        div.textContent=""
    }
    for (let index = 0; index < 20; index++) {
        const imagenX = document.createElement('img')
        num = generarNum(26)
        if (index%2==0) {
            sexo='women'
        }else{
            sexo='men'
        }
        imagenX.setAttribute("src","https://randomuser.me/api/portraits/" + sexo + "/" + num + ".jpg");
        div.appendChild(imagenX)
        pulsado++
    }
}
function generarNum(max) {
    const random = Math.floor(Math.random() * max + 1);
    return random;
    
}