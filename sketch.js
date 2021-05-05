var bullet,wall;
var speed,weight;
var thickness;
function setup() {
  createCanvas(1200,400);
  speed=random(223,321);
  weight=random(30,52);
  bullet = createSprite(50,200,10,10);
  bullet.shapeColour=color(255,255,255);
  thickness=random(22,83);
  wall = createSprite(1100,200,thickness,height/2);
  wall.shapeColour = color(80,80,80);
  bullet.velocityX = speed
}

function draw() {
  background(255,255,255);  
  drawSprites();


//When the collision happens, set the velocityX of the bullet to 0.
if(wall.x-bullet.x < (bullet.width+wall.width)/2)
{
  bullet.velocityX=0;
 var damage= (0.5 * weight * speed * speed)/(thickness * thickness * thickness);
 if(damage>10)
{
  wall.shapeColor=color(255,0,0);
}

else{
wall.shapeColor=color(0,255,0);
}
}
}
