import React from "react";
import styled from "styled-components";

interface FormProps {
  children: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ children }) => {
  return <FormContainer>{children}</FormContainer>;
};

export default Form;

const FormContainer = styled.div`
  border-radius: 4px;
  background-color: grey;
  padding: 8px;
`;
