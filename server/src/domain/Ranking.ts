import { Player } from "./Player";
import { PlayerDetailsType } from "./PlayerList";

export class Ranking {
  readonly ranking: Array<PlayerDetailsType>;
  constructor(players: Array<Player>) {
    this.ranking = this.preparePlayersDetails(players);
  }

  private preparePlayersDetails(players: Array<Player>): Array<PlayerDetailsType> {
    return players.map((player) => {
      return { name: player.name, rating: player.successRate };
    });
  }

  
  //public meanSuccesRate():number{

  //    const succesRateSum = this.players.reduce((sum, player)=>  {return sum + player.succesRate},0)
  //  return succesRateSum >0 ? Number((succesRateSum / this.players.length).toFixed(2)) :0
  //}
}
