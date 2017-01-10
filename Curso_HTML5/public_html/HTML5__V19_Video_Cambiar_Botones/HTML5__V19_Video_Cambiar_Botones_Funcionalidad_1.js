/**
 @Created on : 10-ene-2017, 15:35:25
 @Author     : RVS
 @Pag        :
 @version    :
 */

//1º Identificar todos los elementos de la pagina web
// El contenedor del  - video
// El video - mi video
// barra
// proceso dentro de la capa barra

//variable que se llaman como los id

//  Objecto video tiene propiedades y metodos en JS 
//  - Propiedades : 
//  duration -> duracion del video sg
//  currentTime -> momento en el que esta el video en sg , segundo 6 , 5  6 
//  paused -> estas pausado
//  ended -> esta parado

// -s Metodos 
// play()
// puase()

//Variables Globales
var mivideo, reproducir, barra, progreso, maximo;

//La barra de progreso tiene 600px como le indicamos en el css
// 600px es la duracion total del video , cuando llegue a los 600px es la duracion
//total del video
// 600px ---> 100% 
// 4sg   ----> x 
maximo = 600;


function comenzar() {

  mivideo = document.getElementById("mivideo");

// responde a eventos : tengo que prepararle el addEventListener
  reproducir = document.getElementById("reproducir");

  barra = document.getElementById("barra");

// responde a eventos
  progreso = document.getElementById("progreso");

//  funcion a la que llamar 'clickeando' funcion propia
  reproducir.addEventListener("click", clicando, false);

  progreso.addEventListener("click", adelantando, false);

}

//codigo para reproducir el video
// boton a la esucha con eventos  addEventListener
function clicando() {
//  si el video no esta pausado -
//si esta ejecutando si no ha llegado hasta el final 
  if ((mivideo.paused == false) && (mivideo.ended == false)) {
    reproducir.innerHTML = "Play"; // significa que esta pausado lo cual cambia el texto
//   pausa el video
    mivideo.pause();
  } else { // si no esta parado , ejecuta que se inicie
//    si el video empieza a reproducirse es por el ELSE
    mivideo.play();
//    asignarle al elemento boton , interno 'reproducir' cambie el texto 
    reproducir.innerHTML = "Pause";
//4º llamar al estado una vez 
//5º mientras el video se este reproduciendo el estado se este reproduciendo
//  tenemos que hacer que se hagan "LLamadas Constantes" con setInterval
//  Con cuanta frecuencia quieres llamar a ese estado 'en milisegundo'
    bucle = setInterval(estado, 1000); // llamar a la estacion estado POR SEGUNDO , a medida que el ancho va creciendo en currentTime
//    estado;
  }
}

//1º HACER LA BARAR DE PROGRESO AVANCE
function estado() {
//si el video no esta finalizado 
//que la barra continue
  if (mivideo.ended == false) {
//2º HAY QUE SABER LA CANTIDAD DE TIEMPO QUE LLEVA AVANZADO MEDIANTE currentTime
    var total = parseInt(mivideo.currentTime * maximo / mivideo.duration); // REGLA DE 3 A JS
//3º    barra de progreso : modificar el estilo de un elemento de la barra de proceso que empieza con 0px
//3º la barra de proceso tiene un ancho que es el valor total concatenado con el string "px"
    progreso.style.width = total + "px";
//4º LLAMAR A LA FUNCION
  }
}

//agregar evento de la pagina web 
//llame a la funcion cargar


window.addEventListener("load", comenzar, false);












