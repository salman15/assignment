import React from "react";
import styled, { css } from "styled-components";

interface FormProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  error?: boolean;
  submit?: Function;
}

const Form: React.FC<FormProps> = ({
  title,
  description,
  children,
  error = false,
  submit = () => {},
}) => {
  return (
    <FormContainer error={error} onSubmit={(e) => submit(e)}>
      {title && <h1>{title}</h1>}
      {description && <p>{description}</p>}
      {children}
    </FormContainer>
  );
};

export default Form;

const FormContainer = styled.form<{ error: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 8px;
  background-color: white;
  padding: 8px;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  ${(props) =>
    props.error &&
    css`
      border: solid 2px red;
    `};
`;
