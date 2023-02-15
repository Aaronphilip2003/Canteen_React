import React, { useState } from "react";
import axios from "axios";
import "../styles/Login.css";
import mitLogo from "../images/mitLogo.png";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.post("http://localhost:8080/register", {
      username,
      password,
    });

    setMessage(response.data);
    console.log(response.data);
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
          <button type="submit">Register</button>
        </form>
        {message && <div>{message}</div>}

        <div>
          <a href="/">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Register;
