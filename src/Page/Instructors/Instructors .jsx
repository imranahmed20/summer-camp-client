import React from 'react';
import useData from '../../Hooks/useData';
import Instructor from './Instructors/Instructor';
import Cover from './cover/Cover';

const Instructors = () => {
    const [items] = useData()
    console.log(items)
    return (
        <div>
            <Cover></Cover>
            <div className='grid md:grid-cols-3 gap-6'>
                {
                    items.map(item => <Instructor item={item} key={item._id}></Instructor>)
                }

            </div>

        </div>
    );
};

export default Instructors;