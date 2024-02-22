const titleCase = (sentence: string) =>
  sentence.replace(/\b\w/g, char => char.toUpperCase());

export default titleCase;
