var monkey;
var monkey_running;
var banana; 
var bananaImage; 
var obstacle; 
var obstacleImage;
var FoodGroup; 
var obstacleGroup;
var score;
var ground;
var survivalTime=0;
var END = 0;
var bananaScore=0;
var PLAY=1;
var gameState=PLAY;
var bigJungle;
var bigJungle1;



function preload(){
  
  
  monkey_running =            loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

  
  
 
}



function setup() {
  createCanvas(600,200);
  //creating monkey
  monkey=createSprite(80,160,20,20);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale=0.1
  
  //creating ground
  ground=createSprite(400,190,900,10);
  ground.velocityX=-4;
  ground.X=ground.width/2;
  console.log(ground.x);
  
  invisiGround = createSprite(300,195,600,10);
  invisiGround.visible = false;
  
  bananaGroup=new Group();
  obstacleGroup=new Group();
  

  
 
  

  
}


function draw() {
background(255);
  

if(gameState==PLAY){
   survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time :" +survivalTime,100,50);
    
  if(ground.x<0){
  ground.x=ground.width/2;
}
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
  monkey.velocityY=monkey.velocityY + 0.8;
  //monkey.collide(ground);
  
 food();
  obstacles();

  
      if (monkey.isTouching(bananaGroup)){
     bananaScore++;  
      bananaGroup.destroyEach();
    
    }
    
    if (monkey.isTouching(obstacleGroup)){
      gameState = END;
    }
  }
    if (gameState === END) {
      ground.velocityX=0;
      
     obstacleGroup.destroyEach();
    bananaGroup.destroyEach();
    
  
  
    
  
  
      
  
    
 
  
 
  
 
}

  
  monkey.collide(invisiGround);
  
  
  
  drawSprites();

 
}


function food(){
     if (frameCount%80 === 0){
    
    banana = createSprite(620,Math.round(random(10,100)), 50, 50 )
    banana.addImage("banana", bananaImage);
    banana.scale = 0.1;
    banana.velocityX =-(4);           
    banana.lifetime = 220;
    bananaGroup.add(banana);
   
     }
}


function obstacles(){
    if (frameCount%200 === 0){
    
    obstacle = createSprite(620,180,50,50);
    obstacle.addImage("rock", obstacleImage);
   // obstacle.setCollider("circle", 0, 0, 180);
    obstacle.scale = 0.13 ;
    obstacle.velocityX = -(4);
    obstacle.lifetime = 220;
    obstacleGroup.add(obstacle);
    
  }
}


