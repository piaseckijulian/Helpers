const countOccurrences = (arr: any[], value: any) =>
  arr.reduce((a, v) => (v === value ? a + 1 : a), 0);

export default countOccurrences;
