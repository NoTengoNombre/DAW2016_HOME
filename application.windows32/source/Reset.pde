//-------RESET----------------------------------------------------------
void reset() {
  x= 500;                //Arxiki thesi mpalas
  y= 100;                //|
  hit = true;            //gia tin arxikopoiisi xrwmatos mpalas (wste na dimiourgithei xrwma gia tin mpala sto ball
  speedX = random(3,7);  //Tixaia taxitita mpalas
  if (lastHit == 1) {
    speedX *= -1;        //Katefthinsi mpalas analoga me to teleftaio xtipima
  }
  speedY = 5;            //Arxiki taxitita ston Y
  p1a = 175;             //Arxiki thesi paikti 1
  p1b = 325;             //|
  p2a = 700;             //Arxiki thesi paikti 2
  p2b = 850;             //|
}
