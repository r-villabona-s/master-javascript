'use strict'
// utilizando un bucle mostrar suma y media de dos numeros hsasta que el usuario meta un num negativo

var num1; 
var suma = 0;
var cont = 0;  

do {

    num1= prompt  (" introduce numeros hasta que metas un negativo "  , 0
     );


if (isNaN(num1)) {
  num1= 0;
}
else if (num1> 0)  {
     cont ++; 
suma += parseInt( num1);

}
else if (cont == 0 )  {
    cont = 1; }


}
while (parseInt(num1) > 0 )  

alert ("suma " + suma    +"\npromedio " + suma/cont  );




