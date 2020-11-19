import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SignUp from "./SignUp";

describe("Test the SignUp component", () => {
  it("Test if SignUp component renders with children and input values can be adjusted", () => {
    // Act
    const { container, getByLabelText } = render(<SignUp />);

    const emailInput = getByLabelText(`email-input`);
    const firstNameInput = getByLabelText(`first-name-input`);
    const LastNameInput = getByLabelText(`last-name-input`);
    const passwordInput = getByLabelText(`password-input`);

    fireEvent.change(emailInput, { target: { value: "john@email.com" } });
    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.change(LastNameInput, { target: { value: "Wick" } });
    fireEvent.change(passwordInput, { target: { value: "ImJohnWick" } });
    // Assert
    expect(container).toMatchSnapshot();

    expect(emailInput.value).toBe("john@email.com");
    expect(firstNameInput.value).toBe("John");
    expect(LastNameInput.value).toBe("Wick");
    expect(passwordInput.value).toBe("ImJohnWick");
  });
});
