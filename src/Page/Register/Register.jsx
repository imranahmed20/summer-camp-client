import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import loginImage from '../../../src/assets/login.avif'
import { AuthContext } from '../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { saveUser } from '../../Hooks/auth.js/auth';
import SocialLogin from '../../Share/SocialLogin/SocialLogin';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';


const Register = () => {
    const { register, handleSubmit, reset, watch, formState: { errors }, getValues } = useForm({
        mode: 'onTouched'
    });
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()

    // PASSWORD
    const [passwordEye, setPasswordEye] = useState(false)

    const handlePasswordClick = () => {
        setPasswordEye(!passwordEye)
    }
    // CONFIRM PASSWORD
    const [confirmPasswordEye, setConfirmPasswordEye] = useState(false)

    const handleConfirmPasswordClick = () => {
        setConfirmPasswordEye(!confirmPasswordEye)
    }

    // check password
    const password = watch('password')

    const onSubmit = data => {

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        saveUser(result.user)
                        navigate('/')
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User Register Successful, Please Login',
                            showConfirmButton: false,
                            timer: 1500
                        })


                    })
                    .catch(error => console.log(error))
            })
            .catch(error => console.log(error))

    };

    return (
        <div className='mb-10'>
            <Helmet>
                <title>Sports Academies | Register</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="ml-10">
                        <img className='rounded-lg' style={{ height: '750px' }} src={loginImage} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-20">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h1 className='text-center text-4xl mb-5 text-red-600 font-bold'>Create an account</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className='text-red-600'>Name field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="Email" className="input input-bordered" />
                                {errors.email && <span className='text-red-600'>Email field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" {...register("photo", { required: true })} placeholder="PhotoUrl" className="input input-bordered" />
                                {errors.photo && <span className='text-red-600'>PhotoUrl field is required</span>}
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={(passwordEye === false) ? 'password' : 'text'} {...register("password", {
                                    required: true, minLength: 6,
                                    pattern: /(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <span className='text-red-600'>Password field is required</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-600'>Password must be 6 characters</span>}
                                {errors.password?.type === 'pattern' && <span className='text-red-600'>Password must have one uppercase , one lower case, one special characters</span>}
                                <div className='text-2xl absolute top-12 right-5'>
                                    {
                                        (passwordEye === false) ? <AiFillEyeInvisible onClick={handlePasswordClick} /> : <AiFillEye onClick={handlePasswordClick} />
                                    }
                                </div>
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type={(confirmPasswordEye === false) ? 'password' : 'text'} placeholder="ConfirmPassword"
                                    onPaste={(e) => {
                                        e.preventDefault()
                                        return false;
                                    }}
                                    {...register("confirmPassword", {
                                        required: true,
                                        validate: (value) =>
                                            value === password || "The password did not match",
                                    })} className="input input-bordered" />
                                {errors.confirmPassword && <span className='text-red-600'>{errors.confirmPassword.message}</span>}
                                <div className='text-2xl absolute top-12 right-5'>
                                    {
                                        (confirmPasswordEye === false) ? <AiFillEyeInvisible onClick={handleConfirmPasswordClick} /> : <AiFillEye onClick={handleConfirmPasswordClick} />
                                    }



                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Register" />
                            </div>
                        </form>
                        <p className='text-center'>Already have an account <Link className='btn-link' to='/login'>Login</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;