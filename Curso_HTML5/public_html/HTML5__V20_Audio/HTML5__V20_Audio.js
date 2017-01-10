/**
 @Created on : 10-ene-2017, 15:35:25
 @Author     : RVS
 @Pag        :
 @version    :
 */

var miaudio, reproducir, barra, progreso, maximo;

maximo = 600;


function comenzar() {

  miaudio = document.getElementById("miaudio");

  reproducir = document.getElementById("play");

  barra = document.getElementById("barra");

  progreso = document.getElementById("progreso");

  reproducir.addEventListener("click", clicando, false);

// LA BARRA DE PROCESO TAMBIEN ESTA A LA ESCUCHA
// La pantalla es un grafico de coordenadas CARTESIANO X e Y
// PageX el eje de coordenadas Horizontal - devuelve el punto de la pantalla HORIZONTAL - Linea division HORIZONTAL
// PageY el eje de coordenadas Vertical - devuelve el punto de la pantalla Vertical - Linea division Vertical
// 
// propiedad offsetLeft -> nos dice la distancia que hay en el borde izquierdo de la pagina 
//                     hasta el punto PageX

//Cuando hacemos click en la barra se ejcutara la funcion 'adelantando'
  barra.addEventListener("click", adelantando, false);

}

function clicando() {
  if ((miaudio.paused == false) && (miaudio.ended == false)) {
    miaudio.pause();
    reproducir.innerHTML = "Play"; // significa que esta pausado lo cual cambia el texto
  } else { // si no esta parado , ejecuta que se inicie
    miaudio.play();
    reproducir.innerHTML = "Pause";
//    bucle = setInterval(estado, 1000); // llamar a la funcion estado cada 1 POR SEGUNDO , 
    bucle = setInterval(estado, 30); // llamar a la funcion estado cada 0.5 POR SEGUNDO , 
    //cada segundo llama al estado y mostrar el proceso de la barra
    //incrementando el ancho de la barra de currentTime a medida que el ancho va creciendo.
  }
}

function estado() {
  if (miaudio.ended == false) {
    var total = parseInt(miaudio.currentTime * maximo / miaudio.duration); // REGLA DE 3 A JS
    progreso.style.width = total + "px";
  }
}

/**
 * posicion se usa para añadir un atributo evento
 * 
 * @param {type} posicion parametro que es un evento que se usa para llamar al atributo pageX
 * pageX - atributo del evento que nos dice la posicion del raton en el eje horizontal
 * @returns {undefined}
 */
function adelantando(posicion) {
  if ((miaudio.paused == false) && (miaudio.ended) == false) {
// Almacena la posicion dentro de la barra donde se va a hacer click 
//ratonX -> Nos dice la posicion exacta donde hemos pulsado en la barra horizontal
    var ratonX = posicion.pageX - barra.offsetLeft;

//    Almacenamos el sg concreto del punto concreto del video
    var nuevoTiempo = ratonX * miaudio.duration / maximo;
// Para llevarnlos el video a un tiempo concreto de la barra , al segundo 1 , 2 , 3 
    miaudio.currentTime = nuevoTiempo; // segundo en concreto 
// y llevarlo a la barra de progreso
    progreso.style.width = ratonX + "px"; // punto de la barra en concreto
  }
}


window.addEventListener("load", comenzar, false);












