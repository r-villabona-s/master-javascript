"use strict";
//funcione anonimas, sin nombre

var pelicula = function (nombre) {
  return "el nombre de la peli es : " + nombre;
};

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos) {
  var sumar = numero1 + numero2;
  sumaYmuestra(sumar);
  sumaPorDos(sumar);

  return sumar;
}

sumame(
  5,
  7,
  function (dato) {
    console.log("la suma es ", dato);
  },
  function (dato) {
    console.log("La suma por dos es ", dato * 2);
  }
);
// fecha
sumame(
  5,
  7,
  (dato) => {
    console.log("Fecha la suma es ", dato);
  },
  (dato) => {
    console.log("Flecha La suma por dos es ", dato * 2);
  }
);
