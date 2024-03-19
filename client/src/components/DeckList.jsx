import { Link } from 'react-router-dom';
import '../css/DeckList.css';

function DeckList({ deck }) {
  return (
    <div className="col ">
      <div className="card bg-dark-subtle" key={deck.id}>
        <div>
          <img src={`${deck.imageUrl}`} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">{deck.name}</h5>
          <p className="card-text">
            {deck.description.length > 70 ? deck.description.substring(0, 70) + '...' : deck.description}
          </p>
        </div>
        <div class="mb-5 d-flex justify-content-around">
          <h3>{deck.archetypeName}</h3>
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
