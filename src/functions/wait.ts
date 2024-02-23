const wait = async (ms: number) => {
  if (typeof ms !== 'number') {
    throw new Error('Invalid input. Please enter a number');
  }

  return new Promise(resolve => setTimeout(resolve, ms));
};

export default wait;
