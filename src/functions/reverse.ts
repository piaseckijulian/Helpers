const reverse = (string: string) => {
  if (typeof string !== 'string') {
    throw new Error('Invalid input. Please enter a string');
  }

  return string.split('').reverse().join('');
};

export default reverse;
