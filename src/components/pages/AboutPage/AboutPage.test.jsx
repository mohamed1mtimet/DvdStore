import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AboutPage from "./AboutPage";

test("renders the AboutPage component", () => {
  render(<AboutPage />);

  expect(screen.getByText("Forward to the Past")).toBeInTheDocument();
});
