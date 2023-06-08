import React from 'react';

import others from '../../../../assets/otherSectoin.jpg'

const OtherSection = () => {
    return (
        <div className='grid md:grid-cols-2 gap-4 mt-36 mb-10'>
            <div className=''>
                <h1 className='uppercase text-6xl font-bold mb-5 mt-4'>WORLD CLASS Instructor</h1>
                <p className='text-xl'>Setting the standard in an unmatched environment</p>
                <p className='text-xl'>IMG coaches aren't just experts of the game. They've been in your shoes and have guided youth athletes throughout each step of the process, including in high school, to college and even at the professional levels.</p>
                <button className='btn btn-primary mt-8 font-bold'>Reserve Your Spot</button>
            </div>
            <div>
                <img className='rounded-lg' src={others} alt="" />
            </div>
        </div>
    );
};

export default OtherSection;