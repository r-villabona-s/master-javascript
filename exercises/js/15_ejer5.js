'use strict';

// hacer un programa que muestre los numeros divisores de un numero ingresado por el usuario


var numero =  parseInt(prompt("Ingresa el numero: ", 0)); 


while (isNaN(numero) ) {
    numero =  parseInt(prompt("Ingresa el numero: ", 0)); 
}

for( var i = 1; i <= numero; i++ ) {   

if (numero%i == 0) {
   console.log ("el numero "+ i + " es un divisor de : " + numero); 

}

}
