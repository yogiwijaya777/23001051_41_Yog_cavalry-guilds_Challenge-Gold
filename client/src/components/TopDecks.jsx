import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';

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
      <div className="bg-body-tertiary rounded-3 mx-5 px-5 mt-4 text-center">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold mb-4 text-primary">Top Decks</h1>
          <p className="">
            Welcome to the world of challenge and strategy, where skill in playing Yu-Gi-Oh! cards reigns supreme. Dive into
            the thrill and unmatched intelligence with Top Decks Yu-Gi-Oh! Get the latest insights on the meta game, top
            strategies, and winning card combinations from leading experts. Join a dynamic community and compete for the
            title of the best. Explore the world of Top Decks Yu-Gi-Oh! with us!
          </p>
          <button className="btn btn-primary btn-lg mt-3" type="button">
            Upload Your Deck
          </button>
        </div>
      </div>
      <br />
      <div className="container text-dark">
        <div className="input-group ">
          <span className="input-group-text ">Search</span>
          <input type="text" value={query} className="form-control" onChange={(e) => setQuery(e.target.value)} />
        </div>
        <div className="row">
          {filteredArchetypes.map((card, index) => (
            <div key={index} className="col-sm-6 col-md-4 col-lg-2 mt-1" onClick={() => handlerArchetype(card.id)}>
              <div className="card position-relative">
                <div>
                  <span className="ms-2">{card.name}</span>
                  <span className="position-absolute top-0 end-0 me-1">{card.totalDecks}</span>
                </div>
              </div>
            </div>
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

// <table className="text-light table">
//   <thead>
//     <tr className="table-secondary">
//       <th>Archetype</th>
//       <th>Name</th>
//       <th>Player</th>
//     </tr>
//   </thead>
//   {decks.map((deck) => (
//     <tbody>
//       <tr>
//         <td>{deck.archetypeName}</td>
//         <td>{deck.name}</td>
//         <td>{deck.userName}</td>
//       </tr>
//     </tbody>
//   ))}
// </table>
