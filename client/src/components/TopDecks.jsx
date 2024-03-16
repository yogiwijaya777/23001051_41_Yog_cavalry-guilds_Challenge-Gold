import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import Jumbotron from './Jumbotron';
import SearchBar from './SearchBar';
import ArchetypeList from './ArchetypeList';
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

export default function ArchetypeCardList() {
  // const archetypesData = await fetchArchetypes();

  const [archetypes, setArchetypes] = useState([]);
  const [decks, setDecks] = useState([]);
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [secondArchetypes, setSecondArchetypes] = useState([]);
  const [secondDecks, setSecondDecks] = useState([]);
  const [selectedArchetypeId, setSelectedArchetypeId] = useState(null);

  const { data: archetypeDecks } = useFetchData(`${process.env.REACT_APP_API_URL}/archetypes/${selectedArchetypeId}/decks`);

  // Only executed one time only when page is reloaded
  useEffect(() => {
    async function fetchData() {
      try {
        const URL = process.env.REACT_APP_API_URL;

        const archetypesResponse = await axios.get(`${URL}/archetypes`);
        const decksResponse = await axios.get(`${URL}/decks`);

        setArchetypes(archetypesResponse.data.data);
        setSecondArchetypes(archetypesResponse.data.data);
        setDecks(decksResponse.data.data);
        setSecondDecks(decksResponse.data.data);
      } catch (error) {
        console.log(error);
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
          {filteredArchetypes.map((card, index) => (
            <ArchetypeList key={index} index={index} isOpen={isOpen} onArchetypeClick={handlerArchetype} card={card} />
          ))}
        </div>
        <div className="row">
          {isOpen
            ? archetypeDecks.map((deck) => (
                <div className="card mb-2 ms-4 mt-3 col-lg-2 col-md-4 col-sm-6" key={deck.id}>
                  <img src={`/img/archetypes/${deck.archetypeName}.jpg`} className="img-fluid w-75 mx-auto" alt="..." />
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
              ))
            : secondDecks.map((deck) => (
                <div className="card mb-2 ms-4 mt-3 col-lg-2 col-md-4 col-sm-6" key={deck.id}>
                  <img src={`/img/archetypes/${deck.archetypeName}.jpg`} className="img-fluid w-75 mx-auto" alt="..." />
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
              ))}
        </div>
      </div>
    </>
  );
}
