var fixedRect,movingRect;
 function setup() { 
   createCanvas(1200,800); 
   fixedRect=createSprite(200, 200, 50, 80);
    fixedRect.shapeColor="green"; 
    fixedRect.debug=true;
     movingRect=createSprite(400,200,80,30);
      movingRect.shapeColor="green"; 
      movingRect.debug=true; 
    movingRect.velocityY=-5;
    fixedRect.velocityY=5;
    } 
      function draw() { 
        background(0,0,0); 
        movingRect.x=World.mouseX; 
        movingRect.y=World.mouseY;
         console.log(movingRect.x-fixedRect.x); 

bounceOff(movingRect,fixedRect);
        
          drawSprites();
        }

        