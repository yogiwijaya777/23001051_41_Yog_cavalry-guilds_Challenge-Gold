import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import DeckList from "../DeckList";
import { v4 } from "uuid";

describe("DeckList", () => {
  const mockDeck = {
    id: v4(),
    name: "Kashtira Skill",
    userName: "Udean",
    archetypeName: "Kashtira",
    imageUrl:
      "https://res.cloudinary.com/dmf8l6plb/image/upload/v1710720999/cavalry/decks/hijpcywmsjo8fws5zsoe.png",
  };

  it("renders the deck name", () => {
    render(
      <Router>
        <DeckList deck={mockDeck} />
      </Router>
    );

    const deckNameElement = screen.getByText(mockDeck.name);
    expect(deckNameElement).toBeInTheDocument();
  });

  it("renders the user name", () => {
    render(
      <Router>
        <DeckList deck={mockDeck} />
      </Router>
    );

    const userNameElement = screen.getByText(mockDeck.userName);
    expect(userNameElement).toBeInTheDocument();
  });

  it("renders the archetype name", () => {
    render(
      <Router>
        <DeckList deck={mockDeck} />
      </Router>
    );

    const archetypeNameElement = screen.getByText(mockDeck.archetypeName);
    expect(archetypeNameElement).toBeInTheDocument();
  });

  it("renders the deck image", () => {
    render(
      <Router>
        <DeckList deck={mockDeck} />
      </Router>
    );

    const imageElement = screen.getByAltText("...");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", mockDeck.imageUrl);
  });

  it('renders the "See Details..." link', () => {
    render(
      <Router>
        <DeckList deck={mockDeck} />
      </Router>
    );

    const linkElement = screen.getByText("See Details...");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", `/decks/${mockDeck.id}`);
  });
});
