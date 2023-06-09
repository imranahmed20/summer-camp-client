import React from 'react';
import useBooking from '../../Hooks/useBooking/useBooking';

const MyClass = () => {
    const [booking] = useBooking()
    const total = booking.reduce((sum, item) => item.price + sum, 0)
    return (
        <div className='mt-20'>
            <div className='uppercase flex justify-evenly'>
                <h2>Total Added: {booking.length}</h2>
                <h2>Total Price: ${total}</h2>
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
                                    <button className="btn btn-accent btn-sm">Pay</button>
                                </td>
                                <td>
                                    <button className="btn btn-secondary btn-sm">Delete</button>
                                </td>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyClass;