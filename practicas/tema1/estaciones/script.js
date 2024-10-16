window.onload=inicio()

function inicio() {
    let otonio = document.getElementById('otonio')

    let h1Oto =otonio.previousElementSibling
    h1Oto.style.backgroundColor = 'red'

    let hijosOto = otonio.children
    for (const hijo of hijosOto) {
        hijo.style.backgroundColor='orange'
    }

    let verano = document.getElementById('verano')

    let h1Ver =verano.previousElementSibling
    h1Ver.style.backgroundColor = 'green'

    let hijosVer = verano.children
    for (const hijo of hijosVer) {
        hijo.style.backgroundColor='yellow'
    } 

    for (const hijo of hijosVer) {
        if (hijo.textContent=='Pepino') {
            hijo.style.backgroundColor='blue'
            hijo.previousElementSibling.style.backgroundColor='pink'
            hijo.nextElementSibling.style.backgroundColor='purple'
        }
    }

    let primavera = document.getElementById('primavera')

    let h1Pri =primavera.previousElementSibling
    h1Pri.style.backgroundColor = '#ff2299'

    let hijosPri = primavera.children
    let porDebajo = false
    for (const hijo of hijosPri) {
        if (!porDebajo) {
            hijo.style.backgroundColor='blue'
        }else{
            hijo.style.backgroundColor='coral'
        }

        if(hijo.textContent=='cebollas') {
            hijo.style.backgroundColor='green'
            porDebajo=true
        }
    }
}