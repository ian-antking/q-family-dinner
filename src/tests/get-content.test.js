import getContent from '../services/get-content';

jest.mock('../services/content-client');

describe('services/get-content', () => {
  it('returns an object containing arrays of content types', async () => {
    const items = await getContent();
    expect(items.pages.length).toBe(3);
    expect(items.contributors.length).toBe(2);
  });
});
