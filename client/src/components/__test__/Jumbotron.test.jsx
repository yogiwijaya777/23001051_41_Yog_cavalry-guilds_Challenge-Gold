import React from "react";
import { render, screen } from "@testing-library/react";
import Jumbotron from "../Jumbotron";

describe("Jumbotron", () => {
  it("renders the title correctly", () => {
    const title = "Test Title";
    render(<Jumbotron title={title} />);
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass(
      "display-5",
      "fw-bold",
      "mb-4",
      "text-primary"
    );
  });

  it("renders the text correctly", () => {
    const text = "Test Text";
    render(<Jumbotron text={text} />);
    const textElement = screen.getByText(text);
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveClass("mb-4");
  });

  it("renders children correctly", () => {
    const childContent = "Child Content";
    render(<Jumbotron>{childContent}</Jumbotron>);
    const childElement = screen.getByText(childContent);
    expect(childElement).toBeInTheDocument();
  });

  it("renders with correct classes and structure", () => {
    render(<Jumbotron title="Test Title" text="Test Text" />);
    const jumbotronContainer = screen.getByTestId("JumbotronContainer");
    expect(jumbotronContainer).toBeInTheDocument();
    expect(jumbotronContainer).toHaveClass(
      "bg-dark-subtle",
      "rounded-3",
      "mx-5",
      "px-5",
      "mt-4",
      "text-center",
      "text-dark"
    );
    const containerFluid = screen
      .getByText("Test Title")
      .closest(".container-fluid");
    expect(containerFluid).toBeInTheDocument();
    expect(containerFluid).toHaveClass("container-fluid", "py-5");
  });
});
