const factorial = (number: number): number => {
  if (typeof number !== 'number') {
    throw new Error('Invalid input. Please enter a number');
  }

  return number <= 1 ? 1 : number * factorial(number - 1);
};

export default factorial;
