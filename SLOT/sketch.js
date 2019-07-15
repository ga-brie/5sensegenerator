let x = 150;
let y = -150;
let dim = 150;
var i0,i1,i2;
let c=0;
var start;
let xx=0;

function preload(){
  i0=loadImage('7.jpg');
  i1=loadImage('ciliege.jpg');
  i2=loadImage('limone.jpg');
}

function setup() {
  createCanvas(770,dim);
  background(255,0,0);
  noStroke();

  image(i0,x,y+150,x,x);
  image(i1,2*x,y+150,x,x);
  image(i2,3*x,y+150,x,x);

  start=createButton ('START');
  start.position (350,200);
  start.style ('background', 'orange');
  start.mousePressed (abcd);

  textSize(60);
  fill(0);
}

function draw(){
text(key, 220, 75);
}


function abcd() {
  y = y + 20;
  c++;
  var array=[i0,i1,i2];
  background(102);
 if (y > dim) {y = -dim};
 image(random(array),x,y,x,x);
 image(random(array),x,y+150,x,x);
 image(random(array),x,y-150,x,x);
 if (c==175) {noLoop()};

 if (y > dim) {y = -dim};
 image(random(array),2*x,y-150,x,x);
 image(random(array),2*x,y,x,x);
 image(random(array),2*x,y+150,x,x);
 if (c==175) {noLoop()};

 if (y > dim) {y = -dim};
 image(random(array),3*x,y+150,x,x);
 image(random(array),3*x,y-150,x,x);
 image(random(array),3*x,y,x,x);
 if (c==175) {noLoop()};
}

function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    var writer = createWriter('squares.txt');
    for (let i = 0; i < 0; i++) {
      writer.print(i * i);
      writer.style(155,155);
    }
    writer.close();
    writer.clear();
  }
}
