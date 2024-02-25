import { register, login, logout } from './auth/auth.js';

const registerForm = document.querySelector('.form--register');
const loginForm = document.querySelector('.form--login');
const logoutButton = document.querySelector('.nav__el--logout');

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
