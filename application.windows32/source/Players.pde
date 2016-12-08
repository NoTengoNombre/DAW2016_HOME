//-------PLAYER 1-------------------------------------------------------
void player1() {
 fill(255);                              //Xrwma paikti
 if (mouseX>95 && mouseX<420) {          //-Kinisi ef oswn einai epitrepti
 p1a = (mouseX-75);                      //-Apothikefsi thesis stis metavlites
 p1b = (mouseX+75);                      //-|
 }
 rect(p1a,475,p1b,490);                  //Sxediasmos paikti
}

//-------PLAYER 2----------------------------------------------------
void player2() {
 int c;                                //Metavliti gia tin tixaia kinisi
 if (x>=575) {                         //Kinisi otan i mpala vrisketai sto deksi meros
 if (framecount > 10) {                //Kinisi afou exoun perasei kapoia kare
 framecount = 0;                       //Midenismos metriti kare
 c = int(random(1,3));                 //Dimiourgia tixaiou akeraiou [1,3]
 fill(255);                            //Xrwma paikti
  if (c < 3 && ((p2a-75) > 510) && x < (p2a+20)) {     //Aristeri kinisi ef oswn einai epitrepti
   p2a -= 75;
   p2b -= 75;
 } else if (c < 2 && (p2b+75) < 990 && x> (p2a+75)){ //Deksia kinisi ef oswn einai epitrepti
   p2a += 75;
   p2b += 75;
 }
 
 }
 }
 rect(p2a,475,p2b,490);                //Sxediasmos paikti
}
