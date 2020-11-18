import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../Components/Button/Button";
import Form from "../../Components/Form/Form";
import Input from "../../Components/Form/Input";
import { Container } from "../../Components/Layout/Layout";
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
  const [send, setSend] = useState(false);
  const [showValidationErrors, setShowValidationErrors] = useState(false);
  const response = UseGet("delay/0");
  const newUser = UsePost(
    "post",
    {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    },
    send,
    setSend
  );

  const sendDate = () => {
    console.log("senddate");
    if (
      validateSignUp({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      })
    ) {
      setSend(true);
    } else {
      console.log("invalid");
      setShowValidationErrors(true);
    }
  };

  return (
    <Container>
      <Form
        title="Create a new account"
        description="everything with a * is required"
        error={response.error || newUser.error}
      >
        {response.error && <WarningText>Something went wrong</WarningText>}

        <Input
          label="First name"
          warning={showValidationErrors && !validName(firstName)}
          warningText="Incorrect name"
          placeholder="enter your name"
          inputValue={firstName}
          setInputValue={setFirstName}
          required
          type="name"
        />
        <Input
          label="Last name"
          warning={showValidationErrors && !validName(lastName)}
          warningText="Incorrect last name"
          placeholder="enter your last name"
          inputValue={lastName}
          setInputValue={setLastName}
          required
        />
        <Input
          label="Email"
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
            password.length < 1
          }
          action={sendDate}
        >
          Create account
        </Button>
        <p>
          Already have an account?{" "}
          <Button type="link" link="#">
            Sign in
          </Button>
        </p>
      </Form>
    </Container>
  );
};

export default SignUp;

const WarningText = styled.p`
  color: red;
`;
