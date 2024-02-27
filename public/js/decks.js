import { showAlert } from './alert';

const getDecks = async (queries) => {
  let res;
  let data;
  if (queries) {
    res = await fetch(`/v1/decks/?${queries}`, {
      credentials: 'include',
    });
    data = await res.json();
  } else {
    res = await fetch('/v1/decks/', {
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

const getDeck = async (id) => {
  const res = await fetch(`/v1/decks/${id}`, {
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

export const renderDecks = async (queries) => {
  const decksCardContainer = document.querySelector('.decks-container');

  let decks;

  if (queries) {
    decks = await getDecks(queries);

    if (decks.length < 1) {
      const card = document.createElement('div');
      card.classList.add('not-found');

      const notFound = document.createElement('h1');
      notFound.textContent = 'No Decks Found';
      card.appendChild(notFound);

      decksCardContainer.appendChild(card);
      return;
    }
  } else {
    decks = await getDecks();
  }

  decks.forEach((deck) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardCover = document.createElement('div');
    cardCover.classList.add('card-cover');

    const coverImg = document.createElement('img');
    coverImg.classList.add('card__cover-img');

    const nameHeader = document.createElement('h1');
    nameHeader.classList.add('deck-name');
    nameHeader.textContent = deck.name;

    const archetype = document.createElement('h2');
    archetype.classList.add('archetype');
    archetype.textContent = `Archetype : ${deck.archetypeName}`;

    const userInfo = document.createElement('p');
    userInfo.classList.add('user-info');

    const username = document.createElement('span');
    username.classList.add('username');
    username.textContent = `User : ${deck.userName}, Created at ${new Date(deck.createdAt).toString()}`;

    if (deck.archetypeName.includes(' ')) {
      deck.archetypeName = deck.archetypeName.split(' ').join('');
    }
    coverImg.src = `/img/archetypes/${deck.archetypeName.toLowerCase()}.jpg`;
    coverImg.alt = `${deck.name} cover`;

    userInfo.appendChild(username);
    cardCover.appendChild(coverImg);

    card.appendChild(cardCover);
    card.appendChild(nameHeader);
    card.appendChild(archetype);
    card.appendChild(userInfo);

    decksCardContainer.appendChild(card);

    nameHeader.addEventListener('click', () => {
      location.assign(`/decks/${deck.id}`);
    });

    coverImg.addEventListener('click', () => {
      location.assign(`/decks/${deck.id}`);
    });

    archetype.addEventListener('clicl', () => {
      location.assign(`/archetypes/${deck.archetypeId}`);
    });

    username.addEventListener('click', () => {
      location.assign(`/users/${deck.userId}`);
    });
  });
};

export const renderDeck = async (id) => {
  const deck = await getDeck(id);

  const deckCardContainer = document.querySelector('.deck-container');

  const card = document.createElement('div');
  card.classList.add('card');

  const cardCover = document.createElement('div');
  cardCover.classList.add('card-cover');

  const coverImg = document.createElement('img');
  coverImg.classList.add('card__cover-img');

  if (deck.archetypeName.includes(' ')) {
    deck.archetypeName = deck.archetypeName.split(' ').join('');
  }
  coverImg.src = `/img/archetypes/${deck.archetypeName.toLowerCase()}.jpg`;
  coverImg.alt = `${deck.name} cover`;

  const nameHeader = document.createElement('h1');
  nameHeader.classList.add('deck-name');
  nameHeader.textContent = deck.name;

  const archetype = document.createElement('h2');
  archetype.classList.add('archetype');
  archetype.textContent = `Archetype : ${deck.archetypeName}`;

  const userInfo = document.createElement('p');
  userInfo.classList.add('user-info');

  const username = document.createElement('span');
  username.classList.add('username');
  username.textContent = `User : ${deck.userName}, Created at ${new Date(deck.createdAt).toString()}`;

  userInfo.appendChild(username);
  cardCover.appendChild(coverImg);
  card.appendChild(cardCover);
  card.appendChild(nameHeader);
  card.appendChild(archetype);
  card.appendChild(userInfo);

  deckCardContainer.appendChild(card);

  archetype.addEventListener('click', () => {
    location.assign(`/archetypes/${deck.archetypeId}`);
  });

  username.addEventListener('click', () => {
    location.assign(`/users/${deck.userId}`);
  });
};