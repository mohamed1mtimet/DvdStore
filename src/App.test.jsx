import React from "react";
import { act } from "react";

import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

jest.mock("./components/pages", () => ({
  AboutPage: () => <div>About Page</div>,
  HomePage: () => <div>Home Page</div>,
}));

jest.mock("./components/organisms", () => ({
  Header: () => <div>Header</div>,
  Footer: () => <div>Footer</div>,
}));

test("renders Header and Footer", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText("Header")).toBeInTheDocument();
  expect(screen.getByText("Footer")).toBeInTheDocument();
});

test("renders HomePage on default route", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText("Home Page")).toBeInTheDocument();
});

test("renders AboutPage on /about route", () => {
  render(
    <MemoryRouter initialEntries={["/about"]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText("About Page")).toBeInTheDocument();
});
