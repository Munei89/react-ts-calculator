import React from "react";
import { render, screen, fireEvent, getByText } from "@testing-library/react";
import Calculator from "../Calculator";

describe("Calculator Renders and displays numbers", () => {
  it("Displays Rows", () => {
    render(<Calculator />);
    const rows = screen.getAllByRole("row");

    expect(rows).toHaveLength(4);
  });
  it("shows calculation operators", () => {
    render(<Calculator />);
    const operators = ["+", "-", "*", "/"];

    operators.forEach((operator) => {
      expect(screen.getByText(operator.toString())).toBeInTheDocument();
    });
  });
  it("shows the equal sign", () => {
    render(<Calculator />);
    const equalSign = "=";
    expect(screen.getByText(equalSign)).toBeInTheDocument();
  });

  it("shows clear sign", () => {
    render(<Calculator />);
    const clear = "C";
    expect(screen.getByText(clear)).toBeInTheDocument();
  });
});

describe("Calculator displays multiple user inputs", () => {
  it("Displaying inputs", async () => {
    render(<Calculator />);
    const one = await screen.findByText("1");
    const two = await screen.findByText("2");
    const plus = await screen.findByText("+");
    fireEvent.click(one);
    fireEvent.click(plus);
    fireEvent.click(two);
    expect(screen.getByText("1 + 2")).toBeInTheDocument();
  });

  it("handles multiple users inputs", async () => {
    render(<Calculator />);
    const one = await screen.findByText("1");
    const two = await screen.findByText("2");
    const three = await screen.findByText("3");
    const five = await screen.findByText("5");
    const divide = await screen.findByText("/");
    const mul = await screen.findByText("*");
    const minus = await screen.findByText("-");
    fireEvent.click(three);
    fireEvent.click(mul);
    fireEvent.click(two);
    fireEvent.click(minus);
    fireEvent.click(one);
    fireEvent.click(divide);
    fireEvent.click(five);
    expect(screen.getByText("3 * 2 - 1 / 5")).toBeInTheDocument();
  });
});

describe("Calculator calculates from user inputs", () => {
  it("calculates multiple users inputs", async () => {
    render(<Calculator />);
    const one = screen.getByText("1");
    const two = screen.getByText("2");
    const three = screen.getByText("3");
    const five = screen.getByText("5");
    const divide = screen.getByText("/");
    const mul = screen.getByText("*");
    const minus = screen.getByText("-");
    const equal = screen.getByText("=");
    const plus = screen.getByText("+");

    fireEvent.click(two);
    fireEvent.click(mul);
    fireEvent.click(five);
    fireEvent.click(minus);
    fireEvent.click(three);
    fireEvent.click(divide);
    fireEvent.click(two);
    fireEvent.click(plus);
    fireEvent.click(one);
    fireEvent.click(equal);

    const result = screen.getByRole("result");
    expect(result.innerHTML).toBe("9.50");
  });
  it("calculates users inputs", async () => {
    render(<Calculator />);
    const two = await screen.findByText("2");
    const plus = await screen.findByText("+");
    const equal = await screen.findByText("=");

    fireEvent.click(two);
    fireEvent.click(plus);
    fireEvent.click(two);
    fireEvent.click(equal);

    const result = screen.getByRole("result");
    expect(result.innerHTML).toBe("4");
  });
  it("clears results", async () => {
    render(<Calculator />);
    const one = screen.getByText("1");
    const two = screen.getByText("2");
    const three = screen.getByText("3");
    const plus = screen.getByText("+");
    const clear = screen.getByText("C");

    fireEvent.click(one);
    fireEvent.click(plus);
    fireEvent.click(two);
    fireEvent.click(plus);
    fireEvent.click(three);

    fireEvent.click(clear);

    const result = screen.getByRole("result");
    expect(result.innerHTML).toBe("0");
  });
});
