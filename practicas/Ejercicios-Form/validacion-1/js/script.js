let accion = document.getElementById("validar");
accion.onsubmit = () => {
  let avanzar = true;
  //Primer cuadro el expediente
  //Solo númerico y entre 3 y 5
  let expediente = document.getElementById("expediente")
  let smExpediente = document.getElementById("smExpediente")
  if (expediente.value.length > 5 || expediente.value.length < 3) {
    avanzar = false;
    smExpediente.textContent = "Tiene que tener entre 3 y 5 caracteres"
  } else if (isNaN(expediente.value)) {
    avanzar = false
    smExpediente.textContent = "Tiene que ser un número"
  } else {
    smExpediente.textContent = ""
  }
  //Segundo cuadro el nombre
  //Solo al menos 3 caracteres y solo letras
  let nombre = document.getElementById("nombre").value
  let smNombre = document.getElementById("smNombre")
  if (nombre.length<3) {
    avanzar=false
    smNombre.textContent='Debe tener al menos 3 letras'
  } else if (nombre.indexOf("0123456789")) {
    avanzar=false
    smNombre.textContent='Debe ser unicamente letras'
  }else{
    smNombre.textContent=''
  }
  return avanzar
};
