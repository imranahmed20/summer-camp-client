import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { saveUser } from '../../Hooks/auth.js/auth';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                saveUser(result.user)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Login Successful',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))

    }

    return (
        <div className='mb-8'>
            <div className="divider "></div>
            <button onClick={handleGoogleLogin} className="btn btn-outline btn-success w-3/4 ml-10 mt-5"><FaGoogle></FaGoogle> Google Login</button>
        </div>
    );
};

export default SocialLogin;