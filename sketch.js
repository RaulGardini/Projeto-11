var path, boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;


function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,400);

// Movendo o fundo 
path = createSprite(200, 200);
path.addImage(pathImg);
path.velocityY = 0;
path.scale = 1;

//Criando menino que corre 
boy = createSprite(300, 290, 50, 50);
boy.addAnimation("caraCorrendo", boyImg);
boy.scale = 0.09;


// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;


//Crie Boundary direito 

}


function draw() {
background(0);
path.velocityY = 4;

// Menino se movendo no eixo X com o mouse
edges= createEdgeSprites();
boy.collide(edges[3]);



 //Reiniciar o fundo
 if(path.y > 400){
    path.y = height /2;
 }
boy.x = World.mouseX;


 drawSprites();

 }




