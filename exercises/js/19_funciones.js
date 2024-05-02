"use strict";

//funciones

function calculadora() {
  return "hola mi pez";
}

function calc(numero1, numero2) {
  return numero1 + numero2;
}

// parameters opcionales
function porConsola(numero1, numero2) {
  console.log("suma: " + numero1 + numero2);
}

function porPantalla(numero1, numero2) {
  document.write("suma " + (numero1 + numero2));
}
function calc(numero1, numero2, mostrar = false) {
  if (mostrar == false) {
    porConsola(numero1, numero2);
  } else {
    porPantalla(numero1, numero2);
  }
  return true;
}

calc(4, 989);
// for (let i = 0; i < 11; i++) {
//     console.log(calc(i, 10));
//   }
