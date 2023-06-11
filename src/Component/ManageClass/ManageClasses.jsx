import React from 'react';
import useData from '../../Hooks/data/useData';
import Manage from './Manage';
import { Helmet } from 'react-helmet';

const ManageClasses = () => {
    const [items] = useData()
    console.log(items)
    return (
        <>
            <Helmet>
                <title>Sports Academies | Manage Class</title>
            </Helmet>
            <div className='mt-10'>

                <h1 className='text-3xl text-center font-bold'>Total Classes:  {items.length}</h1>
                <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-6 mt-10 mb-8'>
                    {
                        items.map(item => <Manage item={item} key={item._id}></Manage>)
                    }

                </div>
            </div></>
    );
};

export default ManageClasses;