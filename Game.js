class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state) {

    database.ref('/').update({
      gameState: state
    });
  }

  async start() {

    if(gameState === 0) {

      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");

      if(playerCountRef.exists()) {

        playerCount = playerCountRef.val()
        player.getCount();
      }

      form = new Form()
      form.display();
    }

    car1 = createSprite(100, 200);
    car2 = createSprite(300, 200);
    car3 = createSprite(500, 200);
    car4 = createSprite(700, 200);
    car = [car1,car2,car3,car4];
  }

  play() {

    form.hide();
    Player.getPlayerInfo();

    if(allPlayers !== undefined) {

      //var displayPosition = 130;

      var index = 0;
      var x = 0;
      var y;
      for(var plr in allPlayers) {

        index = index + 1;
        x= x+200;
        y = displayHeight - allPlayers[plr].distance;
        car[index - 1].x = x;
        car[index - 1].y = y;

        if (index === player.index) {
          
          console.log("yhnjhgfhj")
          car[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2
          camera.position.y = car[index - 1].y;
        }
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null) {

      player.distance += 50;
      player.update();
    }

    drawSprites();
  }
}