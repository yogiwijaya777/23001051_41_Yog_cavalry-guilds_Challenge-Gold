import axios from 'axios';
import { useEffect, useState } from 'react';
import Error from './Error';
function DeckFavorites({ deck, user, token }) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [totalFavorites, setTotalFavorites] = useState(0);
  const [favorite, setFavorite] = useState(null);
  const [isErrorFavorite, setIsErrorFavorite] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user) {
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/favorite-decks/${deck.id}/${user.id}`, {
            headers: {
              Authorization: `Bearer ${token?.access?.token}`,
            },
          });
          if (response.status === 200) {
            setIsFavorited(true);
            setFavorite(response.data.data);
          }
        }
      } catch (error) {
        console.log(error);
        error.response.status === 404 || 401 ? setIsFavorited(false) : setIsErrorFavorite(error.response.status);
      }
    };
    fetchData();
  }, [user, token, deck, setIsErrorFavorite]);

  useEffect(() => {
    if (deck) setTotalFavorites(+deck.totalFavorites);
  }, [deck]);

  const handlerFavorite = async () => {
    try {
      if (user) {
        if (isFavorited) {
          await axios.delete(`${process.env.REACT_APP_API_URL}/favorite-decks/${favorite.id}`, {
            headers: {
              Authorization: `Bearer ${token?.access?.token}`,
            },
          });
          setTotalFavorites(totalFavorites - 1);
        } else {
          const res = await axios.post(
            `${process.env.REACT_APP_API_URL}/favorite-decks`,
            { deckId: deck.id },
            {
              headers: {
                Authorization: `Bearer ${token?.access?.token}`,
              },
            }
          );
          setFavorite(res.data.data);
          setTotalFavorites(totalFavorites + 1);
        }
        setIsFavorited(!isFavorited);
      }
    } catch (error) {
      setIsErrorFavorite(error.response.status);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };

  return isErrorFavorite ? (
    <Error code={isErrorFavorite} />
  ) : (
    <div>
      <i
        style={{ cursor: 'pointer' }}
        className={`button bi bi-star${isFavorited ? '-fill' : ''}`}
        onClick={handlerFavorite}
      />
      <span className="user-select-none">&nbsp;{totalFavorites}</span>
    </div>
  );
}

export default DeckFavorites;
