var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,1600);

  speed = random(223,321);
  weight = random(30,52);
  bullet = createSprite(200,200,100,50);
  bullet.shapeColor = "red";
 

  thickness = random(22,83);

  wall = createSprite(1200,400,thickness,height/2);
  wall.shapeColor = color(0,255,0);

  wall2 = createSprite(1200,400,thickness,height/2);
  wall2.shapeColor = color(0,255,0);
}

function draw() {
  background("black");  
  
  bullet.velocityX = speed;

  if(hasCloided(bullet,wall)){
    if(wall.x - bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    }
    if(deformation>180){
    bullet.shapeColor = color(255,0,0);
  
    }
    if(deformation < 180 && deformation > 100){
      bullet.shapeColor = color(255,0,0);
    }
    if(deformation<100){
      bullet.shapeColor = color(255,0,0);
    }
    if(damage>10){
    wall.shapeColor = color(255,0,0);
    wall2.shapeColor = color(255,0,0);
  }
  if(damage<10){
    wall.shapeColor = color(0,255,0);
    wall2.shapeColor = color(0,255,0);
  }
}

  drawSprites();
}

function hasCloided(lbullet,lwall){
  bulletRightEdge = lbullet.X + lbullet.width;
  wallLeftEdge = lwall.X;
  if(bulletRightEdge<=wallLeftEdge){
    return true;
  }
   return false;
}
