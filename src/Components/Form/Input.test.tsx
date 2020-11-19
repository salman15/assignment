import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Input from "./Input";

describe("Test the Input component", () => {
  it("Test if Input component renders with input value", () => {
    // Act
    const { container, getByDisplayValue } = render(
      <Input
        placeholder="I'm a placeholder"
        setInputValue={() => {}}
        inputValue="I'm the input value"
      />
    );

    // Assert
    const inputElement = getByDisplayValue("I'm the input value");
    expect(container).toMatchSnapshot();
    expect(inputElement).toBeInTheDocument();
  });

  it("Test if Input component element displays the label and warning", () => {
    // Act
    const { container, getByText } = render(
      <Input
        label="I'm the label text"
        warning={true}
        warningText="I'm the warning text"
        placeholder="I'm a placeholder"
        setInputValue={() => {}}
        inputValue="I'm the input value"
      />
    );

    // Assert
    const labelElement = getByText("I'm the label text");
    const warningElement = getByText("I'm the warning text");
    expect(container).toMatchSnapshot();
    expect(labelElement).toBeInTheDocument();
    expect(warningElement).toBeInTheDocument();
  });
});
