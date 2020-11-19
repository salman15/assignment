import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SignUp from "./SignUp";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mockPost = new MockAdapter(axios, { delayResponse: 0 });
const mockGet = new MockAdapter(axios, { delayResponse: 0 });

/**
 * Mock both post and get request
 */
beforeEach(() => {
  mockPost
    .onPost("http://localhost:3004/post")
    .reply(200, { postData: "I'm some post data" });

  mockGet
    .onGet("http://localhost:3004/delay/4")
    .reply(200, { postData: "I'm some post data" });
});

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
