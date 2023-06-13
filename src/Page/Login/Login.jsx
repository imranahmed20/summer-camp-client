import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import loginImage from '../../../src/assets/login.avif'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'
import { saveUser } from '../../Hooks/auth.js/auth';
import SocialLogin from '../../Share/SocialLogin/SocialLogin';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { useForm } from 'react-hook-form';


const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [error, setError] = useState('')

    const from = location.state?.from?.pathname || '/';

    const [passwordEye, setPasswordEye] = useState(false)

    const handlePasswordClick = () => {
        setPasswordEye(!passwordEye)
    }

    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true })
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Login Successful',
                    showConfirmButton: false,
                    timer: 1500
                })

            })
            .catch(error => setError(error))
    };


    return (
        <div className='mb-8'>
            <Helmet>
                <title>Sports Academies | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left ml-8">
                        <img className='rounded-lg mt-16' src={loginImage} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-20">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h1 className='text-center text-4xl  text-red-600 font-bold'>Login</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={(passwordEye === false) ? 'password' : 'text'}  {...register("password", { required: true })} placeholder="password" className="input input-bordered" required />
                                <p className='text-red-500 mt-4'> {error.message}</p>
                                <div className='text-2xl absolute top-12 right-5'>
                                    {
                                        (passwordEye === false) ? <AiFillEyeInvisible onClick={handlePasswordClick} /> : <AiFillEye onClick={handlePasswordClick} />
                                    }



                                </div>
                            </div>
                            <div className="form-control mt-6">
                                {/* <button >Login</button> */}
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center'>New to website <Link className='btn-link' to='/register'>Register</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;