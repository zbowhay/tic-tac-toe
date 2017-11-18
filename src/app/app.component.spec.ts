import test from 'ava';

import { AppComponent } from './app.component';
import { GameService } from './services/index';

const app = new AppComponent(new GameService());

test('Title is \'Welcome to Tic-Tac-Toe!\'', (t) => {
  const expected = 'Welcome to Tic-Tac-Toe!';
  t.is(app.title, expected);
});

test(`Player 'X' should always start first`, (t) => {
  const expected = true;
  t.is(app.playerXTurn, expected);
});
