window.addEventListener("load", inicio);

function inicio() {
  // contenedor existente
  const cuerpo = document.body;
  // crear contenido principal
  const divPrincipal = document.createElement("div");
  divPrincipal.className = "contenedorPrincipal";
  divPrincipal.textContent = "Contenedor principal";
  cuerpo.appendChild(divPrincipal);

  // crear contenido secundario
  const divSecundario = document.createElement("div");
  divSecundario.className = "contenedorSecundario";
  divSecundario.textContent = "Contenedor secundario";
  divPrincipal.appendChild(divSecundario);
  const listaBotones = [
    "botón 1",
    "botón 2",
    "botón 3",
    "botón 4",
    "botón 5",
    "botón 6",
    "botón 7",
    "botón 8",
  ];

  listaBotones.forEach((item, indice) => {
    const nBoton = document.createElement("button");
    nBoton.className = "botonX";
    nBoton.textContent = item;
    divSecundario.appendChild(nBoton);
    nBoton.addEventListener("click", () => {
      const imagenX = document.createElement("img");
      if (indice == 7) {
        sexo = "lego";
        num = generarNum(8);
      } else if (indice % 2 == 0) {
        sexo = "men";
        num = generarNum(26);
      } else {
        sexo = "women";
        num = generarNum(26);
      }

      imagenX.setAttribute("src","https://randomuser.me/api/portraits/" + sexo + "/" + num + ".jpg");
      divSecundario.appendchild(imagenX);
    });
  });
  function generarNum(max) {
    const random = Math.floor(Math.random() * max + 1);
    return random;
  }
}
