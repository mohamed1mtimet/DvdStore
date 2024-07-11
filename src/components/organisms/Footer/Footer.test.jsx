import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Footer from "./Footer";

test("renders the Footer component", () => {
  render(<Footer />);

  // Check if the copyright notice is rendered
  expect(screen.getByText(/Tous droits réservés./i)).toBeInTheDocument();
});
