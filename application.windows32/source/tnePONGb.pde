//----------------------------------------------------------------
//-----------------------------------------------------------------
//--------------------THE NEVER-ENDING PONG-------------------------
//----------------------------------------by Panos Mazarakis---------
//--------------------------------------------------------------------


//-------LIBRARIES---------------------------------------------------
import ddf.minim.*; //Library ixou

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
void setup() {
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
void draw() {
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
