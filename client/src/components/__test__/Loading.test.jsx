import React from "react";
import { render, screen } from "@testing-library/react";
import Loading from "../Loading";

describe("Loading component", () => {
  test("renders loading text and spinner", () => {
    render(<Loading />);

    const loadingText = screen.getByRole("status", { text: "Loading..." });
    expect(loadingText).toBeInTheDocument();

    const spinner = screen.getByTestId("spinner");
    expect(spinner).toBeInTheDocument();
  });
});
