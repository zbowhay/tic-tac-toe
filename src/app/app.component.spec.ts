import test from 'ava';

import { AppComponent } from './app.component';

const app = new AppComponent();

test('Title is \'Welcome to Tic-Tac-Toe!\'', (t) => {
  const expected = 'Welcome to Tic-Tac-Toe!';
  t.is(app.title, expected);
});
