import React from 'react';

const Instructor = ({ item }) => {
    console.log(item)
    const { name, image, price, email, numberOfClass } = item;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Instructor Name: {name}</h2>
                <h2 className="card-title">Instructor email: {email}</h2>
                <h2 className="card-title">Available Seats: {numberOfClass}</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary w-full mt-5">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Instructor;