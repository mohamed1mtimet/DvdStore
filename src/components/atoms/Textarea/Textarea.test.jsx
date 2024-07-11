import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Textarea from "./Textarea";

test("renders the Textarea component", () => {
  render(<Textarea />);

  // Check if the textarea with placeholder "Movies Name ..." is rendered
  expect(screen.getByPlaceholderText(/Movies Name .../i)).toBeInTheDocument();
});
