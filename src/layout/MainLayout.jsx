import React from 'react';
import  Navbar  from '../component/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer';

const MainLayout = () => {
    return (
        <div>
            <div className='h-5'>
                <Navbar/>
            </div>
            <Outlet/>
            <div>
                <Footer/>
            </div>
            
        </div>
    );
};

export default MainLayout;      