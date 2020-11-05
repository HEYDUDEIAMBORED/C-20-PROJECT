var car,wall
var speed,weight
var deformation
function setup() {
  createCanvas(1600,400);
  car=createSprite(10,200,50,50)
  wall=createSprite(1500,200,60,200)
 

  
}

function draw() {
  background("black");  
  car.velocityX=speed
  speed=Math.round(random(55,90))
  weight=Math.round(random(400,1500))
  deformation=0.5*weight*speed*speed/22500
  if(wall.x-car.x<(car.width+wall.width/2)){
    if (deformation<100){
      car.shapeColor("green")
    }
    if (deformation>100 && deformation<180){
      car.shapeColor("yellow")
    }
    if (deformation<180){
      car.shapeColor("red")
    }
  }
  drawSprites();
}
function collision(object1,obeject2){
 
  if ( object1.y-obeject2.y<obeject2.height/2+object1.height/2 &&
    obeject2.y-object1.y<obeject2.height/2+object1.height/2 && 
     obeject2.x-object1.x<obeject2.width/2+object1.width/2 &&
     object1.x-obeject2.x<obeject2.width/2+object1.width/2 ){
return true;
  
  }
  else {
    return false;
  }
}