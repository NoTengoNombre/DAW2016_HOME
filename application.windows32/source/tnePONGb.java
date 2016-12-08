import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import ddf.minim.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class tnePONGb extends PApplet {

//----------------------------------------------------------------
//-----------------------------------------------------------------
//--------------------THE NEVER-ENDING PONG-------------------------
//----------------------------------------by Panos Mazarakis---------
//--------------------------------------------------------------------


//-------LIBRARIES---------------------------------------------------
 //Library ixou

//-------METAVLITES---------------------------------------------------
Minim minim;  //Global metavlites
AudioOutput out;
PFont f, f2, f3, generalf; //Metavlites grammatoseirwn
float x, y;                //Thesi mpalas
float speedX, speedY;      //Taxitita mpalas
float p1a, p1b, p2a, p2b;  //Theseis paiktwn
float clrCount;            //Metritis gia tin stadiaki allagi xrwmatos mpalas
int score1, score2;        //Score paiktwn
float r, g, b;             //Metavlites xrwmatos mpalas/skinis
boolean hit;               //Switch xtipimatos tis mpalas
int lastHit;               //Apothikefsi teleftaiou paikti pou xtipise tin mpala
int framecount = 0;        //Metrisi kare
int framecount2;           //Metrisi kare

//-------SETUP-----------------------------------------------------------
public void setup() {
  size(1000,500);                                //Megethos kanva
  noStroke();                                    //Apenergopoiisi perigrammatwn
  smooth();                                      //Antialiasing
  minim = new Minim(this);                       //Setup ixou
  out = minim.getLineOut();
  f = loadFont("font.vlw");                      //Fortwsi grammatoseirwn
  f2 = loadFont("arial.vlw");
  f3 = loadFont("stenc.vlw");
  generalf = createFont("general font",10,true); //Dimiourgia aplis grammatoseiras
  lastHit = 1;                                   //wste i mpala na ksekinisei apo ta aristera
  rectMode(CORNERS);                             //Allagi tropou sxediasmou parallilogramwn
  reset();                                       //Reset thesis paiktwn kai mpalas
}
//-------DRAW LOOP-------------------------------------------------------
public void draw() {
 framecount++;    //Metrisi kare
 background(5);   //Emfanisi sxedon mavrou fontou (wste na dimiourgithei kinisi)
 logoDisp();      //Emfanisi logotipou
 scene();         //Emfanisi skinis
 scoreDisp();     //Emfanisi score
 ball();          //Emfanisi mpalas
 player1();       //Emfanisi paikti 1
 player2();       //Emfanisi paikti 2
 bounce();        //Anapidisi mpalas stin skini
 if (y>=450) {    
   collision();   //Anapidisi mpalas stous players kai metrisi score
 }
}
//-------ANAPIDISI------------------------------------------------------
public void bounce() {
  if(x<30 || x>970) {         //Anapidisi sta toixwmata
    speedX = speedX * -1;
    //speedY = speedY * -1;
    framecount2 = 1;          //Metritis gia allagi xrwmatos toixwmatwn
    out.playNote(0,0.2f,2000);
  } else if (y<60) {
    speedY = speedY * -1;     //Anapidisi stin panw mpara
    framecount2 = 1;
    out.playNote(0,0.2f,2000);
  }
 if (speedY > 0) {            //Epitaxinsi analoga tin katefthinsi
    speedY = speedY * 1.02f;
  } else {
    speedY = speedY * .98f;
  }
}
//-------LOGOTIPO-------------------------------------------------------
public void logoDisp() {
  fill(0,128,255);                //Xrwma keimenou
  textFont(f2);                   //Grammatoseira
  text("The Never-Ending",290,40);   //Keimeno
  textFont(f3);
  fill(255,0,0,200);              //Xrwma me diafaneia
  text("P",455,40);
  fill(255,255,0,200);
  text("O",475,40);
  fill(0,255,0,200);
  text("N",495,40);
  fill(0,255,255,200);
  text("G",515,40);
  textFont(generalf);
  fill(128);
  textSize(9);                    //Megethos aplis grammatoseiras
  text("\u00a9 Panos Mazarakis 2013",555,40);
}
//-------MPALA----------------------------------------------------------
public void ball() {
  if (hit == true) {        //Allagi xrwmatos sto xtipima
    hit = false;
    clrCount = 128;         //Arxikopoiisi eidikou metriti
    r = random (128,255);   //Tixaios arithmos xrwmatos
    g = random (128,255);   //|
    b = random (128,255);   //|
  }
  if (clrCount > 50) {      //Stadiako skoteiniasma xrwmatos (alla oxi teleiws skoteino)
    clrCount -= 1.6f;        //Metritis
    r -= 2;
    g -= 2;
    b -= 2;
  }
  x += speedX;              //Prosthesi taxititas stin mpala
  y += speedY;              //|
  fill(r,g,b);              //Xrwma mpalas
  ellipse(x,y,20,20);       //Sxediasmos mpalas
}
//-------PLAYER 1-------------------------------------------------------
public void player1() {
 fill(255);                              //Xrwma paikti
 if (mouseX>95 && mouseX<420) {          //-Kinisi ef oswn einai epitrepti
 p1a = (mouseX-75);                      //-Apothikefsi thesis stis metavlites
 p1b = (mouseX+75);                      //-|
 }
 rect(p1a,475,p1b,490);                  //Sxediasmos paikti
}

//-------PLAYER 2----------------------------------------------------
public void player2() {
 int c;                                //Metavliti gia tin tixaia kinisi
 if (x>=575) {                         //Kinisi otan i mpala vrisketai sto deksi meros
 if (framecount > 10) {                //Kinisi afou exoun perasei kapoia kare
 framecount = 0;                       //Midenismos metriti kare
 c = PApplet.parseInt(random(1,3));                 //Dimiourgia tixaiou akeraiou [1,3]
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
//-------RESET----------------------------------------------------------
public void reset() {
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
//-------SCORE----------------------------------------------------------
public void scoreDisp() {                                      
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
//-------SIGKROUSI------------------------------------------------------
public void collision() {
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
    out.playNote(0,0.2f,70);                   //Ixos
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
    out.playNote(0,0.2f,"C4");
    out.playNote(0,0.2f,"E4");
    reset();
  }
}
//-------SKINI----------------------------------------------------------
public void scene() {
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
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "tnePONGb" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
