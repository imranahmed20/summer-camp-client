import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../Banner/Banner';
import PopularClass from '../popularClass/popularClass';
import PopularInstructor from './PopularInstructor/PopularInstructor';
import OtherSection from './OtherSecton/OtherSection';




const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Martial Art | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <OtherSection></OtherSection>



        </div>
    );
};

export default Home;