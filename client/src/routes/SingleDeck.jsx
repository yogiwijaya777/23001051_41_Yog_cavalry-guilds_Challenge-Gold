import { useParams } from 'react-router';
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
  const { id: deckId } = useParams();

  const { data: deck, loading, error } = useFetchData(`${process.env.REACT_APP_API_URL}/decks/${deckId}`);

  return loading ? (
    <Loading />
  ) : error ? (
    <Error code={error.status} />
  ) : (
    <>
      <div className="  me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div className="my-3 p-3">
          <h2 className="">{deck.name}</h2>
          <p>
            from {deck.userName} on {new Date(deck.createdAt).toDateString()}
          </p>
        </div>
      </div>
      <div className=" shadow-sm mx-auto" style={{ width: '50%', height: '700px', 'border-radius': '21px 21px ' }}>
        <div className=" row">
          <div className="img--cover col-6 mt-4 text-center">
            <img className="img-fluid" src={deck.imageUrl} alt="Deck" />
            <a href={addFlAttachmentToUrl(deck.imageUrl)} rel="noreferrer">
              <button className="btn btn-secondary me-1">
                <i className="bi bi-download"></i>
              </button>
            </a>
            {user.id === deck.userId ? (
              <>
                <UpdateDeck token={token} deckId={deck.id} />
                &nbsp;
                <DeleteDeck token={token} deckId={deck.id} />
              </>
            ) : (
              <p className="">Fun Fact: This text willd become 2 Buttons if you the Owner of this Deck!</p>
            )}
          </div>
          <div className=" deck--detail col-6 mt-4">
            <DeckFavorites deck={deck} user={user} token={token} />
            <p>Archetype: {deck.archetypeName}</p>
            <br />
            <p>Description :</p>
            <p>{deck.description}</p>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleDeck;

<div class="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
  <div class="my-3 p-3">
    <h2 class="display-5">Another headline</h2>
    <p class="lead">And an even wittier subheading.</p>
  </div>
  <div></div>
</div>;
