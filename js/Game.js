class Game 
{
 getState()
 {
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start()
  {
    if(gameState === 0)
    {
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
    }

    back=createSprite(665,325);
    back.scale=3;
    back.addImage(bg);

    ground = createSprite (650,640,1330,10);

    guard=createSprite(200,600);
    guard.addAnimation("guard",guardimg);
    guard.scale=0.7;

    thief = createSprite(800,600);
    thief.addAnimation("thief",thiefimg);
    thief.scale=1.5;



    players=[guard,thief];

  }

  play()
  {

    form.hide();

    thief.bounceOff(ground);
    guard.bounceOff(ground);

    Player.getPlayerInfo();

    if(allPlayers !== undefined)
    {
      background(0);
      //image(bg,0,0, 1330*9,750);
   
      var index = 0;
      
      for(var plr in allPlayers)
      {
        
        index = index + 1 ;

        x= index * 200 + allPlayers[plr].distance;
        console.log(x);
        y= allPlayers[plr].y;
        //y=450;

        players[index-1].x=x;
        players[index-1].y=y;
        
        if (index === player.index)
        {

          camera.position.x = players[index-1].x ;
         // camera.position.y = y;

          fill("red");
          ellipse(x,y,80,80)
        

         

      }

      }

      if(guard.isTouching(thief))
      {
        game.end();
      }

      

    }

    if(keyIsDown(RIGHT_ARROW) && player.index!==null)
    {
   
      player.distance =player.distance+ 10;
      
      player.update();
    }

    if(keyIsDown(UP_ARROW) && player.index!==null)
    {
   
      player.y =player.y- 10;
      
      player.update();
    }

    if(!keyIsDown(UP_ARROW) && player.index!== null)
    {
      player.y += 10;
      player.update();
    }

  /*  if(keyWentUp(UP_ARROW) && player.index!==null)
    {
   
      player.y =player.y+ 10;
      
      player.update();
    }*/


    

    drawSprites();
  }

  end()
  {
    alert("GAME OVER!!!")

    gameState=0;
  }
  
}

