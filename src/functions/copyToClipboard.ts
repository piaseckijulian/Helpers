const copyToClipboard = async (content: string) => {
  const {
    default: { writeSync }
  } = await import('clipboardy');

  writeSync(content);
};

export default copyToClipboard;
