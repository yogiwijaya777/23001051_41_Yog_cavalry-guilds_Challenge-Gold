import { showAlert } from './alert';

export const register = async (name, email, password) => {
  const res = await fetch('/v1/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  });
  const data = await res.json();

  if (data.message !== 'Register Success') {
    return showAlert('danger', data.message);
  }

  localStorage.setItem('user', JSON.stringify(data.data.userCreated));

  showAlert('success', 'Register Success');
  window.setTimeout(() => {
    location.assign('/');
  }, 1500);
};

export const login = async (email, password) => {
  const res = await fetch('/v1/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();

  if (data.message !== 'Login Success') {
    return showAlert('dangers', data.message);
  }

  localStorage.setItem('user', JSON.stringify(data.data.user));

  showAlert('success', 'Login Success');
  window.setTimeout(() => {
    location.assign('/');
  }, 1500);
};

export const logout = async () => {
  const res = await fetch('/v1/auth/logout');

  if (!res.ok) {
    return showAlert('danger', 'Please try again');
  }

  localStorage.removeItem('user');

  showAlert('success', 'Logout Success');
  location.reload(true);
};
