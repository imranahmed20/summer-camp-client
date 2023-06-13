import React from 'react';
import { Helmet } from 'react-helmet';
import Enroll from './Enroll';
import useAddClass from '../../Hooks/useAddClass/useAddClass';



const MyEnrollClass = () => {
    const [items] = useAddClass()
    return (
        <>
            <Helmet>
                <title>Sports Academies |My  Class</title>
            </Helmet>
            <div className='mt-10'>

                <h1 className='text-3xl text-center font-bold'>My All Class </h1>
                <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-6 mt-10 mb-8'>
                    {
                        items.map(item => <Enroll item={item} key={item._id}></Enroll>)
                    }

                </div>
            </div></>
    );
};

export default MyEnrollClass;