const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground,engine,world;

function setup() {
  createCanvas(800,400);
 engine=Engine.create();
world=engine.world
ground=new Ground(400,380,800,20)
box1=new Box(600,355,50,50)
box2=new Box(575,355,50,50)
box3=new Box(550,355,50,50)
box4=new Box(525,355,50,50)
box5=new Box(500,355,50,50)
box6=new Box(475,355,50,50)

box11=new Box(587.5,330,50,50)
box22=new Box(562.5,330,50,50)
box33=new Box(537.5,330,50,50)
box44=new Box(512.5,330,50,50)
box55=new Box(487.5,330,50,50)

box111=new Box(575,305,50,50)
box222=new Box(550,305,50,50)
box333=new Box(525,305,50,50)
box444=new Box(500,305,50,50)

box1111=new Box(562.5,280,50,50)
box2222=new Box(537.5,280,50,50)
box3333=new Box(512.5,280,50,50)

box11111=new Box(550,255,50,50)
box22222=new Box(525,255,50,50)

bbooxx=new Box(537.5,230,50,50)
bob=new Bob(300,200,40)
rope=new Rope(bob.body,{x:300,y:50})
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
ground.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box11.display();
box22.display();
box33.display();
box44.display();
box55.display();
box111.display();
box222.display();
box333.display();
box444.display();
box1111.display();
box2222.display();
box3333.display();
box11111.display();
box22222.display();
bbooxx.display();
bob.display();
rope.display();
}

function mouseDragged() {
Matter.Body.setPosition(bob.body,{x:mouseX,y:mouseY})
}