import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';

const AllUser = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    })

    const handleMakeAdmin = user => {
        console.log(user)
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
    }

    return (
        <div className='w-full p-10'>
            <Helmet>
                <title>Sports Academies | Manage User</title>
            </Helmet>
            <h1 className='text-4xl text-center font-bold mb-10'>Total User: {users.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    { }
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>User Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Instructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user.photo} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>


                                <td>
                                    {
                                        user.role === "admin" ?
                                            <button className="btn btn-secondary btn-sm " disabled>Make Admin</button>

                                            :
                                            <button onClick={() => handleMakeAdmin(user)} className="btn btn-secondary btn-sm ">Make Admin</button>
                                    }
                                </td>
                                <td>
                                    <button className="btn btn-primary btn-sm">Make Instructor</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUser;