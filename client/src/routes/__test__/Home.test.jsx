import { render, screen } from "@testing-library/react";
import React from "react";
import Home from "../Home";

describe("Home", () => {
  it("renders the correct title", () => {
    render(<Home />);
    const titleElement = screen.getByText("Cavalry : Home");
    expect(titleElement).toBeInTheDocument();
  });
});
