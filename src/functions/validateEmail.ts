const validateEmail = (email: string) => {
  const emailPattern = new RegExp(
    /^[a-z0-9]+(?:[_.-]?[a-z0-9]+)*@[a-z0-9]+(?:[.-]?[a-z0-9]+)*\.[a-z]+$/i
  );

  return emailPattern.test(email);
};

export default validateEmail;
