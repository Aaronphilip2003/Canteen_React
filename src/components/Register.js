import React, { useState } from "react";
import axios from "axios";
import "../styles/Login.css";

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
  );
};

export default Register;
