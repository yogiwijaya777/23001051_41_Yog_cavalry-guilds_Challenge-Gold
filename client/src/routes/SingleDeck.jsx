import { useLocation } from 'react-router';
import useFetchData from '../utils/useFetchData';
import Loading from '../components/Loading';
import Error from '../components/Error';
import DeleteDeck from '../components/DeleteDeck';
import { useAuth } from '../contexts/AuthContext';
import addFlAttachmentToUrl from '../utils/addFlAttachmentToUrl';
import UpdateDeck from '../components/UpdateDeck';
import DeckFavorites from '../components/DeckFavorites';

function SingleDeck() {
  const { user, token } = useAuth();
  const { pathname } = useLocation();
  const deckId = pathname.split('/')[2];

  const { data: deck, loading, error } = useFetchData(`${process.env.REACT_APP_API_URL}/decks/${deckId}`);

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
        {user.id === deck.userId ? (
          <div className="container">
            <UpdateDeck token={token} deckId={deck.id} />
            &nbsp;
            <DeleteDeck token={token} deckId={deck.id} />
          </div>
        ) : (
          <p className="">Fun Fact: This text willd become 2 Buttons if you the Owner of this Deck!</p>
        )}
        <br />
        <br />
      </div>
      <div className="container row">
        <div className="img--cover col-6 text-center">
          <img className="img-fluid" src={deck.imageUrl} alt="Deck" />
        </div>
        <div className="container deck--detail col-6">
          <DeckFavorites deck={deck} user={user} token={token} />
          <p>Archetype: {deck.archetypeName}</p>
          <br />
          <p>Description :</p>
          <p>{deck.description}</p>
          <br />
          <a href={addFlAttachmentToUrl(deck.imageUrl)} rel="noreferrer">
            Download
          </a>
        </div>
      </div>
    </div>
  );
}

export default SingleDeck;
