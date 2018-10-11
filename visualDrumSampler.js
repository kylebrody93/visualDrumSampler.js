var posX, posY;
var fillRed, fillGreen, fillBlue;
var bgRed, bgGreen, bgBlue;
var kick, hihat, snare, ohat, clav;

function preload() {
  kick = loadSound('sounds/kick.flac');
  hihat = loadSound('sounds/closedhat.wav')
  snare = loadSound('sounds/snare.wav')
  ohat = loadSound('sounds/ohat.wav')
  clav= loadSound('sounds/clav.wav')
  lowtom= loadSound('sounds/lowtom.wav')
}

function setup() {
  createCanvas(900, 600);
  
   //X and Y position for the player
  posY = 300;
  posX = 450;
  //fill color for the player
  fillRed = 0;
  fillGreen = 255;
  fillBlue = 0;
  //background color
  bgRed = 230;
  bgGreen = 200;
  bgBlue = 200;
  background(bgRed, bgGreen, bgBlue); 
}
//main function
function draw() {
  drawPlayer();
  border();
}

//displays the player as a green square
function drawPlayer() {
  fill(fillRed, fillGreen, fillBlue);
  noStroke();
  rect(posX, posY, 60, 60);
}

//controls player movement, triggers samples, and player fill color change
function keyPressed()
{

  if ( keyCode === UP_ARROW ) {
    posY = posY - 50;
    fillRed = random(255);
    fillGreen = random(255);
    fillBlue = random(255);
    ohat.play();
  } 
  else if ( keyCode === DOWN_ARROW ) {
    posY = posY + 50;
    fillRed = random(255);
    fillGreen = random(255);
    fillBlue = random(255);
    snare.play();
  }
  else if ( keyCode === RIGHT_ARROW ) {
    posX = posX + 50;
    fillRed = random(255);
    fillGreen = random(255);
    fillBlue = random(255);
    hihat.play();
  }
  else if ( keyCode === LEFT_ARROW ){
    posX = posX - 50;
    fillRed = random(255);
    fillGreen = random(255);
    fillBlue = random(255);
    bgRed = random(255);
    bgGreen = random(255);
    bgBlue = random(255);    
    kick.play();
  }
  else if ( keyCode === CONTROL ) {
    posX = posX - 50;
    fillRed = random(255);
    fillGreen = random(255);
    fillBlue = random(255);
    bgRed = random(255);
    bgGreen = random(255);
    bgBlue = random(255);    
    lowtom.play();
  }
  else if ( keyCode === SHIFT ) {
    posY = posY + 50;
    fillRed = random(255);
    fillGreen = random(255);
    fillBlue = random(255);
    bgRed = random(255);
    bgGreen = random(255);
    bgBlue = random(255);    
    clav.play();
  }
}

//keeps player from leaving the canvas
function border() {
  
  if ( posX > 880 ) {
    posX = random(900);
    posY = random(600);
  }

  else if ( posX < 0){
    posX = random(900);
    posY = random(600);
  }

  else if ( posY > 540) {
    posX = random(900);
    posY = random(600);
  }

  else if ( posY < 10) {
    posX = random(900);
    posY = random(600);
  }
}
