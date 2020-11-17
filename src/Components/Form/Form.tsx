import React from "react";
import styled from "styled-components";

interface FormProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ title, description, children }) => {
  return (
    <FormContainer>
      {title && <h1>{title}</h1>}
      {description && <h4>{description}</h4>}
      {children}
    </FormContainer>
  );
};

export default Form;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;
  background-color: grey;
  padding: 8px;
  min-width: 300px;
`;
