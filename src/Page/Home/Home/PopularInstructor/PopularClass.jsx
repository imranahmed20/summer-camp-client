import React, { useEffect, useState } from 'react';
import StudentClass from '../../class/StudentClass';
import { motion } from "framer-motion"

const PopularClass = () => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('https://summer-camp-server-delta.vercel.app/class')
            .then(res => res.json())
            .then(data => {
                const footballs = data.filter(data => data.category === "cricket")
                setClasses(footballs)

            })
    }, [])
    return (
        <div >

            <motion.div animate={{ y: 10, scale: 1 }} initial={{ scale: 0 }}>
                <h1 className='text-center text-5xl font-bold uppercase mt-20'>Popular Class</h1>
                <p className='text-xl text-center mt-4'>A group of people sharing the same social, economic, or occupational status. The term class usually implies a social and economic hierarchy, in which those of higher class standing have greater status, privilege, prestige, and authority.</p>
            </motion.div>

            <div className='grid md:grid-cols-3 mt-10   gap-6'>
                {
                    classes.map(item => <StudentClass key={item._id} item={item}></StudentClass>)
                }
            </div>

        </div>
    );
};

export default PopularClass;