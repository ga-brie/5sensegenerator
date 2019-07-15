var listen1, listen2, question1, question2,i1,g; //variables for buttons and voices
var q,v; //variables for questionsvar a=[];
let glow;
var cnv;
var i,r,p;
var count=0;
/*
function preload(){
  i1 = loadImage('mats/questionmaster.jpg');
}
*/
function setup(){
  cnv=createCanvas(500, 300);
  background(255);
  cnv.position(30,380);
  frameRate(2);

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

//Function for the first button
function speaking() {
question1.speak(v);
}

//Function for the second button
function repeat() {
question2.speak(v);
}
