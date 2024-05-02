"use strict";

//PLantillas de texto
var nombre = prompt("Ingresa tun nombre ");
var apelldo = prompt("ingresa tus apellidos");

var texto = `<H1> Hola mi nombre es ${nombre} </H1>
  <h3> Mis apellidos son ${apelldo} </h3> 
`;
document.write(texto);
