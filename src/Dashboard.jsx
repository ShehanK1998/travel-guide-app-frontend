import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="container mt-5">
      <div className="text-center">
        <h2 className="mb-4">Dashboard</h2>
        <button
          className="btn btn-primary btn-lg m-2"
          onClick={() => navigate("/users")}
        >
          Users
        </button>
        <button
          className="btn btn-primary btn-lg"
          onClick={() => navigate("/add-place")}
        >
          Places
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
