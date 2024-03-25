const insert = <T, NewItem>(arr: T[], index: number, newItem: NewItem) => {
  if (!Array.isArray(arr) || typeof index !== 'number') {
    throw new Error('Invalid input. Please enter an array, a number, and an item');
  }

  return [...arr.slice(0, index), newItem, ...arr.slice(index)];
};

export default insert;
