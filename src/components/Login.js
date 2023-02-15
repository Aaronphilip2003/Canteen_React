import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import mitLogo from "../images/mitLogo.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.post("http://localhost:8080/verify", {
      username,
      password,
    });

    // setMessage(response.data);
    // console.log(response.data);

    if (response.data === "Login Successful") {
      setMessage("success");
      navigate("/main");
    }
  };

  return (
    <div>
      <img
        src={mitLogo}
        alt="MIT Logo"
        className="image"
        width="870px"
        height="300px"
      />
      <h2 className="header">Canteen Management System</h2>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        {message && <div>{message}</div>}

        <div>
          <a href="/register">Register</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
