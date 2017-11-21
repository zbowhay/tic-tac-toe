import test from 'ava';
import { GameServiceMock } from '../mocks/index';
import { GameCondition } from '../services/index';

// GameCondition
// won      = 0
// tie      = 1
// continue = 2

const gsMock = new GameServiceMock();

test.beforeEach('Reset GameService', (t) => {
  gsMock.reset();
});

// ----------- Test Defaults -------------

test(`Max # of playable turns should be 9`, (t) => {
  const expected = 9;
  const actual = gsMock.getMaxTurns();
  t.is(actual, expected);
});

test(`Board should always start off empty`, (t) => {
  const expected = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0
  ];
  const actual = gsMock.getBoardState();
  t.deepEqual(actual, expected);
});

// ---------- Test Game Logic -----------

test(`Nobody can win until turn 5`, (t) => {
  const expected = 2;
  const actual = gsMock.testIfWinnableBeforeTurnFive();
  t.is(actual, expected);
});

const xShouldWin = `X should win this game:\n${prettyPrintBoardState([1, -1, 0, 0, 1, -1, 0, 0, 1])}`;
test(xShouldWin, (t) => {
  const expected = [GameCondition.won, true]; // X wins
  // play game and get gameCondition and winner
  const gameCondition = playGame([0, 1, 4, 5, 8]);
  const xWon = gsMock.isPlayerXTurn();
  const actual  = [gameCondition, xWon];
  // test
  t.deepEqual(actual, expected);
});

const oShouldWin = `O should win this game:\n${prettyPrintBoardState([1, -1, 0, 1, -1, 0, 0, -1, 1])}`;
test(oShouldWin, (t) => {
  const expected = [GameCondition.won, false]; // O wins
  // play game and get gameCondition and winner
  const gameCondition = playGame([0, 1, 3, 4, 8, 7]);
  const oWon = gsMock.isPlayerXTurn();
  const actual  = [gameCondition, oWon];
  // test
  t.deepEqual(actual, expected);
});

const shouldTie = `This game should be a tie:\n${prettyPrintBoardState([1, -1, 1, 1, -1, 1, -1, 1, -1])}`;
test(shouldTie, (t) => {
  const expected = GameCondition.tie; // It's a tie
  // play game and get gameCondition
  const actual = playGame([0, 1, 2, 4, 3, 6, 5, 8, 7]);
  // test
  t.deepEqual(actual, expected);
});


// ----------- Helper Functions ------------

function playGame(moveIndexes: number[]): GameCondition {
  let gameState = null;
  for (let i = 0; i < moveIndexes.length; i++) {
    gameState = gsMock.makeMove(moveIndexes[i]);
  }
  return gameState;
}

function prettyPrintBoardState(boardState: number []): string {
  let pretty = ``;
  const getMark = function(markNum) {
    return markNum === 0 ? ' ' :
      markNum === 1 ? 'X' :
      markNum === -1 ? 'O' : ' ';
  };
  // convert numeric values to their character conterparts
  const board = boardState.map(getMark);
  // build board
  pretty += `\t ${board[0]} | ${board[1]} | ${board[2]} \n`;
  pretty += '\t-----------\n';
  pretty += `\t ${board[3]} | ${board[4]} | ${board[5]} \n`;
  pretty += '\t-----------\n';
  pretty += `\t ${board[6]} | ${board[7]} | ${board[8]} `;
  return pretty;
}
