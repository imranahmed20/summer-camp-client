import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../../../src/assets/error.avif'

const Error = () => {
    return (
        <div className='text-center '>
            <img className='mx-auto mt-4 my-6 rounded-lg' src={errorImg} alt="" />
            <h1 className='text-3xl my-4'>Page Not Found</h1>
            <Link to="/"><button className='btn btn-secondary'>Go to Home</button></Link>

        </div>
    );
};

export default Error;