import capitalize from '../functions/capitalize';

test('john dOe capitalized is: John dOe', () => {
  expect(capitalize('john dOe')).toBe('John dOe');
});
