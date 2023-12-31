import React from 'react';
import useBooking from '../../Hooks/useBooking/useBooking';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';

const MyClass = () => {
    const [booking, refetch] = useBooking()
    const total = booking.reduce((sum, book) => book.price + sum, 0)
    const navigate = useNavigate()

    const handleDelete = book => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://summer-camp-server-delta.vercel.app/classes/${book._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }


    return (
        <div className='w-full'>
            <Helmet
            >
                <title>Sports Academies | My Class</title>
            </Helmet>

            <div className='mt-20'>
                <div className='uppercase flex justify-evenly'>
                    <h2 className='text-3xl font-bold'>Total Added: {booking.length}</h2>
                    <h2 className='text-3xl font-bold'>Total Price: ${total}</h2>
                </div>
                <div className="overflow-x-auto mt-10">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Pay Button</th>
                                <th>Delete Button</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                booking.map((book, index) => <tr key={book._id}  >
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={book.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {book.name}
                                    </td>
                                    <td>
                                        <Link to='/dashboard/payment'> <button className="btn btn-accent btn-sm">Pay</button></Link>

                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(book)} className="btn btn-secondary btn-sm">Delete</button>
                                    </td>
                                </tr>)
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyClass;