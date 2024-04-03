const average = (...numbers: number[]) => {
  return numbers.reduce((a, b) => a + b) / numbers.length;
};

export default average;
