import { render, screen, fireEvent } from "@testing-library/react";
import ArchetypeList from "../ArchetypeList";
import { v4 } from "uuid";

describe("ArchetypeList component", () => {
  const mockCard = {
    id: v4(),
    name: "Archetype 1",
    totalDecks: 10,
  };

  const mockOnArchetypeClick = jest.fn();

  test("renders the component correctly", () => {
    render(
      <ArchetypeList
        index={0}
        isOpen={false}
        onArchetypeClick={mockOnArchetypeClick}
        card={mockCard}
      />
    );

    const cardElement = screen.getByTestId("archetypeList");
    expect(cardElement).toBeInTheDocument();

    expect(cardElement).toHaveClass("col-sm-4 col-md-3 col-lg-2 mt-1");
    expect(cardElement).not.toHaveClass("bg-info-subtle active");

    const cardTitleElement = screen.getByText("Archetype 1");
    expect(cardTitleElement).toBeInTheDocument();

    const totalDecksElement = screen.getByText("10");
    expect(totalDecksElement).toBeInTheDocument();
  });

  test("calls onArchetypeClick when the card is clicked", () => {
    render(
      <ArchetypeList
        index={0}
        isOpen={false}
        onArchetypeClick={mockOnArchetypeClick}
        card={mockCard}
      />
    );

    const cardElement = screen.getByTestId("archetypeList");
    fireEvent.click(cardElement);

    expect(mockOnArchetypeClick).toHaveBeenCalledWith(mockCard.id);
  });

  test("renders the component with isOpen prop", () => {
    render(
      <ArchetypeList
        index={0}
        isOpen={true}
        onArchetypeClick={mockOnArchetypeClick}
        card={mockCard}
      />
    );

    const cardElement = screen.getByTestId("archetypeList");
    expect(cardElement).toHaveClass("col-sm-4 col-md-3 col-lg-2 mt-1");
  });
});
