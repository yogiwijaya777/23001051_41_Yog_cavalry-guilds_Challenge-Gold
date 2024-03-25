import { render, screen } from "@testing-library/react";
import Carousel from "../Carousel";

describe("Carousel component", () => {
  test("renders the carousel correctly", () => {
    render(<Carousel />);

    const carouselElement = screen.getByTestId("carousel");
    expect(carouselElement).toBeInTheDocument();

    const indicators = screen.getAllByRole("button", { name: /Slide/ });
    expect(indicators).toHaveLength(3);

    const carouselItems = screen.getAllByRole("img");
    expect(carouselItems).toHaveLength(3);

    const activeItem = screen.getByAltText("Rescue Ace");
    expect(activeItem.closest(".carousel-item")).toHaveClass("active");

    const captions = screen.getAllByRole("heading", { level: 1 });
    expect(captions).toHaveLength(3);
    expect(captions[0]).toHaveTextContent("Do You Need at Building Your Deck?");
    expect(captions[1]).toHaveTextContent("Are You Want to be a Champion?");
    expect(captions[2]).toHaveTextContent("Ready for The Next Duel?");

    const links = screen.getAllByRole("link", { name: /Learn more\.\.\./i });
    expect(links).toHaveLength(3);
    expect(links[0]).toHaveAttribute("href", "/top-decks");
    expect(links[1]).toHaveAttribute("href", "/top-decks");
    expect(links[2]).toHaveAttribute("href", "/top-decks");

    const prevControl = screen.getByRole("button", { name: /Previous/i });
    const nextControl = screen.getByRole("button", { name: /Next/i });
    expect(prevControl).toBeInTheDocument();
    expect(nextControl).toBeInTheDocument();
  });
});
