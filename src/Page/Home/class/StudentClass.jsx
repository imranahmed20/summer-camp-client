import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Provider/AuthProvider';


const StudentClass = ({ item }) => {
    const { user } = useContext(AuthContext)
    const { name, image, price, availableSeats, instructor } = item;
    const navigate = useNavigate()
    const handleAddClass = item => {
        if (user && user?.email) {
            const bookingClass = { classId: _id, name, image, email: user?.email, price }
            fetch('https://summer-camp-server-delta.vercel.app/classes', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(bookingClass)

            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User Login Successful',
                            showConfirmButton: false,
                            timer: 1500
                        })


                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login in add class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            })
        }
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
                    <button onClick={() => handleAddClass(item)} className="btn btn-primary w-full mt-5">Select Class</button>
                </div>
            </div>
        </div>
    );
};

export default StudentClass;