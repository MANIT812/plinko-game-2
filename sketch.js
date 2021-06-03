const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ground1;
var divisions=[];
var plinko1=[];
var particle=null;
var ascore=0;
var PLAY=0;
var END=1;
var gameState=PLAY;
var ran;
var retry,retryimg;
function preload(){
  retryimg=loadImage("download.png");
}
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  ground1=new Ground(400,390,800,20);
  for(var i=10; i<800; i=i+80){
    divisions.push(new Division(i,330));
  }
  for(var x=20; x<800; x=x+40){
    plinko1.push(new Plinko(x,50));
  }
  for(var l=10; l<800; l=l+40){
    plinko1.push(new Plinko(l,80));
  }
  for(var f=20; f<800; f=f+40){
    plinko1.push(new Plinko(f,110));
  }
  for(var a=10; a<800; a=a+40){
    plinko1.push(new Plinko(a,140));
  }
  for(var f=20; f<800; f=f+40){
    plinko1.push(new Plinko(f,170));
  }
  for(var a=10; a<800; a=a+40){
    plinko1.push(new Plinko(a,200));
  }
  for(var f=20; f<800; f=f+40){
    plinko1.push(new Plinko(f,230));
  }
  for(var a=10; a<800; a=a+40){
    plinko1.push(new Plinko(a,260));
    
  }
  
}

function draw() {
  background("black");  
  if (gameState===PLAY){
    textSize(20);
    text("500",40,300);
    text("500",100,300);
    text("500",200,300);
    text("200",280,300);
    text("200",350,300);
    text("200",430,300);
    text("100",500,300);
    text("100",580,300);
    text("100",680,300);
    text("100",750,300)
    text("SCORE:-"+ascore,100,25);
    text("Press Space to respawn",250,25);
    Engine.update(engine);
  ground1.display();
  for(var j=0; j<divisions.length; j++){
    divisions[j].display();
  }
  for (var n=0; n<plinko1.length; n++){
    plinko1[n].display();
  }
  if(particle!=null){
    particle.display();

      if(particle.body.position.y>300){
        if(particle.body.position.x<=250){
          ascore=ascore+500;
          particle=null;
        }
        else if(particle.body.position.x>250 && particle.body.position.x<490){
          ascore=ascore+200;
          particle=null;
        }
        else {
          ascore=ascore+100;
          particle=null;
        }
      }
    }
    if(ascore>=2000){
      gameState=END;
    }
  }
if(gameState===END){
  textSize(20);
  text("You have reached the score limit",350,200);
  text("Please press R Try Again",350,240);
  retry=createSprite(250,200,50,50);
  retry.addImage(retryimg);
  retry.scale=0.5;
  ascore=0;
  retry.destroy();
  if(keyDown("r")){
    gameState=PLAY;
    retry=null;
  }
}

drawSprites();
}
function keyPressed(){
  if(keyCode===32 && gameState===PLAY){
       console.log("was")
       particle=new Particle(mouseX,10);
  }
}
