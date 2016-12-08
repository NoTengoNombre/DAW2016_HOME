//-------SKINI----------------------------------------------------------
void scene() {
  if (framecount2 > 0 && framecount2 < 100) {         //Xrwma analoga an exoun xtipithei ta perithoria
    framecount2++;
    fill(r+framecount2,g+framecount2,b+framecount2);
  } else if (framecount2 == 100){
    framecount2 = 0;
    fill (r+framecount2,g+framecount2,b+framecount2);
  } else {
    fill (255);
  }
  rect(10,50,990,60);                                //Sxediasmos skinis me parallilograma
  rect(10,59,20,490);
  rect(980,59,990,490);
 if (framecount2 > 0 && framecount2 < 100) {
    framecount2++;
    fill(r,g,b,128);
  } else if (framecount2 == 100){
    framecount2 = 0;
    fill (r,g,b,128);
  } else {
    fill (255,128);
  }
  rect(498,59,502,490);
}
