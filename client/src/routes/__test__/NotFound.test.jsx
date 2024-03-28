import { render, screen } from "@testing-library/react";
import NotFound from "../NotFound";

describe("NotFound component", () => {
  test("renders not found message and back to home link", () => {
    render(<NotFound />);

    const notFoundMessage = screen.getByText(
      "The page you are looking for was not found."
    );
    expect(notFoundMessage).toBeInTheDocument();

    const backToHomeLink = screen.getByRole("link", { name: "Back to Home" });
    expect(backToHomeLink).toBeInTheDocument();
    expect(backToHomeLink).toHaveAttribute("href", "/");
  });
});
