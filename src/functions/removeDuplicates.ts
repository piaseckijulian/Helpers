const removeDuplicates = (arr: any[]) => {
  if (!Array.isArray(arr)) {
    throw new Error('Invalid input. Please enter an array');
  }

  return [...new Set(arr)];
};

export default removeDuplicates;
