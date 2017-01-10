/**
 @Created on : 10-ene-2017, 1:47:07
 @Author     : RVS
 @Pag        :
 @version    :
 
 getElementsByClassName -> añadirle un estilo concreto y ademas un comportamiento
 identificar el atributo id al elemento class 
 * */

function ejecuta() {
//RECORRER TODOS LOS ELEMENTOS P CON UN FOR
//AGREGAR UN ESTILO CONCRETO AL ELEMENTO : AÑADIR UN COMPORTAMIENTO
//tenemos que indicarle la posicion del array en la posicion 0
  for (var i = 0; i < 2; i++) {
    document.getElementsByClassName("importante")[i].onclick = saludo; // esto devuelve un array - ! necesita almacenar el valor que devuelve
  }
}

//este metodo lo llama ejecuta para mostrar un mensaje en el parrafo 2
function saludo() {
  alert("HELLO FRIEND");
}

//ejecuta un evento de ventana 
//cuando cargue una ventana ejecuta que hay dentro , que lo que hace es identificar la 1º <p>
//cuando el usuario pulse la etiqueta ejecuta la linea de codigo que haye dentro 
//lo cual ejecutara el alert que haye dentro
window.onload = ejecuta;
