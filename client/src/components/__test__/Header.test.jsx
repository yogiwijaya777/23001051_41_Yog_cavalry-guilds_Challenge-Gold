import { render, screen } from "@testing-library/react";
import Header from "../Header"

describe("Header", () => {
    test("render the header correctly", () => {
        render(<Header />);

        const linkElement = screen.getByRole("link", { name: /Calvary Guilds/i });
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute("href", "/");

        const topDeckElement = screen.getByRole("link", { name: /Top Decks/i });
        expect(topDeckElement).toBeInTheDocument();
        expect(topDeckElement).toHaveAttribute("href", "/top-decks");

        const aboutElement = screen.getByRole("link", { name: /About/i });
        expect(aboutElement).toBeInTheDocument();
        expect(aboutElement).toHaveAttribute("href", "/about");

    });
});