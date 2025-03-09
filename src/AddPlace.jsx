import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPlace = () => {
  const [place, setPlace] = useState({
    name: "",
    description: "",
    imageUrl: "",
    districtId: "",
  });

  const handleChange = (e) => {
    setPlace({ ...place, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/places", place);
      alert("Place added successfully!");
      setPlace({ name: "", description: "", imageUrl: "", districtId: "" }); // Reset form
    } catch (error) {
      console.error("Error adding place:", error);
      alert("Failed to add place.");
    }
  };
  const navigate = useNavigate();

  return (
<div className="container mt-5">
  <h2 className="mb-4">Add a New Place</h2>
  <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
    <div className="mb-3">
      <input
        type="text"
        name="name"
        placeholder="Place Name"
        value={place.name}
        onChange={handleChange}
        className="form-control"
        required
      />
    </div>
    <div className="mb-3">
      <textarea
        name="description"
        placeholder="Description"
        value={place.description}
        onChange={handleChange}
        className="form-control"
        rows="4"
        required
      />
    </div>
    <div className="mb-3">
      <input
        type="text"
        name="imageUrl"
        placeholder="Image URL"
        value={place.imageUrl}
        onChange={handleChange}
        className="form-control"
      />
    </div>
    <div className="mb-3">
      <input
        type="number"
        name="districtId"
        placeholder="District ID"
        value={place.districtId}
        onChange={handleChange}
        className="form-control"
        required
      />
    </div>
    <button type="submit" className="btn btn-primary w-100">
      Add Place
    </button>
  </form>
  <div>
    <button
        className="btn btn-primary btn-lg m-2"
          onClick={() => navigate("/places")}
        >
        View Places
    </button>
  </div>
</div>
  );
};

export default AddPlace;
