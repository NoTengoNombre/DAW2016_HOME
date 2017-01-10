/**
 @Created on : 10-ene-2017, 18:16:33
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

  barra.addEventListener("click", adelantando, false);
}

function clicando() {
  if ((miaudio.paused == false) && (miaudio.ended == false)) {

    miaudio.pause();
    reproducir.innerHTML = "Play";
  } else {
    miaudio.play();
    reproducir.innerHTML = "Pause";

    bucle = setInterval(estado, 30);
  }
}

function adelantando(posicion) {
  if ((mivideo.paused == false) && (mivideo.ended) == false) {
// Almacena la posicion dentro de la barra donde se va a hacer click 
//ratonX -> Nos dice la posicion exacta donde hemos pulsado en la barra horizontal
    var ratonX = posicion.pageX - barra.offsetLeft;

//    Almacenamos el sg concreto del punto concreto del video
    var nuevoTiempo = ratonX * mivideo.duration / maximo;
// Para llevarnlos el video a un tiempo concreto de la barra , al segundo 1 , 2 , 3 
    mivideo.currentTime = nuevoTiempo; // segundo en concreto 
// y llevarlo a la barra de progreso
    progreso.style.width = ratonX + "px"; // punto de la barra en concreto
  }
}













