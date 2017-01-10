/**
 @Created on : 10-ene-2017, 1:47:07
 @Author     : RVS
 @Pag        :
 @version    :
 */

//2º DEVUELVE TODOS LOS ELEMENTOS con el atributo CSS en un ARRAY
function ejecuta() {
//  esta funcion se ejecuta cuando se pulse el elemento que tenga el atributo querySelectorALL
// Devuelve un ARRAY todos los elementos y le decimos a que etiquetas queremos apuntar dentro del DIV
// REFERENCIA AL 1º elemento
// 4 elementos que tenemos
//    querySelectorALL devuelve 4 elementos se almacena en el array var elementos
  var elementos = document.querySelectorAll("#principal p");
  for (var i = 0; i < elementos.length; i++) {
//    tenemos asignado el evento onclick a todos los elementos del array que son parrafos
//si pulso en los elementos que tiene el selector se ejecutara la funcion saludo
    elementos[i].onclick = saludo;
  }

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

 