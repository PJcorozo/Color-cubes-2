function setup() {
  createCanvas(800,400);
  O1=createSprite(400, 200, 50, 50);
  O2=createSprite(200, 400, 50, 50);
  T1=createSprite(100,300,30,30)
  T2=createSprite(100,50,20,20)
  T2.velocityY = 1
}

function draw() {
  background("blue");  
  O2.x = mouseX
  O2.y = mouseY
  if(isTouching(O1,O2)){
  O1.shapeColor = "red"  
  O2.shapeColor = "red"  
  }
  else{
  O1.shapeColor = "darkgreen"  
  O2.shapeColor = "darkgreen"   
  }
  if(isTouching(T1,T2)){
  T1.visible = false  
  T2.visible = false  
  }else{
  T1.visible = true  
  T2.visible = true  
  }
  drawSprites();
}
