window.addEventListener("load",()=>{
    const contenedor = document.querySelector('.gallery')
    let imagenes=contenedor.querySelectorAll('img')
    for (let index = 0; index < 10; index++) {
        num = generarNum(19)
        imagenes[index].setAttribute("src",`img/${num}.JPG`)
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

