import axios from 'axios';
import { useEffect, useState } from 'react';

function DeckFavorites({ deck, user, token }) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [totalFavorites, setTotalFavorites] = useState(0);
  const [favorite, setFavorite] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user) {
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/favorite-decks/${deck.id}/${user.id}`, {
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
  }, [user, token, deck]);

  useEffect(() => {
    if (deck) setTotalFavorites(+deck.totalFavorites);
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
          const res = await axios.post(
            `${process.env.REACT_APP_API_URL}/favorite-decks`,
            { deckId: deck.id },
            {
              headers: {
                Authorization: `Bearer ${token.access.token}`,
              },
            }
          );
          setFavorite(res.data.data);
          setTotalFavorites(totalFavorites + 1);
        }
        setIsFavorited(!isFavorited);
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
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
