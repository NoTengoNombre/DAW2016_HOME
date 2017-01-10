/**
 @Created on : 10-ene-2017, 1:47:07
 @Author     : RVS
 @Pag        :
 @version    :
 */

//detecte los elementos p 
function ejecuta() {
//  document. hacer una referencia a lo <p>
// seleccionar una etiquetas 
// con los corchetes [] le decimos que etiqueta queremos especificar
//  le estamos diciendo que detecte un elemento p dentro del documento - 
// ESTA FUNCION SE EJECUTA DENTRO DE OTRA , AL LLAMAR A LA OTRA PAGINA USAMOS EL window.onload
// al cargar este documento ejecutara esta instruccion


//RECORRER TODOS LOS ELEMENTOS P CON UN FOR

  for (var i = 0; i < 3; i++) {
//    alert(i);
    document.getElementsByTagName("p")[i].onclick = saludo; // esto devuelve un array con la posicion del elemento , la 1º <p>
  }
}

//este metodo lo llama ejecuta para mostrar un mensaje en el parrafo 2
function saludo() {
  alert("HELLO FRIEND");
}

//hacer que todas las ventanas 
//cuando cargue esta ventaja se ejecute esta funcion
//window.onload = saludo;
//se ejecute este codigo cuando el usuario pulse el evento del elemento
//crear una funcion


//ejecuta un evento de ventana 
//cuando cargue una ventana ejecuta que hay dentro , que lo que hace es identificar la 1º <p>
//cuando el usuario pulse la etiqueta ejecuta la linea de codigo que haye dentro 
//lo cual ejecutara el alert que haye dentro
window.onload = ejecuta;

//Le estamos diciendo 
//posicion [0] = p 
//posicion [1] = p
//posicion [2] = p