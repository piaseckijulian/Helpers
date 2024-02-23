const capitalize = (string: string) => {
  if (typeof string !== 'string') {
    throw new Error('Invalid input. Please enter a string');
  }

  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
};

export default capitalize;
