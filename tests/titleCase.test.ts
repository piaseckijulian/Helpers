import titleCase from '../src/functions/titleCase';

describe('titleCase', () => {
  test('lorem ipsum dolor sit amet, consectetur adipiscing elit in title case is: Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit', () => {
    expect(titleCase('lorem ipsum dolor sit amet, consectetur adipiscing elit')).toBe(
      'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit'
    );
  });
});
