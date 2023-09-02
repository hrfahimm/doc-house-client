import React from 'react';
import ExpDoc from './ExpDoc';
import SectionTitle from '../Shared/SectionTitle';

const ExpDocS = () => {
   return (
      <div>
         <SectionTitle
            title=' Our Expart Doctors'
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, aliquid commodi
            quas quod ut iste quo laborum. Corporis, dignissimos nulla!'></SectionTitle>

         <div className='flex'>
            <ExpDoc></ExpDoc>
         </div>
      </div>
   );
};

export default ExpDocS;
