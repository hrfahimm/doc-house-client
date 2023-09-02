import React from 'react';
import Banner from './Banner';
import HService from './HService';
import Details from './Details';
import Reviews from './Reviews';
import ExpDocS from './ExpDocS';
import ContactFrom from './ContactFrom';

const Home = () => {
   return (
      <div>
         <Banner />
         <HService />
         <Details />
         <Reviews />
         <ExpDocS />
         <ContactFrom />
      </div>
   );
};

export default Home;
