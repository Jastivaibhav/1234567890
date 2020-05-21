var box;

  function setup(){
   createCanvas(1200,400);
   box=createSprite(50,200,20,20);
  }

  function draw(){
   background("black");
box.velocityX=5;

if(box.x>1200){
  box.x=50
}

  if(box.x>0 && box.x<400){
    background("pink");
    text("HAPPY",250,200);
   // text("YOU ARE THE",250,300)
  }

  if(box.x>400 && box.x<800){
    background("violet");
    text("BIRTHDAY",600,200);
   // text()
  }

  if(box.x>800 && box.x<1200){
    background("yellow");
    text("AMMA",1000,200);
  }


 ellipseMode(RADIUS);
 ellipse(box.position.x,box.position.y);
 drawSprites();
}