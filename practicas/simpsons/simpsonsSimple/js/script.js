window.addEventListener("load",()=>{
    const contenedor = document.querySelector('.gallery')
    let imagenes=[]
    for (let index = 0; index < 10; index++) {
        const imagenX = document.createElement("img")
        imagenX.setAttribute("src",`img/5.JPG`)
        contenedor.appendChild(imagenX)
        imagenes.push(imagenX)
    } 
})
