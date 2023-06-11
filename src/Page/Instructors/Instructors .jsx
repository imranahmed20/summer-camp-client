import React, { useEffect, useState } from 'react';
import Instructor from './Instructors/Instructor';
import Cover from './cover/Cover';
import { Helmet } from 'react-helmet';

const Instructors = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch(' https://summer-camp-server-delta.vercel.app/class')
            .then(res => res.json())
            .then(data => {
                setInstructors(data)
            })
    }, [])

    return (
        <div>
            <Helmet>
                <title>Sports Academies | Instructors</title>
            </Helmet>
            <Cover></Cover>
            <div className='grid md:grid-cols-3 gap-6 mt-8 mb-8'>
                {
                    instructors.map(item => <Instructor item={item} key={item._id}></Instructor>)
                }

            </div>

        </div>
    );
};

export default Instructors;