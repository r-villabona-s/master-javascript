'use strict'

//tabla de multiplicar de un numero introducido por pantalla.

//var numero = parseInt(prompt ("Ingrese el numero: ", 1)); 
//var tabla = parseInt(prompt ("Ingrese el numero hasta el cual se calcula la tabla de *: ", 0)); 


for(var i=1; i<=10; i++){

document.write("<h1> Tabla del "+  i + " </h1>" + "<br/>");  

for (var j=1; j<= 10; j++ ) {

   document.write (i + " X " +  j + " = " + i * j +  "<br/>");  

}


}



