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
    return alert(data.message);
  }

  alert('Register Success');
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
    return alert(data.message);
  }

  alert('Login Success');
  window.setTimeout(() => {
    location.assign('/');
  }, 1500);
};
