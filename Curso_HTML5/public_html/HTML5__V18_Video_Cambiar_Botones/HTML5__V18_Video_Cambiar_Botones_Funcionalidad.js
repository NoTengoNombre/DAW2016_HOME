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
var mivideo, reproducir, barra, progreso;

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

function clicando() {
//  si el video no esta pausado -
//si esta ejecutando si no ha llegado hasta el final 
  if ((mivideo.paused === false) && (mivideo.ended === false)) {
    reproducir.innerHTML = "Play";
//   pausa el video
    mivideo.pause();
  } else { // si no esta parado , ejecuta que se inicie
//    si el video empieza a reproducirse es por el ELSE
    mivideo.play();
//    asignarle al elemento boton , interno 'reproducir' cambie el texto 
    reproducir.innerHTML = "Pause";
  }
}

//agregar evento de la pagina web 
//llame a la funcion cargar

window.addEventListener("load", comenzar, false);












