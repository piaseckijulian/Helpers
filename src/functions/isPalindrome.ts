const isPalindrome = (string: string) => {
  return string === string.split('').reverse().join('');
};

export default isPalindrome;
