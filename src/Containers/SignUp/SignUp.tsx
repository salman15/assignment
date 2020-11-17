import React, { useState } from "react";
import Button from "../../Components/Button/Button";
import Form from "../../Components/Form/Form";
import Input from "../../Components/Form/Input";
import { Container } from "../../Components/Layout/Layout";
import { UsePost, UseGet } from "../../Hooks";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <Container>
      <Form title="I'm a title" description="I'm a description">
        <Input
          label="name"
          warning={name.length === 0}
          warningText="Incorrect name"
          placeholder="enter your name"
          inputValue={name}
          setInputValue={setName}
        />
        <Input
          label="email"
          warning={email.length === 0}
          warningText="Incorrect email"
          placeholder="enter your email"
          inputValue={email}
          setInputValue={setEmail}
        />
        <Button>Press me</Button>
      </Form>
    </Container>
  );
};

export default SignUp;
