import test from 'ava';
import { MarkComponentMock } from '../../mocks/index';

const mcMock = new MarkComponentMock();

test(`Player's mark should be shown on hover`, (t) => {
  const expected = true;
  const actual = mcMock.isMarkShowingOnHover(true);
  t.is(actual, expected);
});

test(`Player's mark should NOT be shown unless hover`, (t) => {
  const expected = false;
  const actual = mcMock.isMarkShowingOnHover(false);
  t.is(actual, expected);
});

test(`Player's mark should be placed permanently on click`, (t) => {
  const expected = true;
  const actual = mcMock.isMarkPlacedOnClick();
  t.is(actual, expected);
});

test(`If it is Player X's turn the Mark should be an X`, (t) => {
  const expected = true;
  const actual = mcMock.isMarkPlacedAsXOnXTurn(true);
  t.is(actual, expected);
});

test(`If it is NOT Player X's turn the Mark should be an X`, (t) => {
  const expected = false;
  const actual = mcMock.isMarkPlacedAsXOnXTurn(false);
  t.is(actual, expected);
});
