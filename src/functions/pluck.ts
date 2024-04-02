type AnyObject = Record<string, unknown>;

const pluck = <T extends AnyObject, K extends keyof T>(arr: T[], key: K): Array<T[K]> => {
  return arr.map(obj => obj[key]);
};

export default pluck;
