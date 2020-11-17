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
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  inputValue,
  setInputValue,
  warning,
  warningText,
  required,
}) => {
  return (
    <InputContainer>
      {label && (
        <Label>
          {label} {required && `*`}
        </Label>
      )}
      <InputLayout
        placeholder={placeholder}
        value={inputValue}
        onChange={(e: { target: { value: any } }) =>
          setInputValue(e.target.value)
        }
      />
      {warning && <Warning>{warningText}</Warning>}
    </InputContainer>
  );
};

export default Input;

const InputLayout = styled.input``;

const Label = styled.p`
  font-weight: bold;
  margin-bottom: 8px;
  font-size: 12px;
`;

const Warning = styled(Label)`
  color: red;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
