import React from 'react';
import useData from '../../Hooks/data/useData';
import Manage from './Manage';

const ManageClasses = () => {
    const [items] = useData()
    console.log(items)
    return (
        <div>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-6 mt-8 mb-8'>
                {
                    items.map(item => <Manage item={item} key={item._id}></Manage>)
                }

            </div>
        </div>
    );
};

export default ManageClasses;