import React from 'react';
import Slidebar from './Slidebar';
import Services from './Services';
import About from './About';
import Price from './Price';
import Faq from './Faq';
import Form  from './Form';
import ContactUs from './ContactUs';
import Progressreport from './Progressreport';

const Home = () => {
    return (
        <div>
            <div>
                <Slidebar/>
                <Services/>
                <About/>
                <Price/>
                <Faq/>
                <ContactUs/>
                <Progressreport/>
                <Form/>
            </div>
            
        </div>
    );
};

export default Home;