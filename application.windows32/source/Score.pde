//-------SCORE----------------------------------------------------------
void scoreDisp() {                                      
  textFont(f);                                        //Grammatoseira
 if (framecount2 > 0 && framecount2 < 100) {          //Xrwma analoga an exoun xtipithei ta perithoria
    framecount2++;
    fill(r+framecount2,g+framecount2,b+framecount2);
  } else if (framecount2 == 100){
    framecount2 = 0;
    fill (r+framecount2,g+framecount2,b+framecount2);
  } else {
    fill (255);
  }
  text(score1,10,43);                                //Emfanisi score
  text(score2,960,43);                               //|
}
