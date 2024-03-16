import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import Jumbotron from '../components/Jumbotron';
import SearchBar from '../components/SearchBar';
import ArchetypeList from '../components/ArchetypeList';
import DeckList from '../components/DeckList';
import Loading from '../components/Loading';
import Error from '../components/Error';
// Custom hook for fetching data from API
const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default function TopDecks() {
  // const archetypesData = await fetchArchetypes();

  const [archetypes, setArchetypes] = useState([]);
  const [decks, setDecks] = useState([]);
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [secondArchetypes, setSecondArchetypes] = useState([]);
  const [secondDecks, setSecondDecks] = useState([]);
  const [selectedArchetypeId, setSelectedArchetypeId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setisError] = useState(null);

  // To avoid throwing an error when page is reloaded i passe Null Archetype that does't have data
  const nullArchetypeId = '9dfa578e-e6b3-48ff-99ab-972543f4b6c4';
  const { data: archetypeDecks, loading, error } = useFetchData(
    selectedArchetypeId !== null
      ? `${process.env.REACT_APP_API_URL}/archetypes/${selectedArchetypeId}/decks`
      : `${process.env.REACT_APP_API_URL}/archetypes/${nullArchetypeId}/decks`
  );

  // Only executed one time only when page is reloaded
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const URL = process.env.REACT_APP_API_URL;

        const archetypesResponse = await axios.get(`${URL}/archetypes`);
        const decksResponse = await axios.get(`${URL}/decks`);

        setArchetypes(archetypesResponse.data.data);
        setSecondArchetypes(archetypesResponse.data.data);
        setDecks(decksResponse.data.data);
        setSecondDecks(decksResponse.data.data);
      } catch (error) {
        setisError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  const filteredArchetypes = useMemo(() => {
    if (!query) {
      return secondArchetypes;
    }
    return secondArchetypes.filter((archetype) => archetype.name.toLowerCase().includes(query.toLowerCase()));
  }, [secondArchetypes, query]);

  const handlerArchetype = (id) => {
    isOpen ? setSecondArchetypes(archetypes) : setSecondArchetypes(archetypes.filter((archetype) => archetype.id === id));
    isOpen ? setSecondDecks(decks) : setSelectedArchetypeId(id);
    handlerToggle();
  };

  // useEffect

  const handlerToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Jumbotron
        title="Top Decks"
        text="Welcome to the world of challenge and strategy, where skill in playing Yu-Gi-Oh! cards reigns supreme. Dive into
          the thrill and unmatched intelligence with Top Decks Yu-Gi-Oh! Get the latest insights on the meta game, top
          strategies, and winning card combinations from leading experts. Join a dynamic community and compete for the title
          of the best. Explore the world of Top Decks Yu-Gi-Oh! with us!"
      >
        <button className="btn btn-primary btn-lg mt-3" type="button">
          Upload Your Deck
        </button>
      </Jumbotron>
      <br />
      <div className="container text-dark">
        <SearchBar name="Search: " value={query} onQueryChange={setQuery} />
        <div className="row">
          {isLoading ? (
            <Loading />
          ) : isError ? (
            <Error code={isError.code} message={isError.message} />
          ) : (
            filteredArchetypes.map((card, index) => (
              <ArchetypeList key={index} index={index} isOpen={isOpen} onArchetypeClick={handlerArchetype} card={card} />
            ))
          )}
        </div>
        <div className="row">
          {loading ? (
            <Loading />
          ) : error ? (
            <Error code={error.code} message={error.message} />
          ) : isOpen ? (
            archetypeDecks.map((deck) => <DeckList key={deck.id} deck={deck} />)
          ) : (
            secondDecks.map((deck) => <DeckList key={deck.id} deck={deck} />)
          )}
        </div>
      </div>
    </>
  );
}
