const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let engine;
let world;
var ball, recta;
var ground;
var wedge;
var angle=60;
var poly;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var ball_options = {
    restitution : 1.05,
    frictionAir : 0.01
  }
  var cair_options = {
    restitution : 0.5,
    frictionAir : 0.4
  }
  var ground_options = {
    isStatic : true
  }
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  recta = Bodies.rectangle(350,150,70,10,cair_options);
  World.add(world,recta);
  recto = Bodies.rectangle(100,150,70,10,ground_options);
  World.add(world,recto);
  recte = Bodies.rectangle(10,80,70,10,ground_options);
  World.add(world,recte);
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}
function draw() 
{
 background(51);
 Engine.update(engine);
 Matter.Body.rotate(recto,angle);
 push();
 translate(recto.position.x, recto.position.y);
 rotate(angle);
 rect(0,0,100,20);
 pop();
 angle +=0.15;
 ellipse(ball.position.x,ball.position.y,20);
 rect(ground.position.x,ground.position.y,150,30);
 rect(recta.position.x,recta.position.y,70,10);
 rect(recte.position.x,recte.position.y,10,150);
}