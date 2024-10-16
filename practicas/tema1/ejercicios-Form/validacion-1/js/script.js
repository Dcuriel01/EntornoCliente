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
  let contieneNum = false
  let nombre = document.getElementById("nombre").value
  let smNombre = document.getElementById("smNombre")
  for (let i = 0; i < nombre.length; i++) {
    if (!isNaN(nombre.charAt(i))) {
      contieneNum=true
    }
  }
  if (nombre.length<3) {
    avanzar=false
    smNombre.textContent='Debe tener al menos 3 letras'
  } else if (contieneNum) {
    avanzar=false
    smNombre.textContent='Debe ser unicamente letras'
  }else{
    smNombre.textContent=''
  }
  
  //Tercer cuadro el apellido
  //Solo al menos 3 caracteres y solo letras
  contieneNum = false
  let apellido = document.getElementById("apellidos").value
  let smApellido = document.getElementById("smApellidos")
  for (let i = 0; i < apellido.length; i++) {
    if (!isNaN(apellido.charAt(i))) {
      contieneNum=true
    }
  }
  if (apellido.length<3) {
    avanzar=false
    smApellido.textContent='Debe tener al menos 3 letras'
  } else if (contieneNum) {
    avanzar=false
    smApellido.textContent='Debe ser unicamente letras'
  }else{
    smApellido.textContent=''
  }

  //Cuarto cuadro nota de SGE
  //Del 1 al 10 ambos incluidos
  let sge = document.getElementById("sge").value
  let smSGE = document.getElementById("smSGE")
  if(isNaN(sge)){
    avanzar=false
    smSGE.textContent='Tiene que ser un numero'
  }else if (sge>10|sge<1) {
    avanzar=false
    smSGE.textContent='Debe estar entre 1 y 10'
  }else{
    smSGE.textContent=''
  }

  //Quinto cuadro nota de Di
  //Del 1 al 10 ambos incluidos
  let di = document.getElementById("di").value
  let smDI = document.getElementById("smDI")
  if(isNaN(di)){
    avanzar=false
    smDI.textContent='Tiene que ser un numero'
  }else if (di>10|di<1) {
    avanzar=false
    smDI.textContent='Debe estar entre 1 y 10'
  }else{
    smDI.textContent=''
  }

  //Sexto cuadro nota de AD
  //Del 1 al 10 ambos incluidos
  let ad = document.getElementById("ad").value
  let smAD = document.getElementById("smAD")
  if(isNaN(ad)){
    avanzar=false
    smAD.textContent='Tiene que ser un numero'
  }else if (ad>10|ad<1) {
    avanzar=false
    smAD.textContent='Debe estar entre 1 y 10'
  }else{
    smAD.textContent=''
  }

  //Septimo cuadro nota de PSP
  //Del 1 al 10 ambos incluidos
  let psp = document.getElementById("psp").value
  let smPSP = document.getElementById("smPSP")
  if(isNaN(psp)){
    avanzar=false
    smPSP.textContent='Tiene que ser un numero'
  }else if (psp>10|psp<1) {
    avanzar=false
    smPSP.textContent='Debe estar entre 1 y 10'
  }else{
    smPSP.textContent=''
  }

  //Octavo cuadro nota de PMM
  //Del 1 al 10 ambos incluidos
  let pmm = document.getElementById("pmm").value
  let smPMM = document.getElementById("smPMM")
  if(isNaN(pmm)){
    avanzar=false
    smPMM.textContent='Tiene que ser un numero'
  }else if (pmm>10|pmm<1) {
    avanzar=false
    smPMM.textContent='Debe estar entre 1 y 10'
  }else{
    smPMM.textContent=''
  }

  return avanzar
};
