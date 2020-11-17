import React, { useState } from "react";
import Button from "../../Components/Button/Button";
import Form from "../../Components/Form/Form";
import Input from "../../Components/Form/Input";
import { Container } from "../../Components/Layout/Layout";
import { UsePost, UseGet } from "../../Hooks";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const response = UseGet("https://postman-echo.com/delay/0");
  const newUser = UsePost();

  console.log("response", response);
  console.log("newUser", newUser);

  return (
    <Container>
      <Form title="I'm a title" description="I'm a description">
        {response.error.message && <p>Something went wrong</p>}

        <Input
          label="First name"
          warning={firstName.length === 0}
          warningText="Incorrect name"
          placeholder="enter your name"
          inputValue={firstName}
          setInputValue={setFirstName}
          required
        />
        <Input
          label="Last name"
          warning={lastName.length === 0}
          warningText="Incorrect lastName"
          placeholder="enter your lastName"
          inputValue={lastName}
          setInputValue={setLastName}
          required
        />
        <Input
          label="Email"
          warning={email.length === 0}
          warningText="Incorrect email"
          placeholder="enter your email"
          inputValue={email}
          setInputValue={setEmail}
          required
        />
        <Input
          label="Password"
          warning={password.length === 0}
          warningText="Incorrect password"
          placeholder="enter your password"
          inputValue={password}
          setInputValue={setPassword}
          required
        />
        <Button action={() => {}}>Press me</Button>
      </Form>
    </Container>
  );
};

export default SignUp;
