import React, { useEffect, useState } from 'react';
import Instructor from './Instructors/Instructor';
import Cover from './cover/Cover';

const Instructors = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/class')
            .then(res => res.json())
            .then(data => {
                setInstructors(data)
            })
    }, [])
    return (
        <div>
            <Cover></Cover>
            <div className='grid md:grid-cols-3 gap-6 mt-8'>
                {
                    instructors.map(item => <Instructor item={item} key={item._id}></Instructor>)
                }

            </div>

        </div>
    );
};

export default Instructors;