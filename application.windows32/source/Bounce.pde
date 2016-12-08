//-------ANAPIDISI------------------------------------------------------
void bounce() {
  if(x<30 || x>970) {         //Anapidisi sta toixwmata
    speedX = speedX * -1;
    //speedY = speedY * -1;
    framecount2 = 1;          //Metritis gia allagi xrwmatos toixwmatwn
    out.playNote(0,0.2,2000);
  } else if (y<60) {
    speedY = speedY * -1;     //Anapidisi stin panw mpara
    framecount2 = 1;
    out.playNote(0,0.2,2000);
  }
 if (speedY > 0) {            //Epitaxinsi analoga tin katefthinsi
    speedY = speedY * 1.02;
  } else {
    speedY = speedY * .98;
  }
}
