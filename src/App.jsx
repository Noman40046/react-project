import React from 'react';
import Navbar from './component/Navbar';
import Services from './component/Services';
import About from './component/About';
import ContactUs from './component/ContactUs';
import Slidebar from './component/Slidebar';
import Faq from './component/Faq';
import Price from './component/Price';
import Form from './component/Form';
import Progressreport from './component/Progressreport';
import Footer from './component/Footer';



const App = () => {
  return (
    <div>
      <Navbar/>
      <Slidebar/>
      <Services/>
      <About/>
      <ContactUs/>
      <Progressreport/>
      <Faq/>
      <Price/>
      <Form/>
      <Footer/>
     
      
    </div>
  );
};

export default App;