import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../src/assets/logo.avif'
import { AuthContext } from '../../Provider/AuthProvider';
import { FaUser } from "react-icons/fa";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
        console.log('Hello')
    }
    const navItem = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/classes">Classes</Link></li>
        <li><Link to="/instructors">Instructors</Link></li>
        <li><Link to="/dashboard">Dash Board</Link></li>
    </>
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-60 max-w-screen-xl bg-slate-800 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}

                        </ul>
                    </div>
                    <img src={logo} className='rounded-full' style={{ height: '50px' }} alt="" />

                    <Link to='/' className='btn btn-ghost  text-xl uppercase'> Sports Academies</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <><img className='rounded-full' title={user.displayName} style={{ height: '40px' }} src={user?.photoURL} alt="" /></> :
                            <>
                                <FaUser style={{ height: '40px' }}></FaUser>
                            </>
                    }
                    {
                        user ? <><button onClick={handleLogOut} className='btn btn-primary ml-6'>LogOut</button></> :
                            <> <Link to="/login"><button className='btn btn-primary ml-6'>Login</button></Link></>
                    }

                </div>
            </div>

        </div>
    );
};

export default Navbar;