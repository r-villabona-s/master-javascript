'use strict';

// hacer un programa que nos diga si un numero es par o impar 

var numero = parseInt(prompt("INgrese el numero: ", 0)); 


while ( isNaN(numero) )  {
    numero = parseInt(prompt("INgrese el numero: ", 0)); 
}

if (numero%2 == 0) {

    console.log(" Es numero es par "); 

}
else {
    console.log(" Es numero es impar "); 

}