import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Restaurants = () => {
    const[restaurants, setRestaurants] =useState([]);
    
    useEffect(()=>{
        axios
            .get("http://localhost:8080/api/restaurants")
            .then((response) =>{
                setRestaurants(response.data);
            })
            .catch((error)=>{
                console.error("Error fetching restaurants:", error)
            });
    },[]);

  return (
    <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Available Restaurants</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
           {restaurants.length > 0 ?(
            restaurants.map((restaurant)=>(
                <div key={restaurant.restaurant_id} className='bg-white shadow-lg rounded-lg p-4'>
                    <img
                        src={restaurant.image_url || "https://via.placeholder.com/300"}
                        alt={restaurant.name}
                        className="w-full h-40 object-cover rounded-md mb-3"
                    />
                    <h3 className="text-lg font-semibold">{restaurant.name}</h3>
                    <p className="text-gray-600">{restaurant.cuisineType}</p>
                    <p className="text-gray-600">{restaurant.contactInfo}</p>
                </div>
            ))
           ):(
            <p>No restaurants available</p>
           )} 
        </div>
    </div>
  );
};

export default Restaurants;