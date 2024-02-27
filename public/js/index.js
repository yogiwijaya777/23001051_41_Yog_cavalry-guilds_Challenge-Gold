import { register, login, logout } from './auth.js';
import { renderArchetype, renderArchetypes } from './archetypes.js';

// Utils
function createUuidRegex(keyword) {
  const regexString = `\\/${keyword}\\/([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})`;
  return new RegExp(regexString);
}
// DOM TRIGGER
const registerForm = document.querySelector('.form--register');
const loginForm = document.querySelector('.form--login');
const logoutButton = document.querySelector('.nav__el--logout');
const archetypesRoute = location.pathname.startsWith('/archetypes');
const isArchetypeByIdRoute = location.pathname.match(createUuidRegex('archetypes'));

if (registerForm) {
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    register(name, email, password);
  });
}

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    login(email, password);
  });
}

if (logoutButton) logoutButton.addEventListener('click', logout);

if (archetypesRoute) {
  const urlParams = new URLSearchParams(window.location.search);
  const queries = urlParams.toString();

  console.log(archetypesRoute);

  let archetypes;
  if (queries) {
    archetypes = renderArchetypes(queries);
  } else {
    archetypes = renderArchetypes();
  }

  document.addEventListener('load', archetypes);
}

if (isArchetypeByIdRoute) {
  const archetypeId = isArchetypeByIdRoute[1];

  document.addEventListener('load', renderArchetype(archetypeId));
}
