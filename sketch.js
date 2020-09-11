// constant values
const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World

//Create variables here
  var dog,Hdog,food,foodS
  var database
  var engine,world
  var dogIm,doghappy
function preload()
{
  //load images here
   dogIm = loadImage("Dog.png");
   doghappy = loadImage("happydog.png");

   
}

function setup() {
  createCanvas(500,500);
  database = firebase.database();

   engine = Engine.create();
   world = engine.world;

   foodS = database.ref('food');
   foodS.on("value",readstock);

   dog = createSprite(250,300,150,150)
    dog.addImage(dogIm);
    //Hdog.addImage(doghappy);
  
  
}


function draw() {  
  background(46,139,87)

  drawSprites();
  //add styles here

}



