const isEqual = (a: unknown[], b: unknown[]) => {
  return JSON.stringify(a) === JSON.stringify(b);
};

export default isEqual;
