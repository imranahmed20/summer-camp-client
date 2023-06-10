import React from 'react';

const Manage = ({ item }) => {
    const { _id, name, image, price, availableSeats, instructor } = item;
    return (
        <div className="card card-compact md:w-96 w-full bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Instructor Name: {instructor}</h2>
                <h2 className="card-title">Class Name: {name}</h2>
                <h2 className="card-title">Price: ${price}</h2>
                <h2 className="card-title">Available Seats: {availableSeats}</h2>
                <div className="flex justify-between">
                    <button className="btn btn-outline btn-primary mt-5">Approve</button>
                    <button className="btn btn-outline btn-accent mt-5">Deny</button>
                    <button className="btn btn-outline btn-secondary mt-5">send feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Manage;