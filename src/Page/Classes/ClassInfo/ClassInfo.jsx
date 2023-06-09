import React from 'react';

const ClassInfo = ({ item }) => {
    console.log(item)
    const { name, image, price } = item;
    const handleAddClass = item => {
        console.log(item)
    }
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h2 className="card-title">{price}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddClass(item)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ClassInfo;