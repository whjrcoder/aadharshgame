var wall
var red ,redGroup;
var cube ,tower
var gameState = "play"




function preload(){
  
}
function setup() {
  createCanvas(600, 600);
  wall = createSprite(300,300);
  tower=createSprite(600,600)
 tower.velocityY = 2;
  
  cube = createSprite(200,200,20,20);
  redGroup = createGroup()
  
}

function draw() {
  background(0);
  if(gameState === "play"){
    if(wall.y > 400){
      wall = 300}
 
  
  if(keyDown("SPACE")){
    cube.velocityY = -8;
  }
 cube.velocityY = cube.velocityY+3;
 if(keyDown("RIGHT_ARROW")){
   cube.x = cube.x+2;
 }
 if(keyDown("LEFT_ARROW")){
  cube.x = cube.x-2;
}
spawnRed()
if(cube.isTouching(redGroup)||cube.y>600) {
  gameState = "end";
}
  
drawSprites();
    }
    
    if(gameState === "end") {
      fill("yellow");
      textSize (30);
      text("GAME OVER",230,250);
      
    }
  
 

}
function spawnRed(){
  if(frameCount%240===0) {
    red = createSprite(250,-50);
    red.velocityY = 1;
    red.x = Math.round(random(120,400));
    redGroup.add(red);
    fill("red");
    cube.lifetime = 600;
    cube.depth = red.depth;
    ghost.depth += 1;
  }
}