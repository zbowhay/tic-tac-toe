import { Component } from '@angular/core';
import { GameService, GameCondition } from './services/index';

@Component({
  selector: 'my-app', // tslint:disable-line
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  public title: string;
  public playerXTurn: boolean;
  public boardSize = 9;

  constructor(private _gameService: GameService) {
    this.setTitle('Welcome to Tic-Tac-Toe!');
    this.getPlayerTurn();
  }

  setTitle(str: string) {
    this.title = str;
  }

  getPlayerTurn() {
    this.playerXTurn = this._gameService.isPlayerXTurn();
  }

  makeMove(boardIndex: number) {
    console.log('making move');
    const gameState: GameCondition = this._gameService.makeMove(boardIndex);
    console.log(`gameState: ${gameState}`);
    if (gameState === GameCondition.won) {
      const message = this.playerXTurn ? 'Player X won!' : 'Player O won!';
      console.log(message);
      alert(message);
    } else if (gameState === GameCondition.tie) {
      alert(`It's a tie!`);
    } else {
      this.getPlayerTurn();
    }
  }
}
