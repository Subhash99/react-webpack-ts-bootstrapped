import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test('renders "Getting Started"', () => {
  render(<App />);
  const textElement = screen.getByText(/Getting Started/i);
  expect(textElement).toBeInTheDocument();
});
