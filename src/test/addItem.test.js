import add from '../addItem.js';

jest.mock('../addItem');

describe('Add function', () => {
  test('Add one new item to the list', () => {
    expect(add().length).toBe(2);
  });
});
