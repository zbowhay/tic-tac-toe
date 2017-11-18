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
  public alertMessage: string;

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
    const gameState: GameCondition = this._gameService.makeMove(boardIndex);
    if (gameState !== GameCondition.continue) {
      let message = '';
      if (gameState === GameCondition.won) {
        message = this.playerXTurn ? 'Player X won!' : 'Player O won!';
      } else { // must be a tie
        message = `It's a tie!`;
      }
      this.showAlert(message);
    } else {
      this.getPlayerTurn();
    }
  }

  showAlert(msg: string) {
    const message = `${msg}\nWould you like to play again?`;
    const doNothing = () => {};
    confirm(message) ? window.location.reload() : doNothing();
  }
}
