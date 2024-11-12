//Declaro o creo los elementos que necesito
const cuerpo = document.body
const contenedor = document.createElement('fieldset')
const legend = document.createElement('legend')
legend.textContent='Practica de imagenes'
contenedor.appendChild(legend)
contenedor.className='container gallery'
cuerpo.appendChild(contenedor)
generarImagenes()
function generarImagenes(){
    for (let i = 0; i < 40; i++) {
        let imagenX
        let x = generarNum(40)
        let y = generarNum(2)
        let genero
        //Genero si es hombre o mujer de forma alatoria
        if (y==0) {
            genero = 'women'
        }else{
            genero = 'men'
        }
        imagenX = document.createElement('img')
        imagenX.setAttribute("src","https://randomuser.me/api/portraits/" + genero + "/" + x + ".jpg");
        contenedor.appendChild(imagenX)
        imagenX.addEventListener('click',()=>{
            //Con el if hago que se pueda poner y quitar el borde de forma infinita
            if (imagenX.className==''||imagenX.className=='quitarBorde') {
                imagenX.className='ponerBorde'
            }else if(imagenX.className=='ponerBorde'){
                imagenX.className='quitarBorde'
            }
        })
    }
}
//Funcion para la generación de número random con un maximo dado
function generarNum(max) {
    const random = Math.floor(Math.random() * max);
    return random;
}