//Declaro lo necesario para el ejercicio
const urlJson = 'datos.json'
const menu = document.querySelector('#navmenu ul')
const lista = menu.querySelectorAll('.dropdown')
//Encuentro los li del la nav bar en estos 3 pasos
const lis = lista[0].querySelectorAll('li')
//Encuentro la lista del breadCrumbs
const breadCrum = document.querySelector('.breadcrumbs ol')
//Identifico el contenedor de las imagenes y las imagenes por separado
const contenedorImagenes = document.querySelectorAll('.gallery-item.h-100')
const imagenes = document.querySelectorAll('.gallery-item.h-100 img')
window.addEventListener('load', inicio)

function inicio() {
    //Divido la lista quedandome con los 5 li utiles
    let listaBien = []
    for (let i = 0; i < 5; i++) {
        listaBien[i] = lis[i]
    }
    //Recorro la lista de los 5 li
    listaBien.forEach(li => {
        //Les asigno un evento
        li.addEventListener('click', () => {
            //Compruebo el contenido del li para saber que tipo de imagenes debo pasar
            let tipo = ''
            switch (li.querySelector('a').textContent) {
                case 'Nature':
                    tipo = 'naturaleza'
                    break;
                case 'People':
                    tipo = 'gente'
                    break;
                case 'Architecture':
                    tipo = 'arquitectura'
                    break;
                case 'Animals':
                    tipo = 'animales'
                    break;
                case 'Sports':
                    tipo = 'deportes'
                    break;
            }
            //En el breadCrumb compruebo que solo tenga 2 li en caso contrario borro el 3 para dar paso al nuevo
            const breadCrumLi = breadCrum.querySelectorAll('li')
            if (breadCrumLi.length > 2) {
                breadCrum.removeChild(breadCrumLi[2])
            }
            //Genero el nuevo li con el nombre del li pulsado anteriormente 
            const liOl = document.createElement('li')
            liOl.textContent = li.querySelector('a').textContent
            breadCrum.appendChild(liOl)
            //Leo el fichero Json
            fetch(urlJson)
                .then((response) => response.json())
                .then((datos) => mostrar(datos))
                .finally(() => console.log("Terminado."))
                .catch((error) => console.log(error));
            //Trabajo con los datos del fichero
            function mostrar(datos) {
                //Declaro una variable i la cual sirve para moverse entres las etiquetas img 
                //Y para saber cuando todas estan rellenas y salirse del while
                let i = 0
                //El while finaliza cuando todas las img se han rellenado
                while (i != 8) {
                    //Recorro el json tantas veces como necesite hasta rellenar las img
                    datos.forEach(dato => {
                        //Compruebo que la imagen es del tipo buscado
                        if (tipo == dato.tipo) {
                            //Le doy la nueva ruta
                            imagenes[i].setAttribute('src', dato.imagen)
                            //Compruebo si el ya se ha creado un atributo en ese caso lo borro para dar paso al siguiente
                            if (contenedorImagenes[i].children.length>2) {
                                contenedorImagenes[i].removeChild(contenedorImagenes[i].lastElementChild)
                            }
                            //Genero la estiqueta span con el texto que viene en el Json
                            let span = document.createElement('span')
                            span.textContent = dato.texto
                            contenedorImagenes[i].appendChild(span)
                            i++
                        }
                    });
                }


            }
        })
    });

}

