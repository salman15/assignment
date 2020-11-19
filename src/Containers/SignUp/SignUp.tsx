import React, { useEffect, useState } from "react";
import Button from "../../Components/Button/Button";
import Form from "../../Components/Form/Form";
import Input from "../../Components/Form/Input";
import { Column, Container, WarningText } from "../../Components/Layout/Layout";
import { UsePost, UseGet } from "../../Hooks";
import {
  validateSignUp,
  validEmail,
  validName,
  validPassword,
} from "../../Utils/Validate";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showValidationErrors, setShowValidationErrors] = useState(false);
  const [newAccount, setNewAccount] = useState(false);
  const { getLoading, getError, getData } = UseGet("delay/4");
  const { postResponse, postLoading, postError, sendPost } = UsePost("post", {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  });

  useEffect(() => {
    if (postResponse.status >= 200 && postResponse.status < 300) {
      setNewAccount(true);
    }
  }, [postResponse]);

  /**
   *
   */
  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (
      validateSignUp({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      })
    ) {
      getData(true);
      sendPost(true);
    } else {
      setShowValidationErrors(true);
    }
  };

  return (
    <Container>
      {newAccount ? (
        <Column>
          <h1>Account created</h1>
          <Button action={() => setNewAccount(false)}>Go back</Button>
        </Column>
      ) : (
        <Form
          title="Create an new account"
          description="everything with a * is required"
          error={getError || postError}
          submit={handleSubmit}
        >
          {(getError || postError) && (
            <WarningText>Something went wrong</WarningText>
          )}

          <Input
            label="First name"
            warning={showValidationErrors && !validName(firstName)}
            warningText="Incorrect name"
            placeholder="enter your name"
            inputValue={firstName}
            setInputValue={setFirstName}
            required
            type="first-name"
          />
          <Input
            label="Last name"
            type="last-name"
            warning={showValidationErrors && !validName(lastName)}
            warningText="Incorrect last name"
            placeholder="enter your last name"
            inputValue={lastName}
            setInputValue={setLastName}
            required
          />
          <Input
            label="Email"
            type="email"
            warning={showValidationErrors && !validEmail(email)}
            warningText="Incorrect email"
            placeholder="enter your email"
            inputValue={email}
            setInputValue={setEmail}
            required
          />
          <Input
            label="Password"
            warning={showValidationErrors && !validPassword(password)}
            warningText="Password must contain at least one lowercase letter and one uppercase letter"
            placeholder="enter your password"
            inputValue={password}
            setInputValue={setPassword}
            required
            type="password"
          />
          <Button
            disabled={
              firstName.length < 1 ||
              lastName.length < 1 ||
              email.length < 1 ||
              password.length < 8 ||
              getLoading ||
              postLoading
            }
          >
            {getLoading || postLoading ? "loading" : "Create account"}
          </Button>
          <p>
            Already have an account?{" "}
            <Button type="link" link="#">
              Sign in
            </Button>
          </p>
        </Form>
      )}
    </Container>
  );
};

export default SignUp;
