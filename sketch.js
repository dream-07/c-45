let ground;
let lander;
var lander_img;
var bg_img;
var rock,rockimg,rockGroup;

var vx = 0;
var g = 0;
var vy = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
  rockimg = loadImage("rock.png")
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,250,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
rockGroup = new Group()
  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

  //fall down
  vy +=g;
  lander.position.y+=vy;
  lander.position.x+=vx;

  spawnRocks();
  if(lander.isTouching(rockGroup)){
text ("gameover",500,300)

lander.position.x = 500
lander.position.y= 350

  }
  drawSprites();
}

function keyPressed()
{
//if(keyCode==UP_ARROW){
//upward_thrust()
//}
if(keyCode==RIGHT_ARROW){
  right_thrust()
}
if(keyCode==LEFT_ARROW){
  left_thrust()
}
}

function right_thrust(){
  vx = vx+1;
}

function left_thrust(){
  vx = vx-1;
}

function upward_thrust()
{
vy = -1;
}

function spawnRocks(){
  if(World.frameCount%60===0){
rock = createSprite(200,5)
rock.addImage(rockimg)
rock.scale=0.1
rock.velocityY=3
rock.x=Math.round(random(10,900))
rockGroup.add(rock)
  }
}