import React from 'react';
import Banner from './Banner';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';
import Exceptional from '../Exceptional/Exceptional';
import MakeAppointment from '../MakeAppoinment/MakeAppoinment';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div>
      <Banner/>
      <InfoCards/>
      <Services/>
      <Exceptional/>
      <MakeAppointment/>
      <ContactUs/>
      <Footer/>
    </div>
  );
};

export default Home;