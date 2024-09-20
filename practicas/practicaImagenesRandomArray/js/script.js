const cuerpo = document.body
const boton = document.createElement('button')
boton.textContent='Cargar imagenes'
cuerpo.appendChild(boton)
let sexo
let imagenes = definirArray()
boton.onclick=()=>{
    
    let nImagenes = prompt("Indique el número de imagenes que quieres")
    if (nImagenes<5 || nImagenes>50) {
        alert("Error en el número")
    }else{
        for (let index = 0; index < imagenes.length; index++) {
            if (index<nImagenes) {
                num = generarNum(26)
            if (index%2==0) {
                sexo='women'
            }else{
                sexo='men'
            }
            imagenes[index].setAttribute("src","https://randomuser.me/api/portraits/" + sexo + "/" + num + ".jpg");
            cuerpo.append(imagenes[index]);
            }else{
                delete(imagenes[index])
            }
            
        }
    }
  
   
}

function generarNum(max) {
    const random = Math.floor(Math.random() * max + 1);
    return random;
    
}
function definirArray() {
    let imagenes=[]
    for (let index = 0; index < 50; index++) {
        const imagenX = document.createElement("img");
        imagenes.push(imagenX)
    }
    return imagenes
}