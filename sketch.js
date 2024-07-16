  
var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var score = 0;
var lives = 3;
var ground;

function preload(){
  towerImg = loadImage("./assets/tower.png");
  doorImg = loadImage("./assets/door.png");
  climberImg = loadImage("./assets/climber.png");
  ghostImg = loadImage("./assets/ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600,600);
  spookySound.loop();
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImg);

  ground = createSprite(300, 590, 600, 10);
  ground.visible = false;

}

function draw() {
  background(255);

  if (tower.y > 400){
      tower.y = 300
  } 
  
  if (gameState === "play") {
    
    if(keyDown("left_arrow")){
        ghost.x = ghost.x - 3;
    }
    if(keyDown("right_arrow")){
        ghost.x = ghost.x + 3;
    }
    if(keyDown("space")){
        ghost.velocityY = -10;               
    }   

    ghost.velocityY = ghost.velocityY + 0.8;
    
    spawnDoors();

    if(climbersGroup.isTouching(ghost)){
      ghost.velocityY = 0;
    }
    
    if(invisibleBlockGroup.isTouching(ghost) || ghost.y > 600){
      lives -= 1;
      ghost.x = 200;
      ghost.y = 200;
      if(lives <= 0) {
        ghost.destroy();
        gameState = "end";
      }
    }

    ghost.collide(ground);

    score = score + Math.round(getFrameRate()/60);

    drawSprites();

    fill("white");
    textSize(20);
    text("Score: " + score, 10, 30);
    text("Lives: " + lives, 10, 60);
  }
  
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250);
  }
}

function spawnDoors() {
  if (frameCount % 240 === 0) {
    var door = createSprite(200, -50);
    var climber = createSprite(200,10);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;

    door.addImage(doorImg);
    climber.addImage(climberImg);
    
    door.velocityY = 1;
    climber.velocityY = 1;
    invisibleBlock.velocityY = 1;

    door.x = Math.round(random(120,400));
    climber.x = door.x;
    invisibleBlock.x = door.x;
    
    door.lifetime = 800;
    climber.lifetime = 800;
    invisibleBlock.lifetime = 800;
    
    doorsGroup.add(door);
    climbersGroup.add(climber);
    invisibleBlockGroup.add(invisibleBlock);
  }
}
