import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import loginImage from '../../../src/assets/login.avif'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'
import { FaGoogle } from 'react-icons/fa';
import { saveUser } from '../../Hooks/auth.js/auth';



const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';



    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Login Successful',
                    showConfirmButton: false,
                    timer: 1500
                })

            })
            .catch(error => console.log(error))

    }

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                const user = result.user
                console.log(user)
                saveUser(result.user)
                navigate(from, { replace: true })
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Login Successful',
                    showConfirmButton: false,
                    timer: 1500
                })


            })
            .catch(error => console.log(error))

    }


    return (
        <div>
            <Helmet>
                <title>Martial Art | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left ml-8">
                        <img className='rounded-lg' src={loginImage} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <h1 className='text-center text-4xl mb-10 text-red-600 font-bold'>Login</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                {/* <button >Login</button> */}
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            <p>New to website <Link className='btn-link' to='/register'>Register</Link></p>

                            <button onClick={handleGoogleLogin} className="btn btn-outline btn-success  w-full mt-10"><FaGoogle></FaGoogle> Google Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;