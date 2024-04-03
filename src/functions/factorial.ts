const factorial = (number: number): number => {
  return number <= 1 ? 1 : number * factorial(number - 1);
};

export default factorial;
