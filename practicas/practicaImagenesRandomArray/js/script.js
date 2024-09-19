const cuerpo = document.body
const boton = document.createElement('button')
boton.textContent='Cargar imagenes'
cuerpo.appendChild(boton)
let imagenes=[]
let sexo
for (let index = 0; index < 20; index++) {
    const imagenX = document.createElement("img");
    imagenes.push(imagenX)
}
boton.onclick=()=>{
    for (let index = 0; index < imagenes.length; index++) {
        num = generarNum(26)
        if (index%2==0) {
            sexo='women'
        }else{
            sexo='men'
        }
        imagenes[index].setAttribute("src","https://randomuser.me/api/portraits/" + sexo + "/" + num + ".jpg");
        cuerpo.append(imagenes[index]);
    }
}
function generarNum(max) {
    const random = Math.floor(Math.random() * max + 1);
    return random;
    
}