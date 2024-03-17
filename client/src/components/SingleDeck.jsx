import { useLocation } from 'react-router';
import useFetchData from '../utils/useFetchData';
import Loading from './Loading';
import Error from './Error';

function SingleDeck() {
  const { pathname } = useLocation();
  const deckUuid = pathname.split('/')[2];
  const userId = 'beb60df8-f3ef-453c-9064-8ae8b459f1a6';

  const { data: deck, loading, error } = useFetchData(`${process.env.REACT_APP_API_URL}/decks/${deckUuid}`);

  return loading ? (
    <Loading />
  ) : error ? (
    <Error message={error.message} />
  ) : (
    <div className="container text-light mt-2">
      <div className="user-hero text-center">
        <h1 className="">{deck.name}</h1>
        <p>
          from {deck.userName} on {new Date(deck.createdAt).toDateString()}
        </p>
        {userId === deck.userId ? (
          <>
            <button className="btn btn-primary me-3">Update</button>
            <button className="btn btn-danger me-3">Delete</button>
          </>
        ) : (
          <p className="">Fun Fact: This text willd become 2 Buttons if you the Owner of this Deck!</p>
        )}

        <br />
        <br />
      </div>
      <div className="container row">
        <div className="img--cover col-6 text-center">
          <img
            className="img-fluid"
            src="http://duellinks.gamea.co/file/content/umi92hxs/9m8lhe6k/692680/c0086e8e589b329f2d8b50b056f38d24fea88a24_500.jpg"
            alt="Deck"
          />
        </div>
        <div className="container deck--detail col-6">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-star"
              viewBox="0 0 16 16"
            >
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
            </svg>
            {deck.totalFavorites}
          </p>
          <p>Archetype: {deck.archetypeName}</p>
          <br />
          <p>Description :</p>
          <p>{deck.description}</p>
          <br />
          <button className="btn btn-primary">Download</button>
        </div>
      </div>
    </div>
  );
}

export default SingleDeck;
