import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import Header from "./Header";

test("renders the Header component", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  // Check if the title is rendered
  expect(screen.getByText(/Movies Store/i)).toBeInTheDocument();

  // Check if the Home link is rendered
  expect(screen.getByText(/Home/i)).toBeInTheDocument();

  // Check if the About link is rendered
  expect(screen.getByText(/About/i)).toBeInTheDocument();
});

test("contains links with correct href attributes", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  // Check if the Home link has correct href
  expect(screen.getByText(/Home/i)).toHaveAttribute("href", "/");

  // Check if the About link has correct href
  expect(screen.getByText(/About/i)).toHaveAttribute("href", "/about");
});
