//-------MPALA----------------------------------------------------------
void ball() {
  if (hit == true) {        //Allagi xrwmatos sto xtipima
    hit = false;
    clrCount = 128;         //Arxikopoiisi eidikou metriti
    r = random (128,255);   //Tixaios arithmos xrwmatos
    g = random (128,255);   //|
    b = random (128,255);   //|
  }
  if (clrCount > 50) {      //Stadiako skoteiniasma xrwmatos (alla oxi teleiws skoteino)
    clrCount -= 1.6;        //Metritis
    r -= 2;
    g -= 2;
    b -= 2;
  }
  x += speedX;              //Prosthesi taxititas stin mpala
  y += speedY;              //|
  fill(r,g,b);              //Xrwma mpalas
  ellipse(x,y,20,20);       //Sxediasmos mpalas
}
