import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';

// function fetchArchetypes() {
//   const archetypeData = [
//     {
//       id: '109907e7-75e1-4b84-85d6-7e1ff6b1f9a3',
//       name: 'Naturia',
//       createdAt: '2024-03-14T00:18:50.333Z',
//       totalDecks: '0',
//     },
//     {
//       id: '3b8c3177-e4bb-471a-ac40-18d5f5b97a2c',
//       name: 'Rescue Ace',
//       createdAt: '2024-03-14T00:18:50.333Z',
//       totalDecks: '3',
//     },
//     {
//       id: '6e35aa3d-1573-4b56-99c0-3f2dd4d64475',
//       name: 'Exosister',
//       createdAt: '2024-03-14T00:18:50.333Z',
//       totalDecks: '5',
//     },
//     {
//       id: '760efab5-a405-4f96-b31e-98ea6e0b2aa1',
//       name: 'Kashtira 1',
//       createdAt: '2024-03-14T00:18:50.333Z',
//       totalDecks: '2',
//     },
//     {
//       id: '9dfa578e-e6b3-48ff-99ab-972543f4b6c4',
//       name: 'Mannadium',
//       createdAt: '2024-03-14T00:18:50.333Z',
//       totalDecks: '4',
//     },
//     {
//       id: 'ff15bac3-f615-43ac-a9ed-d2a574a2dac2',
//       name: 'Branded',
//       createdAt: '2024-03-14T00:18:50.333Z',
//       totalDecks: '1',
//     },
//   ];

//   return archetypeData;
// }

// const fa = async (queries) => {
//   if (queries) console.log(queries);

//   const data = response.data.data;

//   return data;
// };

