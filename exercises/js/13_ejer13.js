'use strict';
//hacer un programa que muetre los numeros entre dos numeros introducidos por el usuario.

var num1,num2; 

num1= parseInt(prompt ("introduzca el numero 1 ", 0));
num2= parseInt(prompt("introduzca el numero 2", 0) ); 


document.write ("<h1> Desde: " + num1+ " hasta: " + num2 +" están los números: </h1>");

for ( var i = num1;  i<=num2 ;  i++ ) {

document.write  (i +  " <br/>"); 



}


