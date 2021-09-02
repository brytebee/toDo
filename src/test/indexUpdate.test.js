import indexUpdate from '../indexUpdate.js';

jest.mock('../indexUpdate');

describe('Index update function', () => {
  test('Update the index of list when one item is deleted', () => {
    expect(indexUpdate()).toEqual([1, 2]);
  });
});