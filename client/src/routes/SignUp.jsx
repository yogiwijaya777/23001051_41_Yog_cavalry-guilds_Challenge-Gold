import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useAuth } from '../contexts/AuthContext';
import Spinner from '../components/Spinner';

const SignUp = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
    error: '',
    name: '',
  });
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, {
        name: data.name,
        email: data.email,
        password: data.password,
      });
      if (response.status === 201) {
        login(response.data.data.userCreated, response.data.data.tokens);
        Swal.fire('Account created !');
        window.setTimeout(() => {
          navigate('/top-decks');
        }, 200);
      } else {
        setData({
          error: 'Something went wrong!',
        });
      }
    } catch (error) {
      setData({
        ...data,
        error: error.response.data.message,
      });
    }

    setIsLoading(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  return (
    <section className="auth-wrapper">
      <section className="auth">
        <article className="title text-black mb-3">
          <h1>Signup</h1>
        </article>

        <form className="form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Enter your name" onChange={handleChange} />
          <input type="text" name="email" placeholder="Enter your email" onChange={handleChange} />
          <input type="password" placeholder="Create a password" name="password" onChange={handleChange} />

          {isLoading ? <Spinner /> : <button className="btn-auth">Signup</button>}
          <article className="link-artikel">
            <p className="text-black">
              Already have an account?
              <a href="/login" className="link-auth">
                &nbsp; Login
              </a>
            </p>
          </article>
        </form>
      </section>
    </section>
  );
};

export default SignUp;
