const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

score = 0;

var bg;
var scoreColour = "black";

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  gr = new Ground(600, 690, 1200);
  pl1 = new Ground(600, 500, 300);

  str = new Striker();

  //Level1 (6 boxes)
  a1 = new Boxes(475, 465);
  a2 = new Boxes(525, 465);
  a3 = new Boxes(575, 465);
  a4 = new Boxes(625, 465);
  a5 = new Boxes(675, 465);
  a6 = new Boxes(725, 465);

  //level2 (5 boxes)
  b1 = new Boxes(500, 415);
  b2 = new Boxes(550, 415);
  b3 = new Boxes(600, 415);
  b4 = new Boxes(650, 415);
  b5 = new Boxes(700, 415);

  //level3 (4 boxes)
  c1 = new Boxes(525, 365);
  c2 = new Boxes(575, 365);
  c3 = new Boxes(625, 365);
  c4 = new Boxes(675, 365);

  //level4 (3 boxes)
  d1 = new Boxes(550, 315);
  d2 = new Boxes(600, 315);
  d3 = new Boxes(650, 315);

  //level5 (2 boxes)
  e1 = new Boxes(575, 265);
  e2 = new Boxes(625, 265);

  //level6 (1 boxes)
  f1 = new Boxes(600, 215);

  //other
  cons = new ConstraintClass(str.body,{x:130, y:400});
  
  time();

  Engine.run(engine);
}


async function draw() {
  await background(bg);

  push();
  fill(scoreColour);
  textSize(24);
  text("Score : " + score, 1000, 50);
  pop();
  
  drawSprites();

  gr.display();
  pl1.display();
  str.display();

  //level1.display();
  a1.display();
  a2.display();
  a3.display();
  a4.display();
  a5.display();
  a6.display();

  //level2.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();

  //level3.display();
  c1.display();
  c2.display();
  c3.display();
  c4.display();

  //level4.display();
  d1.display();
  d2.display();
  d3.display();

  //level5.display();
  e1.display();
  e2.display();

  //level6.display();
  f1.display();

  a1.score();
  a2.score();
  a3.score();
  a4.score();
  a5.score();
  a6.score();

  b1.score();
  b2.score();
  b3.score();
  b4.score();
  b5.score();

  c1.score();
  c2.score();
  c3.score();
  c4.score();
  
  d1.score();
  d2.score();
  d3.score();

  e1.score();
  e2.score();

  f1.score();
}

function mouseDragged() {
  Matter.Body.setPosition(str.body, {x:mouseX, y:mouseY});
}

function mouseReleased() {
  cons.fly();
}

function keyPressed() {
  if(keyCode === 32) {
    cons.goback();
  }
}

async function time() {
  var url = await fetch("http://worldclockapi.com/api/json/est/now");
  var convert = await url.json();
  var dt = convert.currentDateTime;
  var hour = dt.slice(11, 13);
  console.log(hour);

  if(hour >= 06 && hour <= 18) {
      bg = "white";
      scoreColour = "black";
  } else {
      bg = "black";
      scoreColour = "white";
  }
}