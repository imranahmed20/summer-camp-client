import React from 'react';
import { Link } from 'react-router-dom';

const Instructor = ({ item }) => {
    const { _id, name, image, email, numberOfClass } = item;


    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Instructor Name: {name}</h2>
                <h2 className="card-title">Email: {email}</h2>
                <h2 className="card-title">Available Seats: {numberOfClass}</h2>
                <div className="card-actions justify-end">
                    <Link to={`/class/${_id}`} className='w-full' > <button className="btn btn-primary w-full mt-5">See classes</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Instructor;