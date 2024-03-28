import { render, screen } from "@testing-library/react";
import Error from "../Error";

describe("Error", () => {
  it("renders the correct error message for code 400", () => {
    render(<Error code={400} />);
    const errorMessage = screen.getByText(
      "Something went wrong, please try again later"
    );
    expect(errorMessage).toBeInTheDocument();
  });

  it("renders the correct error message for code 401", () => {
    render(<Error code={401} />);
    const errorMessage = screen.getByText("Please login first");
    expect(errorMessage).toBeInTheDocument();
  });

  it("renders the correct error message for code 404", () => {
    render(<Error code={404} />);
    const errorMessage = screen.getByText(
      "Ups, Item's you are looking for does not exist"
    );
    expect(errorMessage).toBeInTheDocument();
  });

  it("renders the correct error message for code 500", () => {
    render(<Error code={500} />);
    const errorMessage = screen.getByText(
      "Something went wrong, please try again later"
    );
    expect(errorMessage).toBeInTheDocument();
  });
});
