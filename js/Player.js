class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null;
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
      rank: this.rank
    });
  }
 
  getRanking() {
    var finishedPlayerRef = database.ref('finishedPlayer').on("value",(data)=> {
      finishedPlayer = data.val();
    })
  }

  static updateRank() {

    database.ref('/').update({
      finishedPlayer: finishedPlayer + 1
    })
    this.rank = this.rank + 1
  }



  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
