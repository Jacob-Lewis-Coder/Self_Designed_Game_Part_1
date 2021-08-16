var bg, backgroundImage
var ground, groundImage

function preload(){

  backgroundImage = loadImage("Background.jpg")
  groundImage = loadImage("ground_1.png")

}

function setup() {
  createCanvas(1367, 600);



  ground = createSprite(width / 2  - 50, height - 120);
  ground.addImage(groundImage)
  ground.scale = 6
 
}

function draw() {
 background(backgroundImage)
  // background.velocityX = -5;

  ground.velocityX = -5

  if(ground.x < 150){
    ground.x = ground.width / 2
  }


  drawSprites();
}

