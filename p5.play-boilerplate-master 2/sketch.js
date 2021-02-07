const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;

var engine, world;
var mask1, mask2, mask3, mask4, mask5;
var sanitizer1, sanitizer2,sanitizer3;
var virus1, virus2, virus3, virus4, virus5;
var crewmate1, crewmate2, crewmate3, crewmate4;
var matey = [];
var ground1, ground2, ground3, ground4, ground5;
var slingshot1;
var imposter, backgroundImage;
var edges;
var gameState = "onSling";
var gameSound;
var flag = 4;
var score = 0;
function preload(){
  imposterImage = loadImage("images/imposter.png");
  backgroundImage = loadImage("images/background.jpeg");
  gameSound = loadSound("images/recording.mp3");
  gameOverImage = loadImage("images/gameOver.png");
}
function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  // created masks
  mask1 = new Mask(550,500);
  mask2 = new Mask(650,500);
  mask3 = new Mask(750,500);
  mask4 = new Mask(850,500);
  // created sanitizers
  sanitizer1 = new Sanitizer(875,300);
  sanitizer2 = new Sanitizer(925, 300);
  sanitizer3 = new Sanitizer(975, 300);
  sanitizer4 = new Sanitizer(1025,300);
  sanitizer5 = new Sanitizer(1075,300);
  sanitizer6 = new Sanitizer(1125,300);
  // created virus
  virus1 = new Virus(650,400);
  virus2 = new Virus(750, 400);
  virus3 = new Virus(850, 400);
  virus4 = new Virus(950,400);
  virus5 = new Virus(1050,400);
  // created crewmates
  crewmate1 = new Crewmate(80,270);
  crewmate2 = new Crewmate(160,270);
  crewmate3 = new Crewmate(240,270);
  crewmate4 = new Crewmate(350,190);
  matey.push(crewmate1);
  matey.push(crewmate2);
  matey.push(crewmate3);
  matey.push(crewmate4);
  // created ground/platform
  ground1 = new Ground(600,590,1200,20);
  ground2 = new Ground(200, 490, 400, 270);
  ground3 = new Ground(700,525, 500,20);
  ground4 = new Ground(850,425,300,20);
  ground5 = new Ground(1000,325,350,20);
  // created slingshot
  slingshot1 = new SlingShot(crewmate4.body, {x:350,y:190});
}

function draw() {
  background(backgroundImage);  
  Engine.update(engine);
  edges = createEdgeSprites();
  gameSound.loop();
  textSize(20);
  fill("#00ffb3");
  text("Score:"+score, 50,50);
  text("Press space to relaunch another crewmate", 50,75);
  text("Drag your mouse to launch the crewmates at the obstacles", 50,100);
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  ground5.display();
  mask1.display();
  mask2.display();
  mask3.display();
  mask4.display();
  mask1.scoref();
  mask2.scoref();
  mask3.scoref();
  mask4.scoref();
  sanitizer1.display();
  sanitizer1.display();
  sanitizer2.display();
  sanitizer3.display();
  sanitizer4.display();
  sanitizer5.display();
  sanitizer6.display();
  sanitizer1.scoref();
  sanitizer2.scoref();
  sanitizer3.scoref();
  sanitizer4.scoref();
  sanitizer5.scoref();
  sanitizer6.scoref();
 // virus1.display();
  virus2.display();
  virus3.display();
  virus4.display();
  virus2.scoref();
  virus3.scoref();
  virus4.scoref();
 // virus5.display();
  crewmate1.display();
  crewmate2.display();
  crewmate3.display();
  crewmate4.display();
  slingshot1.display();
  uLost();
  drawSprites();
}

function mouseDragged(){
  if(gameState!=="launched"){
    Matter.Body.setPosition(matey[matey.length-1].body,{x: mouseX, y:mouseY});
  }
}

function mouseReleased(){
  slingshot1.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode===32){
    matey[matey.length-1].trajectory = [];
    matey.pop();
    flag = flag - 1;
    slingshot1.attach(matey[matey.length-1].body);
    Matter.Body.setPosition(matey[matey.length-1].body, {x:350, y:190});
    gameState = "onSling";
  }
}
function uLost(){
  if(flag === 0){
  background(gameOverImage);
    gameSound.stop();
    fill("orange");
    text("Your score is "+score, 550,510);

    if(score<20){
      text("HAHAHAHAHA U LOST TRY AGAIN BUDDYBOI", 440,550);
      text("Make sure you practice your social distancing rules", 410,100);
    }
    else{
      text("YOU DID A GREAT JOB HEHE", 500,550);
      text("Good job for following the social distancing rules", 410,100);
    }
  }
}