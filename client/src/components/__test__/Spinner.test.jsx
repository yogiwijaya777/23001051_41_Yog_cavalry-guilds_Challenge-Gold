import { render, screen } from "@testing-library/react";
import Spinner from "../Spinner";

describe("Spinner component", () => {
  test("renders spinner correctly", () => {
    render(<Spinner />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    const spinner = screen.getByRole("status", { text: "Loading..." });
    expect(spinner).toBeInTheDocument();
  });

  test("button is disabled", () => {
    render(<Spinner />);

    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });
});
