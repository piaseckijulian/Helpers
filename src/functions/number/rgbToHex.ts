const rgbToHex = (r: number, g: number, b: number) =>
  '#' + [r, g, b].map(num => num.toString(16).padStart(2, '0')).join('');

export default rgbToHex;
