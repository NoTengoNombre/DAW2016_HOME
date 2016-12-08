/**
 @Created on : 07-dic-2016, 18:27:39
 @Author     : RVS
 @Pag        :
 @version    :
 */

//Guardamos todos los elementos que tenga la clase movil en una variable llamada pieza
var piezas = document.getElementsByClassName('movil');

//Ancho de las piezas
var tamWidh = [134, 192, 134, 163, 134, 163, 134, 192, 134]; // Calculo el tamaño de las piezas
//
//Alto de las piezas
var tamHeight = [163, 134, 163, 134, 192, 134, 163, 134, 163]; // Calculo el tamaño de las piezas

//Recorremos todas las piezas
for (var i = 0; i < piezas.length; i++) {
//Agregamos el ancho y alto a cada pieza con el valor respectivo ubicado en el arrays de ancho y alto
  piezas[i].setAttribute("width", tamWidh[i]);
  piezas[i].setAttribute("height", tamHeight[i]);
//  ! No se ha definido la posicion de las piezas , todas tiene "x = 0,y = 0".
//  Agregamos a las piezas posiciones aleatorias pero a la izquierda y sin superposicion sobre la imagen guia
  piezas[i].setAttribute("x", Math.floor((Math.random() * 10) + 1));
  piezas[i].setAttribute("y", Math.floor((Math.random() * 409) + 1));
// MOVER LAS PIEZAS
//  Agregamos el evento onmousedown a cada 1 de las piezas 
//  Esta funcion accionara la funcion seleccionar elemento
  piezas[i].setAttribute("onmousedown", "seleccionarElemento(evt)");
}

//Variables para almacenar informacion del movimiento
var elementSelect = 0;
var currentX = 0;
var currentY = 0;
var currentPosX = 0;
var currentPosY = 0;

//creamos una nueva funcion 
/**
 * 
 * @param {type} evt
 * @returns {undefined}
 */
function seleccionarElemento(evt) {
// Almacenamos el elemento de cada pieza el cual disparo el evento
//  Anterior -> var elementSelect = evt.target;
//  Nueva-> 
  var elementSelect = reordenar(evt); // 1ºa transferimos el elemento Seleccionado
  currentX = evt.clientX;
  currentY = evt.clientY;
// Guardamos la posicion del mouse en el instante que se produjo el click
//en las variables currentX y currentY
//mediante 'getAttribute' obtenemos el valor el valor de la posicion X , Y del elemento
  currentPosX = parseFloat(elementSelect.getAttribute("x"));
  currentPosY = parseFloat(elementSelect.getAttribute("y"));
// agregamos el evento onmousemove al elemento seleccionado
// este evento de movimiento llamara a la funcion 'moverElemento'
  elementSelect.setAttribute("onmousemove", "moverElemento(evt)");
}

/**
 * 
 * @param {type} evt
 * @returns {undefined}
 */
function moverElemento(evt) {
//  Calculamos la funcion la distancia recorrida en X con una diferencia entre la posicion
//del mouse y la actual para que el elemento movilice la misma la misma distancia que se ha desplazado el mouse
// agregamos esta diferencia a su posicion almacenada en las variables currentPos 
// mediante setAttribute actualizamos la posicion del elemento
  var dx = evt.clientX - currentX;
  var dy = evt.clientY - currentY;
  currentPosx = currentPosx + dx;
  currentPosy = currentPosy + dy;
  elementSelect.setAttribute("x", currentPosx);
  elementSelect.setAttribute("y", currentPosy);
//  para el siguiente movimient guardamos la posicion del mouse
  currentX = evt.clientX;
  currentY = evt.clientY;
//  Para soltar la pieza al dejar de pulsar el boton izq del raton añadimos los 
//siguientes eventos
  elementSelect.setAttribute("onmouseout", "deseleccionarElemento(evt)");
  elementSelect.setAttribute("onmouseup", "deseleccionarElemento(evt)");
}

