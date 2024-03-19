import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { login } = useAuth();

  const navigate = useNavigate();
  const handlerSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return alert('Please enter email and password');
    }
    try {
      setIsLoading(true);
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, {
        email,
        password,
      });

      if (response.data.data) {
        login(response.data.data.user, response.data.data.tokens);
        setIsSuccess(true);

        setTimeout(() => {
          navigate('/top-decks');
        }, 2000);
      }
    } catch (error) {
      setError(error.response);
    }

    setIsLoading(false);
  };

  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handlerSubmit}>
          Submit
        </button>{' '}
        {isLoading && <Loading />}
        {error && <Error> {error.data.message}</Error>}
        {isSuccess && <Alert variant="success">Login successful</Alert>}
      </form>
    </div>
  );
}

export default Login;
