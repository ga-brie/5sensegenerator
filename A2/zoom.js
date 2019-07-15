var i1,i2,i3, i4, i5, i6;
var a=[];
let glow;
var cnv;
var g1,g2,g11,g12;
var s1,s2,s3,s4,s5;
var r;
var b1,b2;

var where = ['Venice','Venice','Venice','Venice','Venice','Venice','Venice'];

var title =
    ['Max Ernst, "The kiss" (1927)',
    'Vasily Kandisky, "White Cross" (1922)',
     'Joan Mirò, "Dutch Interior II" (1928)',
     'Jackson Pollock, "Alchemy" (1947)',
     'Yves Tanguy, "Promontory Palace" (1931)',
     'Emilio Vedova, "Image of Time (Barrier)" (1951)'
    ];
var collection = ['Peggy Guggenheim Collection','Peggy Guggenheim Collection','Peggy Guggenheim Collection','Peggy Guggenheim Collection','Peggy Guggenheim Collection','Peggy Guggenheim Collection'];


function preload(){
  i1 = loadImage('mats/ernst.jpg');
  i2 = loadImage('mats/kandisky.jpg');
  i3 = loadImage('mats/miro.jpg');
  i4 = loadImage('mats/pollock.jpg');
  i5 = loadImage('mats/tanguy.jpg');
  i6 = loadImage('mats/vedova.jpg');
  glow = loadFont('NEON GLOW-Light.otf');
  s1=loadSound('mats/snd/Seagulls.mp3');
 s2=loadSound('mats/snd/tamburo.mp3');
 s3=loadSound('mats/snd/Bark.mp3');
 s4=loadSound('mats/snd/Door.mp3');
 s5=loadSound('mats/snd/Morse.mp3');
}

function setup(){
  cnv=createCanvas(1050, 350);
  background(255,0);
  cnv.position(30,350);

  //Picture
  r=int(random(5));
  a=[i1,i2,i3,i4,i5,i6];
  r1=random(150);
  r2=random(150);
  image(a[r], 10, 10, 250, 250, r1, r2, random(width-r1), random(height-r1));

  b1 = createButton('info');
  b1.position(410,600);
  b1.mousePressed(infos);

  b2 = createButton('refresh');
  b2.position(410, 500);
  b2.mousePressed(refresh);

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
function infos() {
    clear();
    cnv=createCanvas(1050, 350);
    //background('#1B2258');
    background(255,0);
    //a=[i1,i2,i3,i4,i5,i6];
    image(a[r], 30, 30);
    fill(255);
    textSize(20);
    //textFont('Georgia');
    text(title[r], 600, 100);
    text(collection[r], 600, 200);
    text(where[r], 600, 300);
    }

function refresh() {
  clear();
  //background('#1B2258');
  background(255,0);
  r1=random(150);
  r2=random(150);
  //a=[i1,i2,i3,i4,i5,i6];
  image(a[r], 10, 10, 150, 250, r1, r2, random(width-r1), random(height-r1));
  /*button = createButton('click me');
  button.position(10, 500);
  button.mousePressed(info);*/
}

function replay(){
  if(rnd==0){s1.setVolume(0.1);s1.play();};
  if(rnd==1){s2.setVolume(0.1);s2.play();};

}
