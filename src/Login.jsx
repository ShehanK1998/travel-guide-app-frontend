import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/login", credentials);
      alert("Login successful!"); 
      console.log(response.data); 
    } catch (error) {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email:</label>
          <input type="email" name="email" className="form-control" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Password:</label>
          <input type="password" name="password" className="form-control" onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-success">Login</button>
      </form>
    </div>
  );
}

export default Login;
