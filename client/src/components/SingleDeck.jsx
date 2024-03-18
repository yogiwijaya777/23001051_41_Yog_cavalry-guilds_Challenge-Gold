import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import useFetchData from '../utils/useFetchData';
import Loading from './Loading';
import Error from './Error';
import DeleteDeck from './DeleteDeck';
import { useAuth } from '../contexts/AuthContext';
import addFlAttachmentToUrl from '../utils/addFlAttachmentToUrl';
import UpdateDeck from './UpdateDeck';
import axios from 'axios';

function SingleDeck() {
  const { user, token } = useAuth();
  const [isFavorited, setIsFavorited] = useState(false);
  const [totalFavorites, setTotalFavorites] = useState(0);
  const [favorite, setFavorite] = useState(null);
  const { pathname } = useLocation();
  const deckId = pathname.split('/')[2];

  const { data: deck, loading, error } = useFetchData(`${process.env.REACT_APP_API_URL}/decks/${deckId}`);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user) {
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/favorite-decks/${deckId}/${user.id}`, {
            headers: {
              Authorization: `Bearer ${token.access.token}`,
            },
          });
          if (response.status === 200) {
            setIsFavorited(true);
            setFavorite(response.data.data);
          }
        }
      } catch (error) {
        error.response.status === 404 ? setIsFavorited(false) : alert(error.response.data.message);
      }
    };
    fetchData();
  });

  useEffect(() => {
    if (deck) setTotalFavorites(deck.totalFavorites);
  }, [deck]);

  const handlerFavorite = async () => {
    try {
      if (user) {
        if (isFavorited) {
          await axios.delete(`${process.env.REACT_APP_API_URL}/favorite-decks/${favorite.id}`, {
            headers: {
              Authorization: `Bearer ${token.access.token}`,
            },
          });
          setTotalFavorites(totalFavorites - 1);
        } else {
          await axios.post(
            `${process.env.REACT_APP_API_URL}/favorite-decks`,
            { deckId },
            {
              headers: {
                Authorization: `Bearer ${token.access.token}`,
              },
            }
          );
          setTotalFavorites(totalFavorites + 1);
        }
        setIsFavorited(!isFavorited);
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

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
          <p className="">
            <i
              style={{ cursor: 'pointer' }}
              className={`button bi bi-star${isFavorited ? '-fill' : ''}`}
              onClick={handlerFavorite}
            />
            <span className="user-select-none">&nbsp;{totalFavorites}</span>
          </p>
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
