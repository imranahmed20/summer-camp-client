import React from 'react';
import { useLoaderData } from 'react-router-dom';

const InstructorDetails = () => {
    const details = useLoaderData()
    console.log(details)
    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
};

export default InstructorDetails;