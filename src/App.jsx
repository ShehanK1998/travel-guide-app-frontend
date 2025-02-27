import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import UsersList from "./UserList";
import Dashboard from "./Dashboard";
import Home from "./Home";
import AddPlace from "./AddPlace";
import Places from "./Places";

function App() {
  return (
    <div className="container mt-2">
      <nav>
        <Link to="/register" className="btn btn-primary me-2">Register</Link>
        <Link to="/" className="btn btn-success me-2">Login</Link>
        <Link to="/dashboard" className="btn btn-warning">Dashboard</Link>

      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<UsersList />}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/add-place" element={<AddPlace />} />
        <Route path="/places" element={<Places />} />
      </Routes>
    </div>
  );
}

export default App;
