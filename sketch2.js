let base=50;
let base2=100;
let dim = 60;
let x = dim;
let y = -dim;
var i0,i1,i2;
let c=0;
var start;
var sx,sy;
var xx=400;
var yy=50;
let run=0;
var cnv,aa;

function preload(){
  i0=loadImage('dollaro.jpg');
  i1=loadImage('ciliege.jpg');
  i2=loadImage('limone.jpg');
}

function setup() {
  cnv=createCanvas(425,450);
  cnv.position(50%,30%);
  noStroke();
  sx=50;
  sy=50;


  /*
  start=createButton('START');
  start.position(350,200);
  start.style('background', 'orange');
  star*/

  textSize(60);
  fill(0);
  frameRate(45)
}

function draw(){
  background('#1B2258');
  if (run==0){
  image(i0,base+x-40,base2,x,x);
  image(i1,base+2*x,base2,x,x);
  image(i2,base+3*x+40,base2,x,x);};
  if (mouseIsPressed && mouseY<400) {yy=mouseY;} ;
  noFill();
  strokeWeight(6);
  stroke('#E8BBFE');
  rect(sx,sy,300,180,7);
  strokeWeight(3);
  stroke(255);
  rect(sx+5,sy+30,90,120);
  rect(sx+105,sy+30,90,120);
  rect(sx+205,sy+30,90,120);

  textSize(62);
  textAlign(CENTER);
  fill('#E8BBFE');
  text("SLOT",sx+150,sy+250);
  stroke(255);
  line(sx,330,sx+300,330);
  textSize(42);
  fill('#DD4433');
  text("MACHINE",sx+150,sy+350);
  strokeWeight(6);
  stroke(255);
  line(sx,430,sx+300,430);
  strokeWeight(4);
  line(sx,265,sx+30,265);
  line(sx,285,sx+30,285);
  line(sx+270,265,sx+300,265);
  line(sx+270,285,sx+300,285);
  stroke('#DD4433');
  line(sx,275,sx+30,275);
  line(sx,295,sx+30,295);
  line(sx+270,275,sx+300,275);
  line(sx+270,295,sx+300,295);
  noFill();
  rect(380,30,40,400,12);
  stroke('#DD4433');
  fill('#DD4433')
  ellipse(xx,yy,30,30);
if (mouseIsPressed && mouseY>300) {run=1;};

  if (run==1) {abcd()};
}


function abcd() {
  //y = y + 20;
  c++;
  var array=[i0,i1,i2];
  //background(102);
  image(random(array),base+x-40,base2,x,x);
  image(random(array),base+2*x,base2,x,x);
  image(random(array),base+3*x+40,base2,x,x);
 //if (c==175) {noLoop()};

 if (c==150) {goahead();};
}

function running(){
  run=1;
}

function goahead(){
 rrnd=int(random(8));
 if (rrnd==0) {aa=createA("https://ga-brie.github.io/5sensegenerator/A1//","PRESS HERE TO CONTINUE"),aa.position(500,650),aa.style('font-size','32px'),c=0;run=2;noLoop();};
 if (rrnd==1) {aa=createA("https://ga-brie.github.io/5sensegenerator/A2/","PRESS HERE TO CONTINUE"),aa.position(500,650),aa.style('font-size','32px'),c=0;run=2;noLoop();};
 if (rrnd==2) {aa=createA("https://ga-brie.github.io/5sensegenerator/A3/","PRESS HERE TO CONTINUE"),aa.position(500,650),aa.style('font-size','32px'),c=0;run=2;noLoop();};
 if (rrnd==3) {aa=createA("https://ga-brie.github.io/5sensegenerator/A4//","PRESS HERE TO CONTINUE"),aa.position(500,650),aa.style('font-size','32px'),c=0;run=2;noLoop();};
 if (rrnd==4) {aa=createA("https://ga-brie.github.io/5sensegenerator/A5/","PRESS HERE TO CONTINUE"),aa.position(500,650),aa.style('font-size','32px'),c=0;run=2;noLoop();};
 if (rrnd==5) {aa=createA("https://ga-brie.github.io/5sensegenerator/A6/","PRESS HERE TO CONTINUE"),aa.position(500,650),aa.style('font-size','32px'),c=0;run=2;noLoop();};
 if (rrnd==6) {aa=createA("https://ga-brie.github.io/5sensegenerator/A7/","PRESS HERE TO CONTINUE"),aa.position(500,650),aa.style('font-size','32px'),c=0;run=2;noLoop();};
 if (rrnd==7) {aa=createA("https://ga-brie.github.io/5sensegenerator/A8/","PRESS HERE TO CONTINUE"),aa.position(500,650),aa.style('font-size','32px'),c=0;run=2;noLoop();};

}
