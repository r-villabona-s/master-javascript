"use strict";

var isEdad = false;
var isRead = new Boolean(true);
var edad = 1;

if (!isEdad) {
  console.log("negado");
} else if (isEdad) {
  console.log("else if");
} else {
  console.log("else");
}

console.log(!!(2 == 1));
console.log(isRead);

if (!isRead) {
  console.log("cumple");
}

if (!isEdad && 1 == 1) {
  console.log("cierto");
}

switch (edad) {
  case 1:
    console.log(" pues 1 ");
    break;
  case 2:
    onsole.log(" pues 2 ");
    break;
  case 3:
    console.log(" pues 3 ");
    break;
  default:
    console.log(" default ");
    break;
}
