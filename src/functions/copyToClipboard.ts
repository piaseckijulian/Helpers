import clipboardy from 'clipboardy';

const copyToClipboard = (content: string) => {
  if (typeof content !== 'string') {
    throw new Error('Invalid input. Please enter a string');
  }

  clipboardy.writeSync(content);
};

export default copyToClipboard;
