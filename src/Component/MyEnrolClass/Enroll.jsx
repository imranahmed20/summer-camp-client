import React from 'react';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
const Enroll = ({ item }) => {
    const { _id, name, image, email, numberOfClass } = item;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <motion.div animate={{ y: 10 }}
                transition={{ ease: "easeOut", duration: 2 }} className="card-body">
                <h2 className="card-title">Instructor Name: {name}</h2>
                <h2 className="card-title">Email: {email}</h2>
                <div className="card-actions justify-end">
                    <Link className='w-full' > <button className="btn btn-primary w-full mt-5">See classes</button></Link>
                </div>
            </motion.div>
        </div >
    );
};

export default Enroll;