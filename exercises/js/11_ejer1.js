'use strict';

// pide dos numeros y los comapare 

var num1 = prompt ("ingrese el numero 1:",0); 
var num2 = prompt ("ingrese el numero 2:", 0);

/*if (parseInt(num1) > parseInt (num2)) {

alert ("numero 1: " + num1 + " es mayor que numero 2 " + num2); 

}

else if ((parseInt(num2) > parseInt (num1))) {

alert ("numero 2: " + num2 + " es mayor que num 1: " + num1);

}
else {alert ( "los numeros son iguales "); 
}
*/
 //version 2 validad  los numeros 

while (isNaN (num1)  ||  isNaN (num2) ){ 
    
num1 = prompt ("ingrese el numero 1:",0); 
var num2 = prompt ("ingrese el numero 2:", 0);

}


if (parseInt(num1) > parseInt (num2)) {

    alert ("numero 1: " + num1 + " es mayor que numero 2 " + num2); 
    
    }
    
    else if ((parseInt(num2) > parseInt (num1))) {
    
    alert ("numero 2: " + num2 + " es mayor que num 1: " + num1);
    
    }
    else {alert ( "los numeros son iguales "); 
    }








