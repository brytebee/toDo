import clearAll from '../clearAll.js';

jest.mock('../clearAll');

describe('Clear all completed function', () => {
  test('Remove all completed items from list', () => {
    expect(clearAll().length).toBe(1);
  });
});
