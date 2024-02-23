const truncate = (string: string, maxLength: number) =>
  string.length > maxLength ? `${string.slice(0, maxLength)}...` : string;

export default truncate;
