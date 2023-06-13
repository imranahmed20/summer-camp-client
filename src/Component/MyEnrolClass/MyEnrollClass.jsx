import React from 'react';
import useData from '../../Hooks/data/useData';
import { Helmet } from 'react-helmet';
import Enroll from './Enroll';
import useCreate from '../../Hooks/create';

const MyEnrollClass = () => {
    const [items] = useCreate()
    return (
        <>
            <Helmet>
                <title>Sports Academies |My  Class</title>
            </Helmet>
            <div className='mt-10'>

                <h1 className='text-3xl text-center font-bold'>My Class</h1>
                <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-6 mt-10 mb-8'>
                    {
                        items.map(item => <Enroll item={item} key={item._id}></Enroll>)
                    }

                </div>
            </div></>
    );
};

export default MyEnrollClass;