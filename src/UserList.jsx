import { useEffect, useState } from "react";
import axios from "axios";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

    // Function to delete a user
    const handleDelete = async (userId) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
          try {
            await axios.delete(`http://localhost:8080/api/users/${userId}`); // DELETE request
            setUsers(users.filter((user) => user.userId !== userId)); // Remove user from UI
          } catch (error) {
            console.error("Error deleting user:", error);
          }
        }
      };

  return (
<div>
  <h2 className="mb-4">Users List</h2>
  <div className="row">
    {users.map((user) => (
      <div key={user.userId} className="col-md-4 mb-4">
        <div className="card h-100 shadow-sm">
          <div className="card-body">
            <div className="mb-2">
              <strong>ID:</strong> {user.userId}
            </div>
            <div className="mb-2">
              <strong>Username:</strong> {user.username}
            </div>
            <div>
              <strong>Email:</strong> {user.email}
            </div>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDelete(user.userId)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
  );
};

export default UsersList;
