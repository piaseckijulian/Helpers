const isEven = (number: number) => {
  if (typeof number !== 'number') {
    throw new Error('Invalid input. Please enter a number');
  }

  return number % 2 === 0;
};

export default isEven;
