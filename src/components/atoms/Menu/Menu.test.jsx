import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect"; // for the matchers
import Menu from "./Menu";

describe("Menu Component", () => {
  const links = [
    { to: "/", name: "Home" },
    { to: "/about", name: "About" },
    { to: "/contact", name: "Contact" },
  ];

  test("renders Menu component with links", () => {
    render(
      <BrowserRouter>
        <Menu links={links} />
      </BrowserRouter>
    );

    links.forEach((link) => {
      const linkElement = screen.getByText(link.name);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute("href", link.to);
    });
  });

  test("renders correct number of links", () => {
    render(
      <BrowserRouter>
        <Menu links={links} />
      </BrowserRouter>
    );

    const linkElements = screen.getAllByRole("link");
    expect(linkElements).toHaveLength(links.length);
  });
});
