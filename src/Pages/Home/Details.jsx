import React from 'react';
import clock from '../../assets/clock.png';
import call from '../../assets/call.png';
import location from '../../assets/location.png';
import background from '../../assets/homr-bg.png';

const Details = () => {
   return (
      <div>
         <footer className='footer p-8 flex text-white '>
            <div
               className='w-1/3 h-56 flex rounded-2xl items-center p-6'
               style={{
                  backgroundImage: `url(${background})`,
               }}>
               <div className='pr-4'>
                  <img className='w-20' src={clock} alt='' />
               </div>
               <div>
                  <h1 className='text-lg font-bold py-2'>Opening Houre</h1>
                  <p className=''>Providing joske jsu reliable tech since 1992</p>
               </div>
            </div>
            <div className='w-1/3 h-56 flex rounded-2xl items-center p-6 bg-gradient-to-r from-orange-300 to-orange-300'>
               <div className='pr-4'>
                  <img className='w-20' src={location} alt='' />
               </div>
               <div>
                  <h1 className='text-lg font-bold py-2'> Location </h1>
                  <p className=''>Providing joske jsu reliable tech since 1992</p>
               </div>
            </div>
            <div
               className='w-1/3 h-56 flex rounded-2xl items-center p-6'
               style={{
                  backgroundImage: `url(${background})`,
               }}>
               <div className='pr-4'>
                  <img className='w-16]' src={call} alt='' />
               </div>
               <div>
                  <h1 className='text-lg font-bold py-2'> Contact Us</h1>
                  <p className=''>+880 17873903</p>
                  <p className=''>+880 17873903</p>
               </div>
            </div>
         </footer>
      </div>
   );
};

export default Details;
