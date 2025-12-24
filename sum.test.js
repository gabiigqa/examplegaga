const sum = require('./sum');

test('suma 2 + 3 = 5', () => {
  expect(sum(2, 3)).toBe(5);
});

test('suma números negativos', () => {
  expect(sum(-1, -1)).toBe(-2);
});