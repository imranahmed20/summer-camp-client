import React, { useEffect, useState } from 'react';
import Class from '../../class/Class';
import useInstructor from '../../../../Hooks/useInstructor';

const PopularInstructor = () => {
    const [instructor, setInstructors] = useState([])
    useEffect(() => {
        fetch('instructor.json')
            .then(res => res.json())
            .then(data => {
                const footballs = data.filter(data => data.category === "footboll")
                setInstructors(footballs)
            })
    }, [])
    return (
        <div>
            <h1 className='text-center text-5xl font-bold uppercase mt-20'> Popular Instructor</h1>
            <p className='text-xl text-center mt-4'>A group of people sharing the same social, economic, or occupational status. The term class usually implies a social and economic hierarchy, in which those of higher class standing have greater status, privilege, prestige, and authority.</p>
            <div className='grid md:grid-cols-3 mt-20 gap-6'>
                {
                    instructor.map(item => <Class key={item._id} item={item}></Class>)
                }
            </div>
        </div>
    );
};

export default PopularInstructor;