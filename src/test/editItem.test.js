import editItem from '../editItem.js';

jest.mock('../editItem');

describe('Edit function', () => {
  test('Edit a list item', () => {
    expect(editItem()).toBe('some state...');
  });
});