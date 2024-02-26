import { showAlert } from '../alert.js';

const getArchetype = async (id) => {
  const res = await fetch(`/v1/archetypes/${id}`, {
    credentials: 'include',
  });

  const data = await res.json();

  if (!res.ok) {
    showAlert('error', data.message);
    if (data.message === 'Please authenticate') {
      setTimeout(() => {
        location.assign('/auth/login');
      }, 1500);
    }
  }

  return data.data;
};
const getArchetypes = async (queries) => {
  let res;
  let data;
  if (queries) {
    res = await fetch(`/v1/archetypes/?${queries}`, {
      credentials: 'include',
    });
    data = await res.json();
  } else {
    res = await fetch('/v1/archetypes/', {
      credentials: 'include',
    });
    data = await res.json();
  }

  if (!res.ok) {
    showAlert('error', data.message);
    if (data.message === 'Please authenticate') {
      setTimeout(() => {
        location.assign('/auth/login');
      }, 1500);
    }
    return;
  }

  return data.data;
};

export const renderArchetypes = async (queries) => {
  const cardContainer = document.querySelector('.archetypes-container');
  let archetypes;

  if (queries) {
    archetypes = await getArchetypes(queries);

    if (archetypes.length < 1) {
      const card = document.createElement('div');
      card.classList.add('not-found');

      const notFound = document.createElement('h1');
      notFound.textContent = 'No Archetypes Found';
      card.appendChild(notFound);

      cardContainer.appendChild(card);
      return;
    }
  } else {
    archetypes = await getArchetypes();
  }

  archetypes.forEach((archetype) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardCover = document.createElement('div');
    cardCover.classList.add('card-cover');

    const coverImg = document.createElement('img');
    coverImg.classList.add('card__cover-img');

    if (archetype.name.includes(' ')) {
      archetype.name = archetype.name.split(' ').join('');
    }
    coverImg.src = `/img/archetypes/${archetype.name.toLowerCase()}.jpg`;
    coverImg.alt = `${archetype.name} cover`;

    const nameHeader = document.createElement('h3');
    nameHeader.classList.add('archetype-name');
    nameHeader.textContent = archetype.name;

    const totalDecks = document.createElement('p');
    totalDecks.classList.add('total-decks');
    totalDecks.textContent = 'Total Decks: ' + archetype.totalDecks;

    cardCover.appendChild(coverImg);
    card.appendChild(cardCover);
    card.appendChild(nameHeader);
    card.appendChild(totalDecks);

    cardContainer.appendChild(card);

    card.addEventListener('click', (e) => {
      location.assign(`/archetypes/${archetype.id}`);
    });
  });
};

export const renderArchetype = async (id) => {
  const archetype = await getArchetype(id);

  const archetypeCardContainer = document.querySelector('.archetype-container');

  const card = document.createElement('div');
  card.classList.add('card');

  const cardCover = document.createElement('div');
  cardCover.classList.add('card-cover');

  const coverImg = document.createElement('img');
  coverImg.classList.add('card__cover-img');

  if (archetype.name.includes(' ')) {
    archetype.name = archetype.name.split(' ').join('');
  }
  coverImg.src = `/img/archetypes/${archetype.name.toLowerCase()}.jpg`;
  coverImg.alt = `${archetype.name} cover`;

  const nameHeader = document.createElement('h1');
  nameHeader.classList.add('archetype-name');
  nameHeader.textContent = archetype.name;

  const totalDecks = document.createElement('p');
  totalDecks.classList.add('total-decks');
  totalDecks.textContent = 'Total Decks: ' + archetype.totalDecks;

  cardCover.appendChild(coverImg);
  card.appendChild(cardCover);
  card.appendChild(nameHeader);
  card.appendChild(totalDecks);

  archetypeCardContainer.appendChild(card);

  const decksCardContainer = document.querySelector('.decks-container');

  archetype.decks.forEach((deck) => {
    const deckCard = document.createElement('div');
    deckCard.classList.add('card');
    deckCard.classList.add('decks-card');

    const deckCover = document.createElement('div');
    deckCover.classList.add('card-cover');

    const nameHeader = document.createElement('h3');
    nameHeader.classList.add('deck-name');
    nameHeader.textContent = deck.name;

    const userInfo = document.createElement('p');
    userInfo.classList.add('user-info');

    const username = document.createElement('span');
    username.classList.add('username');
    username.textContent = deck.username;

    deckCard.appendChild(deckCover);
    deckCard.appendChild(nameHeader);
    userInfo.appendChild(username);
    deckCard.appendChild(userInfo);

    decksCardContainer.appendChild(deckCard);

    nameHeader.addEventListener('click', () => {
      location.assign(`/decks/${deck.id}`);
    });

    username.addEventListener('click', () => {
      location.assign(`/users/${deck.userId}`);
    });
  });
};
