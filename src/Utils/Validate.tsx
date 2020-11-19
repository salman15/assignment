type credentailProps = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

/**
 * Checks if email has the correct characters
 * @string email
 * @returns {boolean}
 */
export const validEmail = (email: string) => {
  const emailTest = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email.length > 4 && emailTest.test(email);
};

/**
 *
 * Checks if string does not contain a number
 * @string name
 * @returns {boolean}
 */
export const validName = (name: string) => {
  const nameTest = /^([^0-9]*)$/;
  return name.length > 0 && nameTest.test(name);
};

/**
 *  Checks if password contains lowercase and uppercase
 * @string password
 * @returns {boolean}
 */
export const validPassword = (password: string) => {
  const passwordTest = /(?=.*[a-z])(?=.*[A-Z])/;

  return password.length >= 8 && passwordTest.test(password);
};

/**
 * Checks credentials objects keys to have the valid values
 * @object credentials
 * @returns {boolean}
 */
export const validateSignUp = (credentials: credentailProps) => {
  return (
    validName(credentials.firstName) &&
    validName(credentials.lastName) &&
    validEmail(credentials.email) &&
    validPassword(credentials.password)
  );
};
