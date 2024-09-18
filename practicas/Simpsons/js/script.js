window.addEventListener("load",()=>{
    const contenedor = document.querySelector('.gallery')
    let imagenes=[]
    for (let index = 0; index < 10; index++) {
        const imagenX = document.createElement("img")
        num = generarNum(19)
        imagenX.setAttribute("src",`img/${num}.JPG`)
        contenedor.appendChild(imagenX)
        imagenes.push(imagenX)
    }
    setInterval(() => {
        for (let index = 0; index < 10; index++) {
            num = generarNum(19)
            imagenes[index].setAttribute("src",`img/${num}.JPG`)
        }
    }, 3000);    
    
})
function generarNum(max) {
    const random = Math.floor(Math.random() * max + 1)
    return random;
}

