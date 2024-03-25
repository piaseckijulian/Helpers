const shuffleArray = <T>(arr: T[]) => {
  if (!Array.isArray(arr)) {
    throw new Error('Invalid input. Please enter an array');
  }

  return arr.sort(() => Math.random() - 0.5);
};

export default shuffleArray;
