import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HomePage from "./HomePage";

test("renders the HomePage component with Calculator", () => {
  render(<HomePage />);

  // Check if the Calculator component is rendered within HomePage
  expect(screen.getByText("Prix total:")).toBeInTheDocument();
});
