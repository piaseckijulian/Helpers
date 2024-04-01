import sortBy from '../src/functions/sortBy';

describe('sortBy', () => {
  const people = [
    { id: 2, name: 'Adam', age: 35 },
    { id: 3, name: 'Robert', age: 40 },
    { id: 1, name: 'John', age: 20 }
  ];

  test('Persons array sorted by age is in order: John, Adam, Robert', () => {
    expect(sortBy(people, 'age')).toEqual([
      { id: 1, name: 'John', age: 20 },
      { id: 2, name: 'Adam', age: 35 },
      { id: 3, name: 'Robert', age: 40 }
    ]);
  });
});
