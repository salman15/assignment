import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Button from "./Button";

describe("Test the Button component", () => {
  it("Test if Button component renders with Text", () => {
    // Act
    const { container, getByText } = render(<Button>I'm a button</Button>);

    // Assert
    const textValue = getByText(/I'm a button/i);
    expect(container).toMatchSnapshot();
    expect(textValue).toBeInTheDocument();
  });

  it("Test if Button component element changes to an anchor", () => {
    // Act
    const { container } = render(<Button link="#">I'm a button</Button>);

    // Assert
    const element = container.querySelector("a");
    expect(container).toMatchSnapshot();
    expect(element).toHaveTextContent("I'm a button");
  });
});
