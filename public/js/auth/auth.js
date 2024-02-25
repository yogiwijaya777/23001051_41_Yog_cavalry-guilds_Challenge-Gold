export const register = async (name, email, password) => {
  const res = await fetch('/v1/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  });

  const data = await res.json();

  if (data.message === 'Register Success') {
    alert('Registered ');
    window.setTimeout(() => {
      location.assign('/');
    }, 1500);
  } else {
    alert(data.message);
  }
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

  if (data.message === 'Login Success') {
    alert('Login Success');
    window.setTimeout(() => {
      location.assign('/');
    }, 1500);
  } else {
    alert(data.message);
  }
};
