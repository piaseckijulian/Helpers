interface AnyObject {
  [key: string]: any;
}

const sortBy = (arr: AnyObject[], key: string) => {
  const errorCondition =
    !Array.isArray(arr) || !arr.every(el => typeof el === 'object' && !Array.isArray(el));

  if (errorCondition || typeof key !== 'string') {
    throw new Error('Invalid input. Please enter an array of objects');
  }

  return arr.sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0));
};

export default sortBy;
