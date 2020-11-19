import React from "react";
import { render, screen } from "@testing-library/react";
import Form from "./Form";
import Input from "./Input";

describe("Test the Form component", () => {
  it("Test if form component renders with children", () => {
    // Act
    const { container, getByText } = render(
      <Form>
        <p>I'm a form</p>
        <Input
          placeholder="I'm a placeholder"
          setInputValue={() => {}}
          inputValue="I'm the input value"
        />
      </Form>
    );

    // Assert
    const pElement = getByText(/I'm a form/i);
    const inputElement = screen.getByDisplayValue("I'm the input value");
    expect(container).toMatchSnapshot();
    expect(pElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });
});
