var car,wall;
var wall,thickness;
var bullet,speed,weight;

var speed,weight;


function setup() {
  createCanvas(800,400);
  
  speed=random(55,90);
  weight=random(400,1500);

thickness=random(22,83)









bullet=createSprite(50,200,50,5);
bullet.velocityX=speed;
bullet.shapeColor=color(255);




  car=createSprite(50,200,50,50);
  car.velocityX= speed;
  car.shapeColor=color(255);


  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0);  
  //bullet.sprite.collide(wall.sprite,calculateDeformation)
  if(hasCollided(buller,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);


    if(damge>10)
    {
      wall.shapeColor=color(2555,0,0);

    }


    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    
    }

  









    car.velocityX=0;
    var deformation=0.5 *width * speed* speed/22509;
    if(deformation>180);
    { 
      car.shapeColor=color(255,0,0);

    }
    if(deformation<180 && deformation>100);
    {
      car.shapeColor=color(230,230,0);

    }
    if(deformation<100);
    {
      car.shapeColor=color(0,255,0);
    }
  
  }
  
  
  
  
  
  drawSprites();
}


function hasCollied(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+ibullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
}
return false;
}