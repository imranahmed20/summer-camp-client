import React, { useEffect, useState } from 'react';
import Class from '../class/Class';
import useData from '../../../Hooks/useData';

const PopularClass = () => {
    const [items] = useData()
    console.log(items)
    const cricket = items.filter(item => item.category === "cricket")
    return (
        <div>
            <h1 className='text-center text-5xl font-bold uppercase mt-20'>Our Popular Class</h1>
            <p className='text-xl text-center mt-4'>A group of people sharing the same social, economic, or occupational status. The term class usually implies a social and economic hierarchy, in which those of higher class standing have greater status, privilege, prestige, and authority.</p>

            <div className='grid md:grid-cols-3 g-4'>
                {
                    cricket.map(item => <Class key={item._id} item={item}></Class>)
                }
            </div>

        </div>
    );
};

export default PopularClass;