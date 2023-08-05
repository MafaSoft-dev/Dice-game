import { Player } from "../domain/Player";
import { User } from "../domain/User";
import { GameType } from "../domain/Player";
import { PlayerList } from "../domain/PlayerList";

export interface PlayerInterface {
  createPlayer(playerDetails: User): Promise<Player>;
  changeName(playerId: string, newName: string): Promise<boolean>;
  addGame(playerDetails: Player): Promise<boolean>;
  deleteAllGames(playerDetails: Player): Promise<boolean>;
  findPlayer(playerEmail: string): Promise<boolean>;
  readPlayer(playerId: string): Promise<Player>;
  getPlayerList(): Promise<PlayerList>;
  getGames(playerId: string): Promise<Array<GameType>>;
}
