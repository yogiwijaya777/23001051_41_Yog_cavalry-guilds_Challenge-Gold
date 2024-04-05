import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer", () => {
  test("render the Footer correctly", () => {
    render(<Footer />);

    const fbElement = screen.getByRole("button", { name: / /i });
    expect(fbElement).toBeInTheDocument();
    expect(fbElement).toHaveAttribute("href", "https://www.facebook.com");

    const xElement = screen.getByRole("button", { name: / /i });
    expect(xElement).toBeInTheDocument();
    expect(xElement).toHaveAttribute("href", "https://www.twitter.com");

    const discordElement = screen.getByRole("button", { name: / /i });
    expect(discordElement).toBeInTheDocument();
    expect(discordElement).toHaveAttribute("href", "https://www.discord.com");

    const twitchElement = screen.getByRole("button", { name: / /i });
    expect(twitchElement).toBeInTheDocument();
    expect(twitchElement).toHaveAttribute("href", "https://www.twitch.tv");

    const footerElement = screen.getByRole("footer", { level: 2 });
    expect(footerElement).toBeInTheDocument();
    expect(footerElement).toHaveTextContent(
      /@{new Date().getFullYear()} Calvary Guilds/i
    );

    const linkElement = screen.getByRole("link", { name: /Contact/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "#");

    const homeElement = screen.getByRole("link", { name: /Home/i });
    expect(homeElement).toBeInTheDocument();
    expect(homeElement).toHaveAttribute("href", "/");

    const topDeckElement = screen.getByRole("link", { name: /Top Decks/i });
    expect(topDeckElement).toBeInTheDocument();
    expect(topDeckElement).toHaveAttribute("href", "/top-decks");

    const aboutElement = screen.getByRole("link", { name: /About/i });
    expect(aboutElement).toBeInTheDocument();
    expect(aboutElement).toHaveAttribute("href", "/about");

    screen.logTestingPlaygroundURL();
  });
});
