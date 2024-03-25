import { render, screen } from "@testing-library/react";
import About from "../About";

describe("About component", () => {
  test("renders the component correctly", () => {
    render(<About />);

    const headingElement = screen.getByRole("heading", { level: 2 });
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent(/We Provide the Best Decks Ever/i);

    const paragraphElement = screen.getByText(
      /We take pride in offering unparalleled insights/i
    );
    expect(paragraphElement).toBeInTheDocument();

    const imageElement = screen.getByAltText("Archetype");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute(
      "src",
      "/img/Screenshot_20240303-174732_Master_Duel.jpg"
    );

    const linkElement = screen.getByRole("link", { name: /Learn More/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/top-decks");
  });
});
