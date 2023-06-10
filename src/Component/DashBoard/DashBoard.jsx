import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin/useAdmin';
// import useInstructor from '../../Hooks/useInstructor';

const DashBoard = () => {
    const [isAdmin] = useAdmin()

    // const [isInstructor] = useInstructor()
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
                    {/* Sidebar content here */}


                    {
                        isAdmin ?

                            <>
                                <li> <Link to='/'> <FaHome></FaHome> Home</Link></li>
                                <li><Link className='mb-5 mt-5' to='/dashboard/addClass'>Add a Class</Link></li>
                                <li><Link to='/dashboard/addClass'>My Classes</Link></li>
                            </>

                            :
                            <>
                                <li> <Link to='/'> <FaHome></FaHome>User Home</Link></li>
                                <li><Link className='mb-5 mt-5' to='/dashboard/allUsers'>Manage Users</Link></li>
                                <li><Link to='/dashboard/manageClass'>Manage Classes</Link></li>
                            </>
                    }

                </ul>

            </div>
        </div>

    );
};

export default DashBoard;