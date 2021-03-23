const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone = new Stone(200 , 400 , 70 , 70);
    rubber = new Rubber(500 , 500 , 50);
    iron = new Iron(100 , 550 , 70 , 70);
    stone = new Stone( 400 , 350 , 70 , 70);
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone.display();
    iron.display();
    rubber,display();

    
 
}