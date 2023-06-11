import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../assets/banner-6.jpg'
import banner2 from '../../../assets/banner-7.jpg'
import banner3 from '../../../assets/banner-4.jpg'


const Banner = () => {
    return (
        <>
            <Carousel>
                <div className='grid md:grid-cols-2 gap-5 mt-20'>
                    <img className='rounded-lg' src={banner2} />
                    <div>
                        <h1 className='text-7xl font-bold text-red-600 mt-5'>Hello Children
                            <span className='text-orange-600 text-6xl font-bold'> Summer Camp</span> </h1>
                        <p className='mt-5 text-xl'>This is a challenging, enjoyable and affordable opportunity to develop competence and to strive for excellence in the field of athletics. The Flintridge Sacred Heart summer sports program is open to girls, age 6-12 years. Previous athletic knowledge and experience are not necessary to attend! Teamwork, sportsmanship and fair play are fundamental to the philosophy that guides the program.</p>
                        <button className="btn btn-outline btn-secondary mt-5">See More</button>
                    </div>

                </div>
                <div className='grid md:grid-cols-2 gap-5 mt-20'>
                    <img className='rounded-lg' src={banner1} />

                    <div>
                        <h1 className='text-6xl font-bold text-orange-6000 mt-5'>Welcome To Our
                            <span className='text-orange-600'> Sport Summer Camp</span> </h1>
                        <p className='mt-5 text-xl'>This is a challenging, enjoyable and affordable opportunity to develop competence and to strive for excellence in the field of athletics. The Flintridge Sacred Heart summer sports program is open to girls, age 6-12 years. Previous athletic knowledge and experience are not necessary to attend! Teamwork, sportsmanship and fair play are fundamental to the philosophy that guides the program.</p>
                        <button className="btn btn-outline btn-secondary mt-5">See More</button>
                    </div>

                </div>
                <div className='grid md:grid-cols-2 gap-5 mt-20'>
                    <img className='rounded-lg' src={banner3} />
                    <div>
                        <h1 className='text-7xl font-bold text-red-600 mt-5'>Hello Children
                            <span className='text-orange-600 text-6xl font-bold'> Summer Camp</span> </h1>
                        <p className='mt-5 text-xl'>This is a challenging, enjoyable and affordable opportunity to develop competence and to strive for excellence in the field of athletics. The Flintridge Sacred Heart summer sports program is open to girls, age 6-12 years. Previous athletic knowledge and experience are not necessary to attend! Teamwork, sportsmanship and fair play are fundamental to the philosophy that guides the program.</p>
                        <button className="btn font-semibold btn-outline btn-secondary mt-5">See More</button>
                    </div>

                </div>
            </Carousel>

        </>
    );
};

export default Banner;