import React from "react";
import { render, screen } from "@testing-library/react";
import TestBBC from "../index";

test('renders "Hello, World!"', () => {
  render(<TestBBC />);
  const textElement = screen.getByText(/Test/i);
  expect(textElement).toBeInTheDocument();
});
