// const urlApi = 'getCiudades.php.json'
const urlApi = 'http://camacho.atwebpages.com/carouselCiudades2/getCiudades.php'
const tabla = document.querySelector('tbody')
//Realizamos la solicitud
fetch(urlApi)
    .then((response) => response.json())
    .then((datos) => mostrar(datos))
    // .finally(() => alert("Terminado."))
    // .catch((error) => alert(error));


function mostrar(datos) {
    datos.forEach(webc => {
        const tr = document.createElement('tr')
        tabla.appendChild(tr)

        const tdNombre = document.createElement('td')
        tdNombre.textContent = webc.ciudad_nombre
        tr.appendChild(tdNombre)

        const tdPob = document.createElement('td')
        tdPob.textContent = webc.ciudad_poblacion
        tr.appendChild(tdPob)

        const tdVid = document.createElement('td')
        tdVid.innerHTML=webc.video
        tr.appendChild(tdVid)

        const tdImg = document.createElement('td')
        const img = document.createElement('img')
        img.setAttribute('src',webc.imagen)
        img.setAttribute('width','300px')
        tdImg.appendChild(img)
        tr.appendChild(tdImg)

        const tdMap = document.createElement('td')
        tdMap.innerHTML=webc.mapa
        tr.appendChild(tdMap)

        const tdId = document.createElement('td')
        tdId.textContent = webc.ciudad_ID
        tr.appendChild(tdId)
    })
}