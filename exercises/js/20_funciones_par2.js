"use strict";
//parametros RESTS Y SPREAD

//rest
function listadoFrutas(fruta1, fruta2, ...resto_frutas) {
  console.log("fruta1 " + fruta1);
  console.log("fruta2 " + fruta2);
  console.log("resto_frutas " + resto_frutas);
}
// spread

var frutas = ["papaya", "pitaya"];

listadoFrutas(...frutas, "peras", "sandia", "tomate", "melon", "coco");
