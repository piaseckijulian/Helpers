const truncate = (string: string, maxLength: number) => {
  if (typeof string !== 'string' || typeof maxLength !== 'number') {
    throw new Error('Invalid input. Please enter a string and a number');
  }

  return string.length > maxLength ? `${string.slice(0, maxLength)}...` : string;
};

export default truncate;
