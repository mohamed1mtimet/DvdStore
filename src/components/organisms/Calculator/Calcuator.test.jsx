import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Calculator from "./Calculator";

test("renders total price correctly when no movies are added", () => {
  render(<Calculator />);

  // Check if the initial total price is 0
  expect(screen.getByText(/0 €/i)).toBeInTheDocument();
});
