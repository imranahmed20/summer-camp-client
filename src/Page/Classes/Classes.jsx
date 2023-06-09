import React from 'react';

import ClassCover from './ClassCover/ClassCover';
import ClassInfo from './ClassInfo/ClassInfo';
import useData from '../../Hooks/data/useData';


const Classes = () => {
    const [items] = useData()
    return (
        <div>
            <ClassCover></ClassCover>

            <div className='grid md:grid-cols-3 gap-6'>
                {
                    items.map(item => <ClassInfo item={item} key={item._id}></ClassInfo>)
                }

            </div>

        </div>
    );
};

export default Classes;