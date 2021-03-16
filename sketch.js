var balloon;
var database;
var balloonImage, bg;

function preload() {
  balloonImage = loadImage('balloon.png');
  bg = loadImage('citySkyline.png');
}

function setup() {
  createCanvas(800,400);
  balloon = createSprite(400, 200, 50, 50);
  database = firebase.database();

  balloon.addImage(balloonImage);
  balloon.scale = 0.25;
}

function draw() {
  imageMode(CENTER);
  background(0,200,255);
  image(bg,width/2,height/2);

  push();
  textSize(20);
  fill(0);
  text("Use the arrow keys to move the balloon!",10,30);
  pop();

  if(keyDown(UP_ARROW)) {
    database.ref('position').update({y:balloon.y-5});
    balloon.y -= 5;
    balloon.scale *= 1.01;
  }
  if(keyDown(DOWN_ARROW)) {
    database.ref('position').update({y:balloon.y+5});
    balloon.y += 5;
    balloon.scale /= 1.01;
  }
  if(keyDown(LEFT_ARROW)) {
    database.ref('position').update({x:balloon.x-5});
    balloon.x -= 5;
  }
  if(keyDown(RIGHT_ARROW)) {
    database.ref('position').update({x:balloon.x+5});
    balloon.x += 5;
  }

  drawSprites();
}