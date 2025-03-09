import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddRestaurant = () => {
    const[restaurant, setRestaurant]= useState({
        name:"",
        cuisineType:"",
        contactInfo:"",
        districtId:"",
        imageUrl:"",
    });

    const handleChange = (e) =>{
        setRestaurant({...restaurant, [e.target.name]:e.target.value});
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/api/restaurants", restaurant);
            alert("Restaurant added succeseefully!");
            setRestaurant({name:"", cuisineType:"", contactInfo:"", districtId:"",imageUrl:""});
        } catch (error) {
            console.error("Error adding place:",error);
            alert("Failed to add place.");            
        }
    };
    const navigate = useNavigate();

  return (
    <div className="container mt-5">
        <h2 className="mb-4">Add a New Restaurnat</h2>
        <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
            <div className="mb-3">
                <input
                    type='text'
                    name='name'
                    placeholder='Restaurant Name'
                    value={restaurant.name}
                    onChange={handleChange}
                    className='form-control'
                    required
                />
            </div>
            <div className="mb-3">
                <input
                    type='text'
                    name='cuisineType'
                    placeholder='Cuisine Type'
                    value={restaurant.cuisineType}
                    onChange={handleChange}
                    className='form-control'
                    required
                />
            </div>
            <div className="mb-3">
                <input
                    type='text'
                    name='contactInfo'
                    placeholder='Contact Information'
                    value={restaurant.contactInfo}
                    onChange={handleChange}
                    className='form-control'
                    required
                />
            </div>
            <div className="mb-3">
                <input
                    type='number'
                    name='districtId'
                    placeholder='District Id'
                    value={restaurant.districtId}
                    onChange={handleChange}
                    className='form-control'
                    required
                />
            </div>
            <div className="mb-3">
                <input
                    type='text'
                    name='imageUrl'
                    placeholder='Image URL'
                    value={restaurant.imageUrl}
                    onChange={handleChange}
                    className='form-control'
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary w-100">
                Add Restaurant
            </button>
        </form>
        <div>
        <button className="btn btn-primary btn-lg m-2"
                onClick={()=> navigate("/restaurants")}
            >
                View Restaurants
            </button>
        </div>
    </div>
  )
}

export default AddRestaurant;