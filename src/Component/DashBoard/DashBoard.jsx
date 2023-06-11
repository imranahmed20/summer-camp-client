import React, { useContext, useEffect, useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin/useAdmin';
import { AuthContext } from '../../Provider/AuthProvider';

// import useInstructors from '../../Hooks/useInstructor/useInstructors';


const DashBoard = () => {
    const { user } = useContext(AuthContext)

    const [adminRole] = useAdmin()
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">


                    {
                        adminRole === 'admin' ?

                            <>
                                <li> <Link to='/'> <FaHome></FaHome>Admin</Link></li>
                                <li><Link className='mb-5 mt-5' to='/dashboard/allUsers'>Manage Users</Link></li>
                                <li><Link to='/dashboard/manageClass'>Manage Classes</Link></li>


                            </>

                            :
                            <>
                                {
                                    adminRole === 'instructor' ?

                                        <>
                                            <li> <Link to='/'> <FaHome></FaHome> Instructor</Link></li>
                                            <li><Link className='mb-5 mt-5' to='/dashboard/addClass'>Add a Class</Link></li>
                                            <li><Link to='/dashboard/manageClass'>Manage Classes</Link></li>

                                        </>

                                        :
                                        <>
                                            {
                                                adminRole === undefined ?
                                                    <>
                                                        <li> <Link to='/'> <FaHome></FaHome> Student</Link></li>
                                                        <li><Link className='mb-5 mt-5' to='/dashboard/myclass'>Add a Class</Link></li>
                                                        <li><Link to='/dashboard/addClass'>My Classes</Link></li>
                                                    </>
                                                    :
                                                    <></>
                                            }



                                        </>
                                }

                            </>
                    }

                </ul>

            </div>
        </div>

    );
};

export default DashBoard;