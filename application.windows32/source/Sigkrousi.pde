//-------SIGKROUSI------------------------------------------------------
void collision() {
  if ((x>(p1a-10) && x<(p1b+10)) || (x>(p2a-10) && x<(p2b+10))) { //Xtipima paikti
   if (x>(p1a-10) && x<(p1b+10)) {   
if (x<(p1a+55)) {
  speedX = abs(speedX) * -1;
  speedY = speedY * -1;
} else {
  speedX = abs(speedX);
  speedY = speedY * -1;
}
   }
if (x>(p2a-10) && x<(p2b+10)) {
 if (x<(p2a+105)) {
   speedX = abs(speedX)* -1;
   speedY = speedY * -1;
 } else {
   speedX = abs(speedX);
   speedY = speedY * -1;
 }
}
    out.playNote(0,0.2,70);                   //Ixos
    if (x < p2a) {                            //Dilwsi teleftaiou xtipimatos
      lastHit = 1;
    } else {
      lastHit = 2;
    }
    hit = true;                               //Dilwsi xtipimatos
  } else if (x<=500) {                        //An i mpala den xtipithei, allagi score
    score2++;
    out.playNote(0,1,60);
    reset();                                  //Reset paiktwn/mpalas
  } else {
    score1++;
    out.playNote(0,0.2,"C4");
    out.playNote(0,0.2,"E4");
    reset();
  }
}
