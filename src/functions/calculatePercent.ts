const calculatePercent = (value: number, total: number) => {
  if (typeof value !== 'number' || typeof total !== 'number') {
    throw new Error('Invalid input. Please enter numbers');
  }

  return Math.round((value / total) * 100);
};

export default calculatePercent;
