const truncate = (str: string, maxLength: number) =>
  str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;

export default truncate;
