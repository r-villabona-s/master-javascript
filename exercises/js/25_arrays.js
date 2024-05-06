"use strict";

// arrays

var paises = ["holanda", "alemania", "colomba", 52, true];

//alert(paises);

var lenguajes = new Array("php", "js", "go", "java");
console.log(lenguajes[0]);
console.log("len ", lenguajes.length);

var elemento = parseInt(prompt("Que elemento quiees ? ", 0));
if (elemento > lenguajes.length - 1) {
  alert("Introduce un numero entre 0 y " + parseInt(lenguajes.length - 1));
} else {
  alert("el lelemento seleccionado es " + lenguajes[elemento]);
}

document.write("<h1>Lenguajes de programación </h1>");
array.forEach((element, index, data) => {});
