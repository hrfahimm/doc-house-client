import React from 'react';

const SectionTitle = ({ title, text }) => {
   return (
      <div>
         <div className='text-center p-16 pb-20'>
            <h1 className='text-4xl p-4 font-bold'>{title}</h1>
            <p className=' font-medium px-12'>{text}</p>
         </div>
      </div>
   );
};

export default SectionTitle;
