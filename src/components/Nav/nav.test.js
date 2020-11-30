import React from "react";
import { render, screen } from "@testing-library/react";

import Nav from "./index.js";
import { About, Header, Projects, Skills } from "../../sections";

describe("Nav", () => {
  test("renders Nav component", () => {
    const sections = [
      { name: "home", Component: Header, title: "Home", navName: "Home" },
      {
        name: "skills",
        Component: Skills,
        title: "Tech I know",
        navName: "Tech",
      },
      {
        name: "projects",
        Component: Projects,
        title: "Projects",
        navName: "Projects",
      },
      { name: "about", Component: About, title: "About me", navName: "About" },
    ];
    const setIsNavOpen = jest.fn();
    render(
      <Nav sections={sections} setIsNavOpen={setIsNavOpen} isNavOpen={false} />
    );

    expect(screen.getByText("Samuel Shum")).toBeInTheDocument();
  });
});
