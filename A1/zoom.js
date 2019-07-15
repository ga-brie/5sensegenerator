var i1,i2,i3, i4, i5, i6;
var a=[];
let glow;
var cnv;
var g1,g2,g11,g12;
var s1,s2,s3,s4,s5;
var count=0;

function preload(){
  s1=loadSound('mats/snd/Seagulls.mp3');
  s2=loadSound('mats/snd/tamburo.mp3');
  s3=loadSound('mats/snd/Bark.mp3');
  s4=loadSound('mats/snd/Door.mp3');
  s5=loadSound('mats/snd/Morse.mp3');
}

function setup(){
  cnv=createCanvas(500, 300);
  background(255);
  cnv.position(30,380);
  frameRate(2);

  rnd=int(random(5));
  if(rnd==0){g1=createImg('mats/snd/Seagulls.gif'); g1.size(500,300);g1.position(30,820);s1.setVolume(0.1);s1.play();};
  if(rnd==1){g2=createImg('mats/snd/tamburi.gif');g2.size(500,300);g2.position(30,820); s2.setVolume(0.1);s2.play();};
  if(rnd==2){g3=createImg('mats/snd/Bark.gif');g3.size(500,300);g3.position(30,820); s3.setVolume(0.1);s3.play();};
  if(rnd==3){g4=createImg('mats/snd/Door.gif');g4.size(500,300);g4.position(30,820); s4.setVolume(0.1);s4.play();};
  if(rnd==4){g5=createImg('mats/snd/Morse.gif');g5.size(500,300);g5.position(30,820); s5.setVolume(0.1);s5.play();};


  var bt=createButton('play again');
  bt.position(30,800);
  bt.mousePressed(replay);


  //touch
 rnd2=int(random(3));
  if(rnd2==0){g11=createImg('mats/touch1.gif'); g11.size(500,300);g11.position(30,1200);};
  if(rnd2==1){g12=createImg('mats/touch2.gif'); g12.size(500,300);g12.position(30,1200);};
  if(rnd2==2){g13=createImg('mats/touch3.gif'); g13.size(500,300);g13.position(30,1200);};

}

function draw(){
  abst();
}

function abst(){
  count=count+1;
  if (count>10) {noLoop();};
  var r=random(0, width/4);
  fill(0, 0, random(255), random(255));
  ellipse(random(width), random(height), r, r);
  fill(random(255), 0, 0, random(255));
  rect(random(width), random(height), random(width), random(height));
  fill(0, random(255), 0, random(255));
  triangle(random(width),random(height),random(width),random(height),random(width),random(height));
  fill(random(215, 244), random(190, 244), 66, random(255));
  quad(random(width), random(height), random(width), random(height), random(width), random(height), random(width), random(height));
 print(count);
}

function replay(){
  if(rnd==0){g1=createImg('mats/snd/Seagulls.gif'); g1.size(500,300);g1.position(30,820);s1.setVolume(0.1);s1.play();};
  if(rnd==1){g2=createImg('mats/snd/tamburi.gif');g2.size(500,300);g2.position(30,820); s2.setVolume(0.1);s2.play();};
  if(rnd==2){g3=createImg('mats/snd/Bark.gif');g3.size(500,300);g3.position(30,820); s3.setVolume(0.1);s3.play();};
  if(rnd==3){g4=createImg('mats/snd/Door.gif');g4.size(500,300);g4.position(30,820); s4.setVolume(0.1);s4.play();};
  if(rnd==4){g5=createImg('mats/snd/Morse.gif');g5.size(500,300);g5.position(30,820); s5.setVolume(0.1);s5.play();};
}
