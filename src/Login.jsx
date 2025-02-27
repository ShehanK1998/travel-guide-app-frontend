import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [passwordHash, setPasswordHash] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const response = await axios.post("http://localhost:8080/api/users/login", {
        username,
        passwordHash,
      });

      if (response.data === "admin") {
        navigate("/dashboard"); // Redirect to dashboard for admin
      } else if (response.data === "user") {
        navigate("/home"); // Redirect to Home.jsx for regular users
      }
    } catch (err) {
      setError("Invalid username or password"); // Show error message
      console.log(err);
      
    }
  };

  return (
    <div className="container mt-5">
  <div className="card shadow-sm mx-auto" style={{ maxWidth: "400px" }}>
    <div className="card-body">
      <h2 className="card-title text-center mb-4">Login</h2>
      {error && <p className="text-danger text-center mb-3">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label className="form-label">Username:</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            value={passwordHash}
            onChange={(e) => setPasswordHash(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
  </div>
</div>
  );
};

export default Login;
