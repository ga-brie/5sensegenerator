var listen1, listen2, question1, question2,i1,g; //variables for buttons and voices
var q,v; //variables for questionsvar a=[];
var i1,i2,i3, i4, i5, i6;
var a=[];
let glow;
var cnv;
var i,r,p;
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

  // questions
  rr=random(0.4,1.3);
  p=random(0,6);
  i=int(random(0,3));
  question1= new p5.Speech();
  question1.setPitch(p);
  question1.setRate(rr);
  question2= new p5.Speech();
  question2.setPitch(p);
  question2.setRate(rr);
  q=['If you were song, what would the song talk about?','If you were a drink, which drink would you be?','If you were a path, where would you lead?','If you were a bridge, which places would you connect?'];
  v=q[i];

 listen1 = createButton('Listen!');
 listen1.style('background','lightgray');
 listen1.style('font-size','20px');
 listen1.style(50,28);
 listen1.position(420,950);
//Second button: Listen again
 listen2=createButton('Repeat');
 listen2.style('background','lightgray');
 listen2.style('font-size','15px');
 listen2.size(70,30);
 listen2.position(530,950);
//Buttons - Mouse Pressed
 listen1.mousePressed(speaking);
 listen2.mousePressed(repeat);

 g=createImg('mats/questions.gif');
 g.size(300,300)
 g.position(30,800);


  //touch
  rnd2=int(random(3));
   if(rnd2==0){g11=createImg('mats/sniff1.gif'); g11.size(500,300);g11.position(30,1200);};
   if(rnd2==1){g12=createImg('mats/sniff2.gif'); g12.size(500,300);g12.position(30,1200);};
   if(rnd2==2){g13=createImg('mats/sniff3.gif'); g13.size(500,300);g13.position(30,1200);};

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

//Function for the first button
function speaking() {
question1.speak(v);
}

//Function for the second button
function repeat() {
question2.speak(v);
}
