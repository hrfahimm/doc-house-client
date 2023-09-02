import React from 'react';
import Buttom from '../../Components/Buttom';
import bannerImg from '../../assets/bannerimg.png';
import background from '../../assets/homr-bg.png';
const Banner = () => {
   return (
      <>
         <div
            className='hero h-[900px]    p-12 bg-cover text-white '
            style={{
               backgroundImage: `url(${background})`,
            }}>
            <div className='hero-content flex-col lg:flex-row-reverse'>
               <img src={bannerImg} className='max-w-sm rounded-lg shadow-2xl' />
               <div className='p-12'>
                  <h1 className='text-5xl font-bold'>Your Best Medical Help Center</h1>
                  <p className='py-6'>
                     Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                     excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
                     a id nisi.
                  </p>
                  <Buttom text={'All Service'}></Buttom>
               </div>
            </div>
         </div>
      </>
   );
};

export default Banner;
