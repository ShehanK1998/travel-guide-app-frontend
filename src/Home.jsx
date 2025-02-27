import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate(); 

  return (
    <div className="container mt-5">
      <div className="card shadow-sm mx-auto" style={{ maxWidth: "600px" }}>
        <div className="card-body text-center">
          <h1 className="card-title mb-4">Welcome to My App</h1>
          <p className="card-text lead mb-4">
            This is the home page of the application. You can navigate to the
            dashboard to view more features and manage users.
          </p>
          <button
            className="btn btn-primary btn-lg"
            onClick={() => navigate("/dashboard")}
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;