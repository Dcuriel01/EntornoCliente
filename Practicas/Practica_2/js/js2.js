window.onload=inicio;

function inicio(){
    const div1=document.body.firstElementChild
    div1.style.backgroundColor="green"
    const div4=document.body.lastElementChild.previousElementSibling
    div4.style.backgroundColor="brown"
    const div2=div1.nextElementSibling
    div2.style.backgroundColor="red"
    const div3=div4.previousElementSibling
    div3.style.backgroundColor="grey"
    const tabla = div1.firstElementChild.firstElementChild
    const tr3 = tabla.lastElementChild
    tr3.style.color="red"
    const url3 = div2.lastElementChild
    url3.href="as.com"
    url3.textContent="As"
}
