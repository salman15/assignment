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

  const response = UseGet();
  const newUser = UsePost();

  return (
    <Container>
      <Form title="I'm a title" description="I'm a description">
        <Input
          label="first name"
          warning={firstName.length === 0}
          warningText="Incorrect name"
          placeholder="enter your name"
          inputValue={firstName}
          setInputValue={setFirstName}
          required
        />
        <Input
          label="last name"
          warning={lastName.length === 0}
          warningText="Incorrect lastName"
          placeholder="enter your lastName"
          inputValue={lastName}
          setInputValue={setLastName}
          required
        />
        <Input
          label="email"
          warning={email.length === 0}
          warningText="Incorrect email"
          placeholder="enter your email"
          inputValue={email}
          setInputValue={setEmail}
          required
        />
        <Input
          label="password"
          warning={password.length === 0}
          warningText="Incorrect password"
          placeholder="enter your password"
          inputValue={password}
          setInputValue={setPassword}
          required
        />
        <Button>Press me</Button>
      </Form>
    </Container>
  );
};

export default SignUp;