const fetchDecks = () => {
  const deckList = [
    {
      id: '9601088c-a94f-4122-b902-cc6e9f6f73c3',
      name: 'Menyala abangku',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius lectus sed justo consequat.',
      archetypeId: 'ff15bac3-f615-43ac-a9ed-d2a574a2dac2',
      userId: 'beb60df8-f3ef-453c-9064-8ae8b459f1a6',
      createdAt: '2024-03-14T00:18:50.335Z',
      archetypeName: 'Branded',
      userName: 'Yami Yugi',
    },
    {
      id: 'e515685e-8d9a-44f4-be1a-3313eddf4b35',
      name: 'Exosister Lorem',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius lectus sed justo consequat.',
      archetypeId: '6e35aa3d-1573-4b56-99c0-3f2dd4d64475',
      userId: 'a1e98f24-be67-4864-898a-f1b74ce80630',
      createdAt: '2024-03-14T00:18:50.335Z',
      archetypeName: 'Exosister',
      userName: 'Yuki Judai',
    },
    {
      id: '3fd63be1-e01d-4d38-95e0-34e0549f5b1b',
      name: 'Exosister Menyala',
      description:
        'Exosister Menyala deck emphasizes Spellcaster monsters and flame-based effects to control the game. It utilizes powerful flame-based monsters and spells to disrupt the opponents strategy and gain advantage in battles.',
      archetypeId: '6e35aa3d-1573-4b56-99c0-3f2dd4d64475',
      userId: 'a1e98f24-be67-4864-898a-f1b74ce80630',
      createdAt: '2024-03-14T00:18:50.335Z',
      archetypeName: 'Exosister',
      userName: 'Yuki Judai',
    },
    {
      id: '26c50041-6920-4803-9d07-940f0dd927e2',
      name: 'Exosister Tama',
      description: 'Exosister Tama deck focuses on versatile Spellcaster monsters and trap cards to control the game.',
      archetypeId: '6e35aa3d-1573-4b56-99c0-3f2dd4d64475',
      userId: 'beb60df8-f3ef-453c-9064-8ae8b459f1a6',
      createdAt: '2024-03-14T00:18:50.335Z',
      archetypeName: 'Exosister',
      userName: 'Yami Yugi',
    },
    {
      id: 'cbfe4713-c553-4d17-b63e-00629e69e5fa',
      name: 'Exo-Handtrap',
      description: '"Exosister Handtrap" deck focuses on Spellcaster monsters and handtrap effects to control the game.',
      archetypeId: '6e35aa3d-1573-4b56-99c0-3f2dd4d64475',
      userId: 'f5cc52e7-4bd7-4a50-87f2-da6703ce619c',
      createdAt: '2024-03-14T00:18:50.335Z',
      archetypeName: 'Exosister',
      userName: 'Admin Faedah',
    },
    {
      id: 'e98ab0fc-ed0f-47e5-85d0-b667d5907400',
      name: 'Exosister Regen',
      description:
        'Deck "Exosister Regen" adalah deck berbasis Spellcaster yang menekankan pemanggilan kembali monster dari graveyard dan pengendalian permainan melalui kartu sihir dan jebakan.',
      archetypeId: '6e35aa3d-1573-4b56-99c0-3f2dd4d64475',
      userId: 'beb60df8-f3ef-453c-9064-8ae8b459f1a6',
      createdAt: '2024-03-14T00:18:50.335Z',
      archetypeName: 'Exosister',
      userName: 'Yami Yugi',
    },
    {
      id: '87634e63-35dd-4a44-83ef-ff87bfc082cf',
      name: 'MECHA',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius lectus sed justo consequat.',
      archetypeId: '760efab5-a405-4f96-b31e-98ea6e0b2aa1',
      userId: 'fc27a26d-ddfe-4b40-9246-e1e495b71dda',
      createdAt: '2024-03-14T00:18:50.335Z',
      archetypeName: 'Kashtira 1',
      userName: 'Yusei Fudo',
    },
    {
      id: 'aea98896-b75d-467a-8fb1-24df5e0be41a',
      name: 'Deck Ipsum 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius lectus sed justo consequat.',
      archetypeId: '760efab5-a405-4f96-b31e-98ea6e0b2aa1',
      userId: 'beb60df8-f3ef-453c-9064-8ae8b459f1a6',
      createdAt: '2024-03-14T00:18:50.335Z',
      archetypeName: 'Kashtira 1',
      userName: 'Yami Yugi',
    },
    {
      id: '8e435ae3-69bd-4277-b0a1-00b10ed278cd',
      name: 'adipiscing elit',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius lectus sed justo consequat.',
      archetypeId: '9dfa578e-e6b3-48ff-99ab-972543f4b6c4',
      userId: 'beb60df8-f3ef-453c-9064-8ae8b459f1a6',
      createdAt: '2024-03-14T00:18:50.335Z',
      archetypeName: 'Mannadium',
      userName: 'Yami Yugi',
    },
    {
      id: 'fcf2b1a6-8d39-4b56-a3a9-8c5430a07066',
      name: 'Consectetur',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius lectus sed justo consequat.',
      archetypeId: '9dfa578e-e6b3-48ff-99ab-972543f4b6c4',
      userId: 'b4ea9401-d7de-4966-9044-c7d004377bc2',
      createdAt: '2024-03-14T00:18:50.335Z',
      archetypeName: 'Mannadium',
      userName: 'User Faedah',
    },
    {
      id: 'c490bd0a-ec85-41b6-8406-8da2af5711e2',
      name: 'Sit Amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius lectus sed justo consequat.',
      archetypeId: '9dfa578e-e6b3-48ff-99ab-972543f4b6c4',
      userId: 'fc27a26d-ddfe-4b40-9246-e1e495b71dda',
      createdAt: '2024-03-14T00:18:50.335Z',
      archetypeName: 'Mannadium',
      userName: 'Yusei Fudo',
    },
    {
      id: '8f8d7a00-3d62-414f-bb65-21b4069417d0',
      name: 'Dolor',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius lectus sed justo consequat.',
      archetypeId: '9dfa578e-e6b3-48ff-99ab-972543f4b6c4',
      userId: 'a1e98f24-be67-4864-898a-f1b74ce80630',
      createdAt: '2024-03-14T00:18:50.335Z',
      archetypeName: 'Mannadium',
      userName: 'Yuki Judai',
    },
    {
      id: '14a79282-5341-44ea-9528-86c51604f47f',
      name: 'Deck Ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius lectus sed justo consequat.',
      archetypeId: '3b8c3177-e4bb-471a-ac40-18d5f5b97a2c',
      userId: 'f5cc52e7-4bd7-4a50-87f2-da6703ce619c',
      createdAt: '2024-03-14T00:18:50.335Z',
      archetypeName: 'Rescue Ace',
      userName: 'Admin Faedah',
    },
    {
      id: '8caf65ec-4934-468c-b505-989d9ed0df02',
      name: 'Deck Lorem',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius lectus sed justo consequat.',
      archetypeId: '3b8c3177-e4bb-471a-ac40-18d5f5b97a2c',
      userId: 'b4ea9401-d7de-4966-9044-c7d004377bc2',
      createdAt: '2024-03-14T00:18:50.335Z',
      archetypeName: 'Rescue Ace',
      userName: 'User Faedah',
    },
    {
      id: '3248b507-88e0-4a8c-afbb-669960031cc6',
      name: 'Ipsumto',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius lectus sed justo consequat.',
      archetypeId: '3b8c3177-e4bb-471a-ac40-18d5f5b97a2c',
      userId: 'fc27a26d-ddfe-4b40-9246-e1e495b71dda',
      createdAt: '2024-03-14T00:18:50.335Z',
      archetypeName: 'Rescue Ace',
      userName: 'Yusei Fudo',
    },
  ];

  return deckList;
};

export default function ArchetypeCardList() {
  // const archetypesData = await fetchArchetypes();
  const decksData = fetchDecks();

  const [archetypes, setArchetypes] = useState([]);
  const [decks, setDecks] = useState(decksData);
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [secondArchetypes, setsecondArchetypes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const URL = process.env.REACT_APP_API_URL;

        const response = await axios.get(`${URL}/archetypes`);
        console.log('running');
        console.log(response, URL);
        setArchetypes(response.data.data);
        setsecondArchetypes(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  console.log(process.env.REACT_APP_API_URL);
  console.log(archetypes);

  const filteredArchetypes = useMemo(() => {
    if (!query) {
      return secondArchetypes;
    }
    return secondArchetypes.filter((archetype) => archetype.name.toLowerCase().includes(query.toLowerCase()));
  }, [secondArchetypes, query]);

  const handlerArchetype = (id) => {
    isOpen ? setsecondArchetypes(archetypes) : setsecondArchetypes(archetypes.filter((archetype) => archetype.id === id));
    isOpen ? setDecks(decksData) : setDecks(decks.filter((deck) => deck.archetypeId === id));
    handlerToggle();
  };

  console.log(filteredArchetypes);

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
          {decks.map((deck) => (
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
