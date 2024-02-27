import { showAlert } from './alert';

const getUsers = async (queries) => {
  let res;
  if (queries) {
    res = await fetch(`/v1/users/?${queries}`, {
      credentials: 'include',
    });
  } else {
    res = await fetch('/v1/users/', {
      credentials: 'include',
    });
  }

  const data = await res.json();

  if (!res.ok) {
    showAlert('error', 'Please try again');
    if (data.message === 'Please authenticate') {
      setTimeout(() => {
        location.assign('/auth/login');
      }, 1500);
    }
  }

  return data.data;
};

const getUserById = async (id) => {
  const res = await fetch(`/v1/users/${id}`, {
    credentials: 'include',
  });

  const data = await res.json();

  if (!res.ok) {
    showAlert('error', 'Please try again');
    if (data.message === 'Please authenticate') {
      setTimeout(() => {
        location.assign('/auth/login');
      }, 1500);
    }
  }

  return data.data;
};

export const renderUsers = async (queries) => {
  const cardContainer = document.querySelector('.users-container');

  let users;

  if (queries) {
    users = await getUsers(queries);

    if (users.length < 1) {
      const card = document.createElement('div');
      card.classList.add('not-found');

      const notFound = document.createElement('h1');
      notFound.textContent = 'No Users Found';
      card.appendChild(notFound);

      cardContainer.appendChild(card);
      return;
    }
  } else {
    users = await getUsers();
  }

  users.forEach((user) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardCover = document.createElement('div');
    cardCover.classList.add('card-cover');

    const coverImg = document.createElement('img');
    coverImg.classList.add('card__cover-img');

    const nameHeader = document.createElement('h1');
    nameHeader.classList.add('user-name');
    nameHeader.textContent = user.name;

    if (user.name.includes(' ')) {
      user.name = user.name.split(' ').join('');
    }
    coverImg.src = `/img/users/${user.name.toLowerCase()}.jpg`;
    coverImg.alt = `${user.name} Photo`;

    const userEmail = document.createElement('p');
    userEmail.classList.add('user-email');
    userEmail.textContent = `Email : ${user.email}`;

    const userRole = document.createElement('p');
    userRole.classList.add('user-role');
    userRole.textContent = `Role : ${user.role}`;

    const userCreated = document.createElement('p');
    userCreated.classList.add('user-created');
    userCreated.textContent = `Created At : ${new Date(user.createdAt).toString()}`;

    const userFollows = document.createElement('div');
    userFollows.classList.add('user-follows');
    userFollows.textContent = `Followers : ${user.followers}
    Following : ${user.following}`;

    card.appendChild(cardCover);
    card.appendChild(nameHeader);
    card.appendChild(userEmail);
    card.appendChild(userRole);
    card.appendChild(userCreated);
    card.appendChild(userFollows);

    cardCover.appendChild(coverImg);
    cardContainer.appendChild(card);

    nameHeader.addEventListener('click', () => {
      location.assign(`/users/${user.id}`);
    });
  });
};

export const renderUser = async (id) => {
  const user = await getUserById(id);

  const cardContainer = document.querySelector('.user-container');

  const card = document.createElement('div');
  card.classList.add('card');

  const cardCover = document.createElement('div');
  cardCover.classList.add('card-cover');

  const coverImg = document.createElement('img');
  coverImg.classList.add('card__cover-img');

  if (user.name.includes(' ')) {
    user.name = user.name.split(' ').join('');
  }
  coverImg.src = `/img/users/${user.name.toLowerCase()}.jpg`;
  coverImg.alt = `${user.name} Photo`;

  const nameHeader = document.createElement('h1');
  nameHeader.classList.add('user-name');
  nameHeader.textContent = user.name;

  const userEmail = document.createElement('p');
  userEmail.classList.add('user-email');
  userEmail.textContent = `Email : ${user.email}`;

  const userCreated = document.createElement('p');
  userCreated.classList.add('user-created');
  userCreated.textContent = `Created At : ${new Date(user.createdAt).toString()}`;

  const userFollows = document.createElement('div');
  userFollows.classList.add('user-follows');
  userFollows.textContent = `Followers : ${user.followers}
  Following : ${user.following}`;

  card.appendChild(cardCover);
  card.appendChild(nameHeader);
  card.appendChild(userEmail);
  card.appendChild(userCreated);
  card.appendChild(userFollows);

  cardCover.appendChild(coverImg);
  cardContainer.appendChild(card);
};
