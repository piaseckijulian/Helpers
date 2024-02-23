const titleCase = (sentence: string) => {
  if (typeof sentence !== 'string') {
    throw new Error('Invalid input. Please enter a string');
  }

  return sentence.replace(/\b\w/g, char => char.toUpperCase());
};

export default titleCase;
