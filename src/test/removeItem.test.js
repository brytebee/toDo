import removeItem from '../removeItem.js';

jest.mock('../removeItem');
describe('Remove function', () => {
  test('Remove one new item from the list', () => {
    expect(removeItem().length).toBe(0);
  });
});