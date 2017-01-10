/**
 @Created on : 10-ene-2017, 15:35:25
 @Author     : RVS
 @Pag        :
 @version    :
 */

var mivideo, reproducir, barra, progreso, maximo;

maximo = 600;


function comenzar() {

  mivideo = document.getElementById("mivideo");

  reproducir = document.getElementById("reproducir");

  barra = document.getElementById("barra");

  progreso = document.getElementById("progreso");

  reproducir.addEventListener("click", clicando, false);

  progreso.addEventListener("click", adelantando, false);

}

function clicando() {
  if ((mivideo.paused == false) && (mivideo.ended == false)) {
    mivideo.pause();
    reproducir.innerHTML = "Play"; // significa que esta pausado lo cual cambia el texto
  } else { // si no esta parado , ejecuta que se inicie
    mivideo.play();
    reproducir.innerHTML = "Pause";
//    bucle = setInterval(estado, 1000); // llamar a la funcion estado cada 1 POR SEGUNDO , 
    bucle = setInterval(estado, 30); // llamar a la funcion estado cada 0.5 POR SEGUNDO , 
    //cada segundo llama al estado y mostrar el proceso de la barra
    //incrementando el ancho de la barra de currentTime a medida que el ancho va creciendo.
  }
}

function estado() { 
  if (mivideo.ended == false) {
    var total = parseInt(mivideo.currentTime * maximo / mivideo.duration); // REGLA DE 3 A JS
    progreso.style.width = total + "px";
  }
}


window.addEventListener("load", comenzar, false);












