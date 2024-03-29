import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../Home";

jest.mock("../../components/Carousel", () => () => <div>Carousel</div>);
jest.mock("../../components/About", () => () => <div>About</div>);
jest.mock("../../components/Services", () => () => <div>Services</div>);

describe("Home", () => {
  it("renders the correct title", () => {
    render(<Home />);
    const titleElement = screen.getByText("Cavalry : Home");
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the Carousel component", () => {
    render(<Home />);
    const carouselElement = screen.getByText("Carousel");
    expect(carouselElement).toBeInTheDocument();
  });

  it("renders the About component", () => {
    render(<Home />);
    const aboutElement = screen.getByText("About");
    expect(aboutElement).toBeInTheDocument();
  });

  it("renders the Services component", () => {
    render(<Home />);
    const servicesElement = screen.getByText("Services");
    expect(servicesElement).toBeInTheDocument();
  });
});