function deseleccionarElemento(evt) {
//  17ºa Declarar la funcion para que compruebe si se han añadido todas las piezas '9'
//       Si es asi , suene la musica
  testing();
//  Si existe un elemento seleccionado mediante removeAttribute 
//  eliminamos los elementos añadidos en la seccion seleccionar elemento
//  y eliminamos la informacion de la variable selectElement
  if (elementSelect != 0) {
    elementSelect.removeAttribute("onmousemove");
    elementSelect.removeAttribute("onmouseout");
    elementSelect.removeAttribute("onmouseup");
    elementSelect = 0;
//  Ahora podemos mover las piezas de forma independiente
  }
}

//Al mover una imagen que ha sido añadida al inicio y que sobre otra que fue añadida al final se pierde el arrastre 
//Esto se puede solucionar moviendo la posicion al momento de ser seleccionado
//nos vamos al html y a cada elemento de las piezas le agregamos 'class="padre"' y 'id="0" al 8'

//2ºa Creamos una variable global 
//que almacenara todo el entorno grafico
var entorno = document.getElementsById('entorno');



function reordenar(evt) {
// 1ºa Guardamos en la variable padre el elemento el contenedor de la pieza seleccionada
  var padre = evt.target.parentNode;
// Hacemos una copia con el metodo cloneNode(true);
  var clone = padre.cloneNode(true);
  // con getAttribute(id) seleccionamos el elemento del padre 
  var id = padre.getAttribute("id");
//  3ºa A este entorno con el metodo removeChild se eliminara la pieza seleccionada
  entorno.removeChild(document.getElementsById(id));
// 4ºa Ahora agregamos la copia creada mediante appendChild(clone)
  entorno.appendChild(clone);
// 5ºa Retornamos el nuevo elemento 
//para que sea seleccionado
  return entorno.lastChild.firstChild;
}

//6ºa Programos el iman para unir las piezas 
//cuando una pieza se acerque a otra estan se unan
//Para esto tengo una pareja de arrays con las posiciones correctas de 
//cada 1 de las piezas 
var origX = [200, 304, 466, 200, 333, 437, 200, 304, 466];
var origY = [100, 100, 100, 233, 204, 233, 337, 366, 337];

function iman() {
//  Hacemos un recorrido a todas las piezas 
  for (var i = 0; i < piezas.length; i++) {
//Si la posicion que se encuentre en un radio de 15px 
//a una posicion del array esta sera atraida a la posicion 
    if (Math.abs(currentPosx - origX[i]) < 15 && Math.abs(currentPosy - origY[i]) < 15) {
      elementSelect.setAttribute("x", origX[i]);
      elementSelect.setAttribute("y", origX[i]);
    }
  }
}



//7ºa Para terminar tneemos que comprobar que el puzzle esta armado correctametne
//declaramos la funcion testing() donde almacenamos 
//una variable llamada 'padre' con todos 
function testing() {
//9º Contador para saber cuantas piezas estan reubicadas
  var bien_ubicada = 0;
  //los elementos que tiene la clase padre
//Hacemos un recorrido por todos los elementos 
  var padres = document.getElementsByClassName('padre');
  for (var i = 0; i < piezas.length; i++) {
// Ahora obtenemos la posicion de cada elemento hijo de los elementos padre 
// recordar : al reordenar los elementos ya no estan en orden numerico  
    var posx = parseFloat(padres[i].firstChild.getAttribute("x"));
    var posy = parseFloat(padres[i].firstChild.getAttribute("y"));
// Por ello en la variable 'id' obtenemos el indice , 
    ide = padres[i].getAttribute("id");
// con este indice ahora podemos hacer las comparaciones con las posiciones correctas  
    if (origX[ide] == posx && origY[ide] == posy) {
// 8ºa creamos un contador 
// 10ºa Estas se incrementan en cada coincidencia
      bien_ubicada = bien_ubicada + 1;
    }
// 11ºa Cuando el puzzle haya sido completado se reproducira un sonido 
// 12ºa Nos vamos al HTML
// 14ºa Cuando la variable 9 sea ubicada "fin del puzzle" 
    if (bien_ubicada == 9) {
//      Sonara la musica
      win.play();
    }
  }
}


//13ºa El sonido lo almacenamos en una variable win
var win = document.getElementsById("win");
//  15ºa Cada vez que ubiquemos una pieza llamaremos a la funcion testing 
//       para eso nos vamos la funcion deseleccionarElemento;
