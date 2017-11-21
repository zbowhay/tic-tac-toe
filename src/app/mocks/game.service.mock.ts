import { GameService } from '../services/game.service';

export class GameServiceMock extends GameService {
  public getBoardState(): number[] {
    return this.boardState;
  }

  public reset() {
    this.playerXTurn = true;
    this.maxTurns = 9;
    this.currentTurn = 1;
    this.boardState = [
      0, 0, 0,  // 0 is unmarked
      0, 0, 0,  // 1 is x
      0, 0, 0   // -1 is o
    ];
  }

  public testIfWinnableBeforeTurnFive() {
    this.boardState = [
      1, 1, 1,
      0, 0, 0,
      0, 0, 0
    ];
    return this.makeMove(3); // should return 2 even though player X has a winning line
  }
}
