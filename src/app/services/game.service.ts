import { Injectable } from '@angular/core';

import { Forecast } from '../models/index';

@Injectable()
export class GameService {
  protected playerXTurn = true;
  protected maxTurns = 9;
  protected currentTurn = 1;
  protected boardState: number[] = [
    0, 0, 0,  // 0 is unmarked
    0, 0, 0,  // 1 is x
    0, 0, 0   // -1 is o
  ];

  constructor() { }

  public isPlayerXTurn() {
    return this.playerXTurn;
  }

  public makeMove(boardIndex: number) {
    this.boardState[boardIndex] = this.playerXTurn ? 1 : -1;
    return this.endTurn();
  }

  public getMaxTurns() {
    return this.maxTurns;
  }

  // handle all game state conditions
  // - player won
  // - tie
  // - continue game
  private endTurn(): GameCondition {
    if (this.playerWon()) {
      return GameCondition.won;
    } else if (this.currentTurn === 9) {
      return GameCondition.tie;
    } else {
      this.currentTurn++;
      this.playerXTurn = !this.playerXTurn;
      return GameCondition.continue;
    }
  }

  private playerWon(): boolean {
    // impossible for a player to win in less than 5 turns
    if (this.currentTurn < 5) {
      return false;
    } else {
      const lineSums = this.gatherAllLineTotals();
      // if any of the sums = 3 or -3 then either playerX or playerO won respectively
      return lineSums.includes(3) ? true : lineSums.includes(-3) ? true : false;
    }
  }

  private gatherAllLineTotals(): Number[] {
    const lineTotals = [];
    for (const key in Line) {
      if (Line.hasOwnProperty(key) && isNaN(Number(key))) {
        lineTotals.push(this.sumLine(Line[key.toString()]));
      }
    }
    return lineTotals;
  }

  private sumLine(line: Line): Number {
    const b = this.boardState;
    switch (line) {
      case Line.diagDown:
        return b[0] + b[4] + b[8];
      case Line.diagUp:
        return b[6] + b[4] + b[2];
      case Line.horTop:
        return b[0] + b[1] + b[2];
      case Line.horMid:
        return b[3] + b[4] + b[5];
      case Line.horBot:
        return b[6] + b[7] + b[8];
      case Line.verLeft:
        return b[0] + b[3] + b[6];
      case Line.verMid:
        return b[1] + b[4] + b[7];
      case Line.verRight:
        return b[2] + b[5] + b[8];
      default:
        return 0;
    }
  }
}

export enum GameCondition {
  won,
  tie,
  continue
}

enum Line {
  diagDown, // \
  diagUp,   // /
  horTop,
  horMid,
  horBot,
  verLeft,
  verMid,
  verRight
}
