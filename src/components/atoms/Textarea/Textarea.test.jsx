import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Textarea from "./Textarea";

test("renders Textarea component", () => {
  render(<Textarea placeholder="Movies Name ..." />);

  const textareaElement = screen.getByPlaceholderText("Movies Name ...");
  expect(textareaElement).toBeInTheDocument();
});
