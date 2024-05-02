'use strict';

// Mostrar todos numeros impares entre dos numeros introducidos por el usuario 

var numerro1 = parseInt(prompt (" Ingresa el numero 1: ", 0)); 
var numerro2 = parseInt(prompt (" Ingresa el numero 2: ", 0)); 

while (isNaN (numerro1) || isNaN (numerro2 )) { 
    
     numerro1 = parseInt(prompt (" Ingresa el numero 1: ", 0)); 
     numerro2 = parseInt(prompt (" Ingresa el numero 2: ", 0));   

}
for (var i  = numerro1; i <=numerro2; i ++ ) {  

if (i%2 != 0) {   
 document.write ( "<h3> El número:  "+ i + " es impar</h3>" + "<br/>" ); 

 }
}
