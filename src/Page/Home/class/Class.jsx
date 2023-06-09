import React from 'react';

const Class = ({ item }) => {
    const { name, image, price, instructor, availableSeats } = item;
    return (
        <div className="card card-compact md:w-96 w-full bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Instructor Name: {instructor}</h2>
                <h2 className="card-title">Class Name: {name}</h2>
                <h2 className="card-title">Price: ${price}</h2>
                <h2 className="card-title">Available Seats: {availableSeats}</h2>
                <div className="card-actions justify-center ">
                    <button className="btn btn-primary w-full mt-5">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Class;