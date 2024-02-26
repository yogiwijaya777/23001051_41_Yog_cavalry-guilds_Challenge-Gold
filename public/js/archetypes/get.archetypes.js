import { showAlert } from '../alert.js';

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
  let archetypes;

  if (queries) {
    archetypes = await getArchetypes(queries);

    if (archetypes.length === 0) {
      const card = document.createElement('div');
      card.classList.add('not-found');

      const notFound = document.createElement('p');
      notFound.textContent = 'No Archetypes Found';
      card.appendChild(notFound);
      return;
    }
  } else {
    archetypes = await getArchetypes();
    console.log(archetypes);
  }

  console.log(archetypes);
  const cardContainer = document.querySelector('.card-container');

  archetypes.forEach((archetype) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardCover = document.createElement('div');
    cardCover.classList.add('card-cover');

    const coverImg = document.createElement('img');
    coverImg.classList.add('card__cover-img');
    coverImg.src = `/img/archetypes/${archetype.name}`;
    coverImg.alt = `${archetype.name} cover`;

    const nameHeader = document.createElement('h3');
    nameHeader.classList.add('archetype-name');
    nameHeader.textContent = archetype.name;

    const totalDecks = document.createElement('p');
    totalDecks.classList.add('total-decks');
    totalDecks.textContent = archetype.totalDecks;

    cardCover.appendChild(coverImg);
    card.appendChild(cardCover);
    card.appendChild(nameHeader);
    card.appendChild(totalDecks);

    cardContainer.appendChild(card);
  });
};
