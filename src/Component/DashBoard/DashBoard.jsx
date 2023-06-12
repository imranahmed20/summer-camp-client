import React, { useContext, useEffect, useState } from 'react';
import { FaHome, FaSignOutAlt } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin/useAdmin';
import { AuthContext } from '../../Provider/AuthProvider';
import { Helmet } from 'react-helmet';

// import useInstructors from '../../Hooks/useInstructor/useInstructors';


const DashBoard = () => {
    const { logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const [adminRole] = useAdmin()
    return (
        <div>
            <Helmet>
                <title>Sports Academies | DashBoard</title>
            </Helmet>
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
                                    <li className='font-bold'> <Link to='/'><FaHome></FaHome>Home</Link></li>
                                    <li className='font-bold'><Link className='mb-5 mt-5' to='/dashboard/allUsers'>Manage Users</Link></li>
                                    <li className='font-bold'><Link to='/dashboard/manageClass'>Manage Classes</Link></li>
                                    <li className='font-bold mt-5'><button onClick={handleLogOut} className='font-bold flex  items-center'> <FaSignOutAlt></FaSignOutAlt>LogOut</button></li>

                                </>

                                :
                                <>
                                    {
                                        adminRole === 'instructor' ?

                                            <>
                                                <li className='font-bold'> <Link to='/'> <FaHome></FaHome>Home</Link></li>
                                                <li className='font-bold'><Link className='mb-5 mt-5' to='/dashboard/addClass'>Add a Class</Link></li>
                                                <li className='font-bold'><Link to='/dashboard/manage'>My Classes</Link></li>
                                                <li className='font-bold mt-5'><button onClick={handleLogOut} className='font-bold flex items-center'> <FaSignOutAlt></FaSignOutAlt>LogOut</button></li>


                                            </>

                                            :
                                            <>
                                                {
                                                    adminRole === 'student' ?
                                                        <>
                                                            <li className='font-bold'> <Link to='/'> <FaHome></FaHome> Student</Link></li>
                                                            <li className='font-bold'><Link className='mb-5 mt-5' to='/dashboard/myclass'>My Selected Classes</Link></li>
                                                            <li className='font-bold'><Link to='/dashboard/enrollClass'>My Enrolled Classes</Link></li>
                                                            <li className='font-bold mt-5'><button onClick={handleLogOut} className='font-bold flex items-center'> <FaSignOutAlt></FaSignOutAlt>LogOut</button></li>
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
        </div>


    );
};

export default DashBoard;