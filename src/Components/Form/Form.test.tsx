import React from "react";
import { render, screen } from "@testing-library/react";
import Form from "./Form";

test("checks content of the form", () => {
  render(
    <Form>
      <p>I'm a form</p>
    </Form>
  );
  const linkElement = screen.getByText(/I'm a form/i);
  expect(linkElement).toBeInTheDocument();
});
