import { Link } from 'react-router-dom';

function DeckList({ deck }) {
  return (
    <div className="col ">
      <div className="card bg-dark-subtle" key={deck.id}>
        <div>
          <img src={`${deck.imageUrl}`} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h4 className="card-title text-primary">{deck.name}</h4>
          <p className="card-text">
            <small className="text-muted">{deck.userName}</small>
          </p>
        </div>
        <div class="mb-5 d-flex justify-content-around">
          <h5 className="mt-1">{deck.archetypeName}</h5>
          <Link to={`/decks/${deck.id}`} className="btn btn-primary me-2">
            See Details...
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DeckList;
// mb-2 ms-4 mt-3 col-lg-2 col-md-4 col-sm-6 bg-white
