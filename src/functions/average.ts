const average = (...numbers: number[]) =>
  numbers.reduce((a, b) => a + b) / numbers.length;

export default average;
