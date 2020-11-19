import React from "react";
import { render } from "@testing-library/react";
import { Container } from "./Layout";

describe("Test the Container component", () => {
  it("Test if Container component renders with children", () => {
    // Act
    const { container, getByText } = render(
      <Container>
        <p>I'm a Container</p>
      </Container>
    );

    // Assert
    const pElement = getByText(/I'm a Container/i);
    expect(container).toMatchSnapshot();
    expect(pElement).toBeInTheDocument();
  });
});
