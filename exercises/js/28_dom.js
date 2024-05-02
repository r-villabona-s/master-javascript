"use strict";
// Dom
// obtener elementos dl DOM con in id concreto
//var caja = document.getElementById("mi_caja");
var caja = document.querySelector("#mi_caja");
caja.innerHTML = " ahora";
caja.style.background = "blue";
caja.style.color = "yellow";
caja.className = "hola ";
console.log("contenido " + caja);

function color(color) {
  caja.style.background = color;
}

//Seleccionar elementos por su etiqueta
var todosDivs = document.getElementsByTagName("div");
console.log("   contenido " + todosDivs);
//Seleccionar elementos por su clase
