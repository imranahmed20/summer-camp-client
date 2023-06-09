import React from 'react';
import useData from '../../Hooks/useData';
import ClassCover from './ClassCover/ClassCover';
import ClassInfo from './ClassInfo/ClassInfo';


const Classes = () => {
    const [items] = useData()
    console.log(items)
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