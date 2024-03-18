import { showAlert } from './alert';
import { getArchetypes } from './archetypes';
import { showModal, showUpdateDeckModal, showCreateDeckModal } from './modals';

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
    showAlert('danger', data.message);
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
    showAlert('danger', data.message);
    if (data.message === 'Please authenticate') {
      setTimeout(() => {
        location.assign('/auth/login');
      }, 1500);
    }
  }

  return data.data;
};

const createDeck = async (data) => {
  const res = await fetch('/v1/decks', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const dataRes = await res.json();

  if (!res.ok) {
    showAlert('danger', dataRes.message);
    if (dataRes.message === 'Please authenticate') {
      setTimeout(() => {
        location.assign('/auth/login');
      }, 1500);
    }
  }

  return dataRes.data;
};

const deleteDeck = async (id) => {
  const res = await fetch(`/v1/decks/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  });

  const data = await res.json();

  if (!res.ok) {
    showAlert('danger', data.message);
    if (data.message === 'Please authenticate') {
      setTimeout(() => {
        location.assign('/auth/login');
      }, 1500);
    }
  }

  return;
};

const updateDeck = async (id, data) => {
  const res = await fetch(`/v1/decks/${id}`, {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const dataRes = await res.json();

  if (!res.ok) {
    showAlert('danger', dataRes.message);
    if (dataRes.message === 'Please authenticate') {
      setTimeout(() => {
        location.assign('/auth/login');
      }, 1500);
    }
  }

  return;
};

export const renderDecks = async (queries) => {
  const decksCardContainer = document.querySelector('.decks-container');
  decksCardContainer.classList.add('row');

  const createBtn = document.createElement('button');
  createBtn.classList.add('btn', 'btn-primary', 'btn-create-deck');
  createBtn.textContent = 'Create Deck';
  createBtn.addEventListener('click', async () => {
    const archetypes = await getArchetypes();
    const data = await showCreateDeckModal(archetypes);
    if (data) {
      showAlert('success', 'Deck Created');
      const newDeck = await createDeck(data);
      location.assign(`/decks/${newDeck.id}`);
    }
  });
  decksCardContainer.appendChild(createBtn);

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
    card.classList.add('card', 'col-3', 'gy-4', 'text-center');

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

  const deckDescription = document.createElement('p');
  deckDescription.classList.add('deck-description', 'card-text', 'd-inline-block', 'text-center');
  deckDescription.textContent = `Description : ${deck.description};`;

  userInfo.appendChild(username);
  cardCover.appendChild(coverImg);
  card.appendChild(deckDescription);
  card.appendChild(cardCover);
  card.appendChild(nameHeader);
  card.appendChild(archetype);
  card.appendChild(userInfo);

  const curUser = JSON.parse(localStorage.getItem('user'));
  if (curUser.id === deck.userId) {
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn', 'btn', 'btn-danger', 'btn-sm', 'float-end', 'modal-btn');
    deleteBtn.textContent = 'Delete';

    deleteBtn.addEventListener('click', async () => {
      const confirmation = await showModal('Are you sure you want to delete this deck?', 'This action cannot be undone.');
      if (confirmation) {
        showAlert('success', 'Deck deleted successfully');
        await deleteDeck(id);
        location.assign('/decks');
      } else {
        showAlert('info', 'Deletion canceled');
      }
    });

    const updateBtn = document.createElement('button');
    updateBtn.classList.add('update-btn', 'btn', 'btn-primary', 'btn-sm', 'float-end', 'modal-btn');
    updateBtn.textContent = 'Update';

    updateBtn.addEventListener('click', async () => {
      const body = await showUpdateDeckModal();

      // Remove empty field
      for (const key in body) {
        if (body[key] === '') {
          delete body[key];
        }
      }

      if (body) {
        showAlert('success', 'Deck updated successfully');
        await updateDeck(id, body);
        setTimeout(() => {
          location.reload(true);
        }, 2000);
      } else {
        showAlert('info', 'Update canceled');
      }
    });

    card.appendChild(deleteBtn);
    card.appendChild(updateBtn);
  }

  deckCardContainer.appendChild(card);

  archetype.addEventListener('click', () => {
    location.assign(`/archetypes/${deck.archetypeId}`);
  });

  username.addEventListener('click', () => {
    location.assign(`/users/${deck.userId}`);
  });
};
