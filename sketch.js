const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles =  [];
var plinkos = [];
var divison = [];

var divisionHeight = 300

function setup() {
  createCanvas(890,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,10)
  for (var k = 0; k < width; k= k+80){
  divison.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight))
  }
  for (var j = 40; j < width; j = j+50){
    plinkos.push(new plinko(j,75));
  }
  for (var j = 15; j < width; j = j+50){
    plinkos.push(new plinko(j,175));
  }
  for (var j = 40; j < width; j = j+50){
    plinkos.push(new plinko(j,275));
  }
  for (var j = 15; j < width; j = j+50){
    plinkos.push(new plinko(j,375));
  }
  
  
  
    
  
  
  
  


  
}

function draw() {
  background(0);
  
  Engine.update(engine);

  ground.display()
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
  }

  for (var k = 0; k < divison.length; k++){
    divison[k].display();
    }
  for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }
  for (var k = 0; k < particles.length; k++){
    particles[k].display();
  }


  drawSprites();

  console.log(mouseX,mouseY)
}