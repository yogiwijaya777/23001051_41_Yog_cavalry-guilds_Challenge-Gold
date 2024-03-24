import { useState } from "react";
import "../css/Login.css";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import Spinner from "../components/Spinner";
import instance from "../utils/axios/instance";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    error: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await instance.post(`/auth/login`, {
        email: data.email,
        password: data.password,
      });
      if (response.status === 200) {
        setData({ message: response.data.message });
        login(response.data.data.user, response.data.data.tokens);
        setTimeout(() => {
          navigate("/top-decks");
        }, 200);
      } else {
        setData({
          error: "Invalid Email or Password!",
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
    <div className="auth-wrapper">
      <div className="auth">
        <article className="title text-black mb-3">
          <h1>Login</h1>
        </article>

        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your email"
            name="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            onChange={handleChange}
          />
          <div className="error-message">
            {data.error && <p className="error">{data.error}</p>}
            {data.message && <p className="message">{data.message}</p>}

            <a href="/" className="link-auth">
              Forgot Password?
            </a>
          </div>
          {isLoading ? (
            <Spinner />
          ) : (
            <button className="btn-auth">Login</button>
          )}
          <article className="link-artikel">
            <p className="text-black">
              Dont have an account?{" "}
              <a href="/signup" className="link-auth">
                &nbsp; Signup
              </a>
            </p>
          </article>
        </form>
      </div>
    </div>
  );
};

export default Login;
