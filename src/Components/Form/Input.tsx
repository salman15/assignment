import React from "react";
import styled from "styled-components";

interface InputProps {
  label?: string;
  warning?: boolean;
  warningText?: string;
  placeholder: string;
  inputValue?: string | number;
  setInputValue: Function;
  required?: boolean;
  type?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  inputValue,
  setInputValue,
  warning,
  warningText,
  required,
  type = "text",
}) => {
  return (
    <InputContainer>
      {label && (
        <Label>
          {label} {required && <Required>*</Required>}
        </Label>
      )}
      <InputLayout
        name="label"
        type={type}
        placeholder={placeholder}
        value={inputValue}
        autoComplete={type}
        onChange={(e: { target: { value: any } }) =>
          setInputValue(e.target.value)
        }
      />
      {warning && <Warning>{warningText}</Warning>}
    </InputContainer>
  );
};

export default Input;

const InputLayout = styled.input`
  padding: 8px;
  font-size: 16px;
  width: 100%;
`;

const Label = styled.p`
  font-weight: bold;
  margin-bottom: 8px;
  font-size: 12px;
`;

const Required = styled.span`
  color: red;
`;

const Warning = styled(Label)`
  color: red;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 200px;
`;
