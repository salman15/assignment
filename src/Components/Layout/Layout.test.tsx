import React from "react";
import { render } from "@testing-library/react";
import { Column, Container, WarningText } from "./Layout";

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

describe("Test the WarningText component", () => {
  it("Test if WarningText component renders with children", () => {
    // Act
    const { container, getByText } = render(
      <WarningText>
        <p>I'm a WarningText</p>
      </WarningText>
    );

    // Assert
    const pElement = getByText(/I'm a WarningText/i);
    expect(container).toMatchSnapshot();
    expect(pElement).toBeInTheDocument();
  });
});

describe("Test the Column component", () => {
  it("Test if Column component renders with children", () => {
    // Act
    const { container, getByText } = render(
      <Column>
        <p>I'm a Column</p>
      </Column>
    );

    // Assert
    const pElement = getByText(/I'm a Column/i);
    expect(Column).toMatchSnapshot();
    expect(pElement).toBeInTheDocument();
  });
});
