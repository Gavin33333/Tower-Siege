var stand1 , box1, box2 , box3, box4, box5, box6, polygon1

function setup() {
  createCanvas(800,400);

  stand1 = new Ground (600,200,60,20)
  box1 = new Box (590,200,20,20);
  box2 = new Box(610,200,20,20);
  box3 = new Box(630,200,20,20);
  box4 = new Box(600,220,20,20);
  box5 = new Box(620,220,20,20);
  box6 = new Box(600,240,20,20);
  polygon1 = new Polygon(100,100);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  stand1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  polygon1.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon1.body,{x: mouseX, y: mouseY})
}

function mouseReleased(){
  slingshot.fly()
}