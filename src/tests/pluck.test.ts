import pluck from '../functions/pluck';

describe('pluck', () => {
  const people = [
    { id: 2, name: 'Adam', age: 35 },
    { id: 3, name: 'Robert', age: 40 },
    { id: 1, name: 'John', age: 20 }
  ];

  // eslint-disable-next-line quotes
  test("Returns an array of people's names", () => {
    expect(pluck(people, 'name')).toEqual(['Adam', 'Robert', 'John']);
  });
});
