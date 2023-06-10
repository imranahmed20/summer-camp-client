import React from 'react';

const Class = ({ item }) => {
    const { name, image, email, numberOfClass } = item;
  
    return (
        <div className="card card-compact md:w-96 w-full bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Instructor Name: {name}</h2>
                <h2 className="card-title">Email: {email}</h2>
                <h2 className="card-title">Available Seats: {numberOfClass}</h2>
                <div className="card-actions justify-center ">
                    <button  className="btn btn-primary w-full mt-5">See Classes</button>
                </div>
            </div>
        </div>
    );
};

export default Class;