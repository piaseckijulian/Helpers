const average = (...numbers: number[]) => {
  if (!numbers.every(el => typeof el === 'number')) {
    throw new Error('Invalid input. Please enter numbers');
  }

  return numbers.reduce((a, b) => a + b) / numbers.length;
};

export default average;
