import React from 'react';
import Navbar from '../Share/Navbar/Navbar';
import Footer from '../Share/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1>This is main</h1>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;