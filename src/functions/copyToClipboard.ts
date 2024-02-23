import clipboardy from 'clipboardy';

const copyToClipboard = (content: string) => clipboardy.writeSync(content);

export default copyToClipboard;
