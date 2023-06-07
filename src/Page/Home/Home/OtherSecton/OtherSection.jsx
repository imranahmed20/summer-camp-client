import React from 'react';

import others from '../../../../assets/otherSectoin.jpg'

const OtherSection = () => {
    return (
        <div className='grid md:grid-cols-2 mt-36'>
            <div>
                <h1 className='uppercase text-5xl'>WORLD CLASS COACHING</h1>
                <p>Setting the standard in an unmatched environment</p>
                <p>IMG coaches aren't just experts of the game. They've been in your shoes and have guided youth athletes throughout each step of the process, including in high school, to college and even at the professional levels.</p>
                <button>Reserve Your Spot</button>
            </div>
            <div>
                <img src={others} alt="" />
            </div>
        </div>
    );
};

export default OtherSection;