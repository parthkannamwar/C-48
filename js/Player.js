class Player {
  constructor(){

    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank=null;
    this.y=550;
    this.velocityY=50;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
       y: this.y,
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  static removePlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.remove();
  }

  getCarsAtEnd()
  {
    database.ref('carsatend').on("value",(data)=>{
      this.rank = data.val();
    })
  }
  
  static  updateCarsAtEnd(rank)
  {
    database.ref('/').update({
        carsatend : rank
    })
  }
}


