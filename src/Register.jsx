import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    passwordHash: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/users", user);
      alert("User registered successfully!");
    } catch (error) {
      alert("Error registering user!");
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Username:</label>
          <input type="text" name="username" className="form-control" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Email:</label>
          <input type="email" name="email" className="form-control" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Password:</label>
          <input type="password" name="passwordHash" className="form-control" onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}

export default Register;
