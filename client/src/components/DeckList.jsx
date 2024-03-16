import '../css/DeckList.css';

function DeckList({ deck }) {
  return (
    <div className="card mb-2 ms-4 mt-3 col-lg-2 col-md-4 col-sm-6 bg-white" key={deck.id}>
      <div>
        <img src={`/img/archetypes/${deck.archetypeName}.jpg`} className="img-thumbnail img-fluid" alt="..." />
      </div>
      <div className="card-body text-center me-4">
        <a
          className="icon-link icon-link-hover"
          style={{ '--bs-icon-link-transform': 'translate3d(0, -.125rem, 0)' }}
          href={`/decks/${deck.id}`}
        >
          <svg className="bi" aria-hidden="true"></svg>
          {deck.name}
        </a>
      </div>
    </div>
  );
}

export default DeckList;
