type AnyObject = Record<string, unknown>;

const sortBy = <T extends AnyObject, K extends keyof T>(arr: T[], key: K): T[] => {
  return arr.sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0));
};

export default sortBy;
