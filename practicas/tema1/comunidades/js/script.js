window.onload=inicio

function inicio() {
    const comunidades = document.querySelectorAll('h2')

    comunidades.forEach(comunidad=>{
        comunidad.onclick=()=>{
            recorrerProvincias(comunidad)
        }
    })
}

function recorrerProvincias(comunidad) {
    if (comunidad.textContent=='Galicia'||comunidad.textContent=='País Vasco') {
        alert(comunidad.textContent+' Hijo de Norte')
    }else{
        alert(comunidad.textContent+' Hijo de Sur')
    }
    const lista = comunidad.nextElementSibling.children
    let i = 1
    for (const provincia of lista) {
        alert('Hijo ' + i + ': ' + provincia.textContent)
        i++
    }
}