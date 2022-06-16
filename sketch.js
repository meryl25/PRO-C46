var ball, ground, player, player1,player2, player02, ball0;


function preload() {
ball= loadImage("tennis ball.png")  
ground= loadImage("tennis court.png")
player= loadImage("tennis player.png")
player02= loadImage("player2.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  player1= createSprite(10,450)
  player1.addImage(player)
  player1.scale=0.5
  player2= createSprite(1300,450)
  //player2.addImage(player02)
  player2.scale=0.5
  ball0= createSprite(700,450)
  ball0.addImage(ball)
  ball0.scale=0.1
  if(keyCode==37){
    player2.velocityX=-2
  }
 
}

function draw() {
  background(ground)
  drawSprites()
 ball0.y=mouseY
  
  if(keyIsDown(RIGHT_ARROW)){
    player2.x=player2.x+9
  }
  if(keyIsDown("up")){
    player2.y=player2.y-9
  }
 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
