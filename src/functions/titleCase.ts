const titleCase = (sentence: string) => {
  return sentence.replace(/\b\w/g, char => char.toUpperCase());
};

export default titleCase;
