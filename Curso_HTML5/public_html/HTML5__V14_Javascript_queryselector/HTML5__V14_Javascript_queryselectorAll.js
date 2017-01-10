/**
 @Created on : 10-ene-2017, 1:47:07
 @Author     : RVS
 @Pag        :
 @version    :
 */

//2º DEVUELVE TODOS LOS ELEMENTOS con el atributo CSS
function ejecuta() {
//  esta funcion se ejecuta cuando se pulse el elemento que tenga el atributo querySelectorALL
// Devuelve todos los elementos y le decimos a que etiquetas queremos apuntar fuera del DIV
// REFERENCIA AL 1º elemento
  document.querySelectorAll("#principal p")[0].onclick = saludo;
// DEVUELVE UN ARRAY
}

//3º Ejecuta este elemento    
function saludo() {
  alert("HELLO FRIEND");
}

//hacer que todas las ventanas 
//cuando cargue esta ventaja se ejecute esta funcion
//window.onload = saludo;
//se ejecute este codigo cuando el usuario pulse el evento del elemento
//crear una funcion


//1º se carga este elemento
//ejecuta un evento de ventana 
//cuando cargue una ventana ejecuta que hay dentro , que lo que hace es identificar la 1º <p>
//cuando el usuario pulse la etiqueta ejecuta la linea de codigo que haye dentro 
//lo cual ejecutara el alert que haye dentro
window.onload = ejecuta;

 