import status from '../status.js';

jest.mock('../status');

describe('Status change function', () => {
  test('Check list item when status changes', () => {
    expect(status()).toBe(true);
  });
});