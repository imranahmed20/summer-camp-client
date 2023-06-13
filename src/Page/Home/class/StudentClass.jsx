import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAdmin from '../../../Hooks/useAdmin/useAdmin';

const StudentClass = ({ item }) => {
    const { name, image, price, availableSeats, instructor } = item;
    const [adminRole] = useAdmin()
    const navigate = useNavigate()
    const handleSeeClass = () => {
        navigate('/classes')

    }
    return (
        <div className="card card-compact md:w-96 w-full bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Instructor Name: {instructor}</h2>
                <h2 className="card-title">Class Name: {name}</h2>
                <h2 className="card-title">Price: ${price}</h2>
                <h2 className="card-title">Available Seats: {availableSeats}</h2>
                <div className="card-actions justify-end">
                    {
                        adminRole === "student" ? <> <button onClick={handleSeeClass} className="btn btn-primary w-full mt-5">Select Class</button></> : <> <button onClick={handleSeeClass} className="btn btn-primary w-full mt-5" disabled>Select Class</button></>
                    }
                </div>
            </div>
        </div>
    );
};

export default StudentClass;