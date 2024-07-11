import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Button from "./Button";

test("renders the Button component with children", () => {
  render(<Button>Click Me</Button>);

  // Check if the button with the text "Click Me" is rendered
  expect(screen.getByText(/Click Me/i)).toBeInTheDocument();
});

test("applies custom class names", () => {
  render(<Button className="custom-class">Click Me</Button>);

  // Check if the button has the custom class applied
  expect(screen.getByText(/Click Me/i)).toHaveClass("custom-class");
});

test("handles button click", () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click Me</Button>);

  // Simulate button click
  fireEvent.click(screen.getByText(/Click Me/i));

  // Check if the click handler is called
  expect(handleClick).toHaveBeenCalledTimes(1);
});
