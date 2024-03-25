type AnyObject = Record<string, unknown>;

const pluck = <T extends AnyObject, K extends keyof T>(arr: T[], key: K): Array<T[K]> => {
  const errorCondition =
    !Array.isArray(arr) || !arr.every(el => typeof el === 'object' && !Array.isArray(el));

  if (errorCondition || typeof key !== 'string') {
    throw new Error('Invalid input. Please enter an array of objects');
  }

  return arr.map(obj => obj[key]);
};

export default pluck;
