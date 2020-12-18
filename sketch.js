const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball,rope
var box1,box2,box3,box4,box5,box7,box8,box9,box10
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(3000,800);
  //createSprite(400, 200, 50, 50);
  ground = new Ground(1500,500,3000,20);
  ball = new Ball(200,200,80);
  rope = new Rope(ball.body,{x:500,y:50});
  box1 = new Box(900)
  box2 = new Box(900)
  box3 = new Box(900)
  box4 = new Box(900)
  box5 = new Box(900)
  box6 = new Box(900)
  box7 = new Box(800)
  box8 = new Box(800)
  box9 = new Box(800)
  box10 = new Box(800)
  box11 = new Box(800)
  box12 = new Box(800)
  box13 = new Box(700)
  box14 = new Box(700)
  box15 = new Box(700)
  box16 = new Box(700)
  box17 = new Box(700)
  box18 = new Box(700)
  box19 = new Box(700)
  box20 = new Box(700)
  
}

function draw() {
  Engine.update(engine);
  background(255,255,255);
  ground.display(); 
ball.display();
  rope.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
}
function mouseDragged(){
  
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}