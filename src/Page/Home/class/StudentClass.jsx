import React from 'react';

const StudentClass = ({ item }) => {
    const { name, image, price, availableSeats, instructor } = item;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">A
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Instructor Name: {instructor}</h2>
                <h2 className="card-title">Class Name: {name}</h2>
                <h2 className="card-title">Price: ${price}</h2>
                <h2 className="card-title">Available Seats: {availableSeats}</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary w-full mt-5">Select Class</button>
                </div>
            </div>
        </div>
    );
};

export default StudentClass;