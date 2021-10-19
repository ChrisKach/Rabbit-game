var garden,rabbit,apple,leaf;
var gardenImg,rabbitImg,appleImg,leafImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}

function createApples(){
  if(frameCount%100===0){
  apple=createSprite(random(50,350),-5,10,10);
  apple.addImage(appleImg);
  apple.scale=0.075;
  apple.lifetime=200;
  apple.velocityY=3;
  }
}
function createLeaves(){
  if(frameCount%100===0){
  leaf=createSprite(random(50,350),-5,10,10);
  leaf.addImage(leafImg);
  leaf.scale=0.075;
  leaf.lifetime=200;
  leaf.velocityY=3;
  }
}
function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);


  rabbit.x = World.mouseX;
  createApples();
  createLeaves();
  drawSprites();
}