const isEqual = (a: unknown[], b: unknown[]) => {
  if (!Array.isArray(a) || !Array.isArray(b)) {
    throw new Error('Invalid input. Please enter two arrays');
  }

  return JSON.stringify(a) === JSON.stringify(b);
};

export default isEqual;
