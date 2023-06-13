import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';

const AllUser = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch(' https://summer-camp-server-delta.vercel.app/users')
        return res.json()
    })

    const handleMakeAdmin = user => {
        fetch(` https://summer-camp-server-delta.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user?.name} is an admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
    }
    const handleMakeInstructor = user => {
        fetch(` https://summer-camp-server-delta.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user?.name} is an instructor now`,
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
                            <th>Role</th>
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
                                <td>{user.role}</td>


                                <td>
                                    {
                                        user.role === "admin" ?
                                            <button className="btn btn-secondary btn-xs " disabled> Admin</button>

                                            :
                                            <button onClick={() => handleMakeAdmin(user)} className="btn btn-secondary btn-xs"> Admin</button>
                                    }
                                </td>
                                <td>
                                    {
                                        user.role === 'instructor' ?
                                            <>
                                                <button className="btn btn-primary btn-xs " disabled> Instructor</button>
                                            </> :
                                            <> <button onClick={() => handleMakeInstructor(user)} className="btn btn-primary btn-xs"> Instructor</button>
                                            </>
                                    }
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