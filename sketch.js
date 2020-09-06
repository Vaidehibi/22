//to create the physics engine
const Engine= Matter.Engine;
//to create the physical world
const World= Matter.World;
//the objects that live inside the world
const Bodies= Matter.Bodies;


var engine,world,ground,ball;

function setup() {
  var canvas= createCanvas(400,400);
  engine= Engine.create();
 world= engine.world;

 var ground_options= {
   isStatic: true
 
 }
 ground=Bodies.rectangle(200,390,200,20,ground_options);
 World. add(world, ground);
 console.log(ground);
 console.log(ground.position.x);
 console.log(ground.position.y);

 var ball_options= {
   restitution:0.1
 }
 ball= Bodies. circle(200,100,20,ball_options);
 World.add(world, ball);
}


function draw() {
  background(0);
  Engine.update(engine);
  text(mouseX+ ","+ mouseY,mouseX, mouseY) ;
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);
}