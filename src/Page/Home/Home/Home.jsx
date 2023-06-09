import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../Banner/Banner';
import PopularInstructor from './PopularInstructor/PopularInstructor';
import OtherSection from './OtherSecton/OtherSection';
import PopularClass from './PopularInstructor/PopularClass';




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