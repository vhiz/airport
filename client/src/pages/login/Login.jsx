import { useContext, useReducer, useState } from "react";
import "./login.scss";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { INITIAL_STATE, loginReducer } from "../../reducers/loginreducer";
import { AuthContext } from "../../context/authContex";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [state, dispatch] = useReducer(loginReducer, INITIAL_STATE);

  const { login, loading, error } = useContext(AuthContext);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    dispatch({
      type: "LOGIN",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    login(state);
  };
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          required
        />
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            name="password"
            onChange={handleChange}
            required
          />
          <button
            type="button"
            onClick={handleTogglePassword}
            className="password-toggle"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <button type="submit">{loading ? "Loading..." : "Login"}</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
