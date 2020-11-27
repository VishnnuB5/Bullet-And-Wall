var thickness,wall;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50,200,5,50);
  wall=createSprite(1200,200,thickness,200);
}

function draw() {
  background(255,255,255);  
wall.shapecolor=color(80,80,80);
bullet.velocityX=speed;

if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(damage>10)
  {
    wall.shapecolor=color(255,0,0);
  }

  if(damage<10)
  {
    wall.shapecolor=color(0,255,0);
  }
}

  drawSprites();
}

function hasCollided(bullet,wall)
{
var bulletRightEdge=bullet.x+bullet.width;
var wallLeftEdge=wall.x;

if(bulletRightEdge>=wallLeftEdge)
{
  return true;
}
return false;

}