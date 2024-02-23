const copyToClipboard = async (content: string) => {
  if (typeof content !== 'string') {
    throw new Error('Invalid input. Please enter a string');
  }

  const {
    default: { writeSync }
  } = await import('clipboardy');

  writeSync(content);
};

export default copyToClipboard;
