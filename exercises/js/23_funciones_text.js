"use strict";
//transformacion de textos
var numero = 444;
var texto1 = "Bienvenido al curso al ";
var texto2 = "es un buen curso";

var dato = numero.toString();
var dato2 = texto1.toUpperCase();
var dato2 = texto2.toLowerCase();
var dato2 = texto2.concat(texto2);

// busquedas
console.log(texto1.indexOf("al"));
console.log(texto1.lastIndexOf("al"));
console.log(texto1.search("al"));
console.log(texto1.search("perro"));
console.log(texto1.match("al"));
console.log("umm", texto1.matchAll("al"));
console.log(texto1.substring(0, 3));
console.log(texto1.charAt(0));
console.log(texto2.startsWith("es"));
console.log(texto2.endsWith("es"));
console.log("includes ", texto2.includes("es"));

//reemplazar textos
console.log("reem ", texto2.replace("es", "culo"));
console.log("slice ", texto2.slice(4));
console.log("slice ", texto2.slice(4, 5));
console.log("split ", texto2.split());
console.log("split ", texto2.split(" "));
console.log("trim ", texto2.trim());
