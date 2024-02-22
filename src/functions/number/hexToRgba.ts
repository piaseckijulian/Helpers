const hexToRgba = (hex: string) => {
  const foo = hex.match(/\w\w/g);
  if (!foo) throw new Error('Invalid input');

  const [r, g, b] = foo.map(val => parseInt(val, 16));
  return `rgba(${r}, ${g}, ${b}, 1)`;
};

export default hexToRgba;
