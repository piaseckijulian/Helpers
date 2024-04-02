const calculatePercent = (value: number, total: number) => {
  return Math.round((value / total) * 100);
};

export default calculatePercent;
