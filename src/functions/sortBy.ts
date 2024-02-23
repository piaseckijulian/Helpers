interface AnyObject {
  [key: string]: any;
}

const sortBy = (arr: AnyObject[], key: string) =>
  arr.sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0));

export default sortBy;
