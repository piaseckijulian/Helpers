import reverse from '../functions/reverse';

describe('reverse', () => {
  test('Paper reversed is: repaP', () => {
    expect(reverse('Paper')).toBe('repaP');
  });
});
