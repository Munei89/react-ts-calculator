import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders calculator", () => {
  render(<App />);
  const calculatorElement = screen.getByText(/React js Calculator/i);
  expect(calculatorElement).toBeInTheDocument();
});
