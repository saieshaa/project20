var car,wall;
var speed,weight;

function setup() {
  createCanvas(1350,400);
  
  speed=random(55,90)
  weight=random(400,1500)

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1200, 200, 60, height/2);
  wall.shapeColor = "pink";
  
  car.velocityX=speed;

} 

function draw() {
  background("black"); 
  if (wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
var defromation=0.5*weight*speed* speed/22500;
  
if (defromation>180){
  car.shapeColor="pink";
}
if(defromation<180 && defromation>100){
car.shapeColor = "green"
}

if (defromation<100){
  car.shapeColor = "blue"
}
  }
  drawSprites();
}