import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer ">
      <div className="btn-group">
        <button type="button" className="btn btn-outline-secondary">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <i className="bi bi-facebook"></i>
          </a>
          <span className="visually-hidden">Button</span>
        </button>
        <button type="button" className="btn btn-outline-secondary">
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <i className="bi bi-twitter-x"></i>
          </a>
          <span className="visually-hidden">Button</span>
        </button>
        <button type="button" className="btn btn-outline-secondary">
          <a href="https://www.discord.com" target="_blank" rel="noreferrer">
            <i className="bi bi-discord"></i>
          </a>
          <span className="visually-hidden">Button</span>
        </button>
        <button type="button" className="btn btn-outline-secondary">
          <a href="https://www.twitch.tv" target="_blank" rel="noreferrer">
            <i className="bi bi-twitch"></i>
          </a>
          <span className="visually-hidden">Button</span>
        </button>
      </div>
      <hr></hr>
      <p>@2024 Calvary Guilds</p>
      <ul className="menu">
        <li>
          <a href="#contact">Contact</a>
          <a href="/">Home</a>
          <a href="/top-decks">Top Decks</a>
          <a href="/#about">About</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
