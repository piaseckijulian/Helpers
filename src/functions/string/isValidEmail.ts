const isValidEmail = (email: string) =>
  /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email);

export default isValidEmail;
