import { useState } from 'react';

function fetchArchetypes() {
  const archetypeData = [
    {
      id: '109907e7-75e1-4b84-85d6-7e1ff6b1f9a3',
      name: 'Naturia',
      createdAt: '2024-03-14T00:18:50.333Z',
      totalDecks: '0',
    },
    {
      id: '3b8c3177-e4bb-471a-ac40-18d5f5b97a2c',
      name: 'Rescue Ace',
      createdAt: '2024-03-14T00:18:50.333Z',
      totalDecks: '3',
    },
    {
      id: '6e35aa3d-1573-4b56-99c0-3f2dd4d64475',
      name: 'Exosister',
      createdAt: '2024-03-14T00:18:50.333Z',
      totalDecks: '5',
    },
    {
      id: '760efab5-a405-4f96-b31e-98ea6e0b2aa1',
      name: 'Kashtira 1',
      createdAt: '2024-03-14T00:18:50.333Z',
      totalDecks: '2',
    },
    {
      id: '9dfa578e-e6b3-48ff-99ab-972543f4b6c4',
      name: 'Mannadium',
      createdAt: '2024-03-14T00:18:50.333Z',
      totalDecks: '4',
    },
    {
      id: 'ff15bac3-f615-43ac-a9ed-d2a574a2dac2',
      name: 'Branded',
      createdAt: '2024-03-14T00:18:50.333Z',
      totalDecks: '1',
    },
  ];

  return archetypeData;
}

const fetchDecks = () => {
  const deckList = [
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
  ];

  return deckList;
};

export default function ArchetypeCardList() {
  const archetypesData = fetchArchetypes();
  const decksData = fetchDecks();

  const [archetypes, setArchetypes] = useState(archetypesData);
  const [decks, setDecks] = useState(decksData);
  const [isOpen, setIsOpen] = useState(false);

  const handlerArchetype = (id) => {
    isOpen ? setArchetypes(archetypesData) : setArchetypes(archetypes.filter((archetype) => archetype.id === id));
    isOpen ? setDecks(decks.filter((deck) => deck.archetypeId === id)) : setDecks(decksData);
    handlerToggle();
  };

  const handlerToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container text-dark">
      <div className="row">
        {archetypes.map((card, index) => (
          <div key={index} className="col-sm-6 col-md-4 col-lg-2 fi" onClick={() => handlerArchetype(card.id)}>
            <div className="card position-relative">
              <div>
                <span className="ms-2">{card.name}</span>
                <span className="position-absolute top-0 end-0 me-1">{card.totalDecks}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isOpen && (
        <table className="text-light table">
          <thead>
            <tr className="table-secondary">
              <th>Archetype</th>
              <th>Name</th>
              <th>Player</th>
            </tr>
          </thead>
          {decksData.map((deck) => (
            <tbody>
              <tr>
                <td>{deck.archetypeName}</td>
                <td>{deck.name}</td>
                <td>{deck.userName}</td>
              </tr>
            </tbody>
          ))}
        </table>
      )}
    </div>
  );
}
