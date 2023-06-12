import React from 'react';

import ClassCover from './ClassCover/ClassCover';
import ClassInfo from './ClassInfo/ClassInfo';
import useData from '../../Hooks/data/useData';
import { Helmet } from 'react-helmet';
import useClass from '../../Hooks/useClass/useClass';


const Classes = () => {
    // const [items] = useData()
    const [menu] = useClass()
    return (
        <div>
            <Helmet>
                <title>Sports Academies | Classes</title>
            </Helmet>
            <ClassCover></ClassCover>

            <div className='grid md:grid-cols-3 gap-6 mt-8 mb-8'>
                {
                    menu.map(item => <ClassInfo item={item} key={item._id}></ClassInfo>)
                }

            </div>

        </div>
    );
};

export default Classes;