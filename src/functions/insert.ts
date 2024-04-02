const insert = <T, NewItem>(arr: T[], index: number, newItem: NewItem) => {
  return [...arr.slice(0, index), newItem, ...arr.slice(index)];
};

export default insert;
