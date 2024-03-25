const isEmpty = (arr: unknown[]) => {
  if (!Array.isArray(arr)) {
    throw new Error('Invalid input. Please enter an array');
  }

  return arr.length === 0;
};

export default isEmpty;
