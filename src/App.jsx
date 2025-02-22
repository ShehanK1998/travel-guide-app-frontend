import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";

function App() {
  return (
    <div className="container mt-3">
      <nav>
        <Link to="/register" className="btn btn-primary me-2">Register</Link>
        <Link to="/login" className="btn btn-success">Login</Link>
      </nav>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
