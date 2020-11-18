type credentailProps = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export const validEmail = (email: string) => {
  const emailTest = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email.length > 4 && emailTest.test(email);
};

export const validName = (name: string) => {
  const nameTest = /^([^0-9]*)$/;
  return name.length > 0 && nameTest.test(name);
};

export const validPassword = (password: string) => {
  const passwordTest = /^([a-zA-Z]*)$/;

  return password.length > 8 && passwordTest.test(password);
};

export const validateSignUp = (credentials: credentailProps) => {
  console.log("passwordIsValid", validPassword(credentials.password));
  return (
    validName(credentials.firstName) &&
    validName(credentials.lastName) &&
    validEmail(credentials.email) &&
    validPassword(credentials.password)
  );
};
