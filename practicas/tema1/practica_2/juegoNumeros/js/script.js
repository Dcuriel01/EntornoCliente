const b1 = document.getElementById("btn1")

b1.addEventListener("click",juego)

function juego() {
  const h2 = document.getElementById("buscado");
  const intentos = document.getElementById("intentos");
  let numUser = 0;
  let numJuego = generarNum(100);
  let contador = 0;
  while (numUser !== numJuego) {
    numUser = parseInt(prompt("Adivina el numero:"));
    if (numUser > numJuego) {
      alert("El numero es menor");
    } else if (numUser < numJuego) {
      alert("El numero es mayor");
    }
    contador++;
  }
  alert("Has acertado el número era: " + numJuego);
  intentos.textContent="intentos: " + contador

  h2.textContent = numJuego;
}

function generarNum(max){
  const random = Math.floor(Math.random()*max+1)
  return random
}
