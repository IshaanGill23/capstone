var alien,engine,world,rope,star,ground
var bg_img,star_img,alien_img,button,button2,button3,mute_btn
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
const Composite = Matter.Composite
const Composites = Matter.Composites
const Render = Matter.Render


function preload() {
bg_img = loadImage("bg.jpg")
star_img = loadImage("star.png")
alien_img = loadImage("alien_idle.png")
}


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  button = createImg('cut_btn.png');
  button.position(20,30);
  button.size(50,50);
  button.mouseClicked(drop);

   //btn 2
   button2 = createImg('cut_btn.png');
   button2.position(330,35);
   button2.size(60,60);
   button2.mouseClicked(drop2);
 
   //btn3
   button3 = createImg('cut_btn.png');
   button3.position(360,200);
   button3.size(60,60);
   button3.mouseClicked(drop3);

   rope = new Rope(8,{x:40,y:30});
   rope2 = new Rope(7,{x:370,y:40});
   rope3 = new Rope(4,{x:400,y:225});
 
   ground = new Ground(200,600,600,20);
 
   star_con = new Link(rope,star)
   star_con2 = new Link(rope2,star)
   star_con3 = new Link(rope3,star)
   star = Bodies.circle(300,300,20)
   Matter.Composite.add(rope.body,star)

 // alien = createSprite(170,300)
  //alien.addImage(alien_img)
}


function draw() 
{
  background(51);
  image(bg_img,0,0,400,400)
  
  rope.show();
  rope2.show();
  rope3.show();

  Engine.update(engine);
  ground.show();

  drawSprites();
}

function drop()
{
  
  rope.break();
  star_con.detach();
  star_con = null; 
}

function drop2()
{
  
  rope2.break();
  star_con_2.detach();
 star_con_2 = null;
}

function drop3()
{
 // cut_sound.play();
  rope3.break();
star_con_3.detach();
star_con_3 = null;
}


function collide(body,sprite)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=80)
            {
              World.remove(engine.world,star);
               star = null;
               return true; 
            }
            else{
              return false;
            }
         }
}
