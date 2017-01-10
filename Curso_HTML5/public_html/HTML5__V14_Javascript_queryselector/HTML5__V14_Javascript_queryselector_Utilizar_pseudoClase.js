/**
 @Created on : 10-ene-2017, 1:47:07
 @Author     : RVS
 @Pag        :
 @version    :
 */

//2º Ejecutar queryselector
function ejecuta() {
//  esta funcion se ejecuta cuando se puse el elemento que tenga el atributo querySelector
// tiene que ser un parrafo y ademas el ultimo elemento hijo
  document.querySelector("#principal p:last-child").onclick = saludo;
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

 