var bg, thiefimg,thief, guard,guardimg,bank,ground;
var database,gameState=0,game,player,playerCount,form,players,allPlayers;
var x,y;
var distance=0;
var back;

function preload()
{
    bg = loadImage("images/bg4.png");
    thiefimg = loadAnimation("images/1.png","images/2.png","images/3.png","images/4.png","images/5.png","images/6.png");
    guardimg = loadAnimation("images/p1.png","images/p2.png","images/p3.png","images/p4.png","images/p6.png","images/p7.png","images/p8.png") 
    bank=loadImage("images/BG2.png")
}

function setup()
{
    createCanvas(1330,650);

    database=firebase.database();

game = new Game();
game.getState();
game.start();



}

function draw()
{
    background(bank);

if(playerCount===2)
{
    game.update(1);
}


if(gameState===1)
{
    clear();

    game.play();
}
    


}

