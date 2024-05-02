'use strict'

// calculadora 
// recibir dos numeros por pantalla, validar que si no es numero, pida denuevo el dato
// Mostrar en el body, en una alerta, y por consola el resultado de sumar, mult, restar y dividir 

var numero1, numero2; 

numero1= parseInt (prompt  ("Ingrese el numero 1: ", 1)); 
numero2= parseInt (prompt  ("Ingrese el numero 2: ", 1)); 


 while (isNaN (numero1) || isNaN(numero2) ){
    numero1= parseInt (prompt  ("Ingrese el numero 1: ", 0)); 
    numero2= parseInt (prompt  ("Ingrese el numero 2: ", 1)); 
 }
if(numero2 == 0) {

alert ("NO permitido"); 

}
else {  
   alert( "Suma =  " +  (numero1 +  numero2) + "\n Resta = " + (numero1-numero2) + "\n Multiplicación = " + (numero1*numero2) +"\n División "+
(numero1/numero2));

document.write ( "<h2> Calculadora </h2> <br/>" ); 
document.write ( "<h3>"+  "Suma =  " +  (numero1 +  numero2) + " <br/> Resta = " + (numero1-numero2) + "<br/> Multiplicación = " + (numero1*numero2) +"<br/> División "+ (numero1/numero2)     +" </h3> <br/>" ); 

console.log( "Suma =  " +  (numero1 + numero2) + "\nResta = " + (numero1-numero2) + "\nMultiplicación = " + (numero1*numero2) +"\nDivisión "+
(numero1/numero2)); 


}


















