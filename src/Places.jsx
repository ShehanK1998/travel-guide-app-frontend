import { useEffect, useState } from "react";
import axios from "axios";

const Places = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/places")
      .then((response) => {
        setPlaces(response.data);
      })
      .catch((error) => {
        console.error("Error fetching places:", error);
      });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Available Places</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {places.length > 0 ? (
          places.map((place) => (
            <div key={place.place_id} className="bg-white shadow-lg rounded-lg p-4">
              <img
                src={place.image_url || "https://via.placeholder.com/300"}
                alt={place.name}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h3 className="text-lg font-semibold">{place.name}</h3>
              <p className="text-gray-600">{place.description}</p>
              {/* <p className="text-sm text-gray-500 mt-2">District ID: {place.district_id}</p> */}
            </div>
          ))
        ) : (
          <p>No places available.</p>
        )}
      </div>
    </div>
  );
};

export default Places;
