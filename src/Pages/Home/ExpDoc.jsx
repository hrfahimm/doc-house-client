import React from 'react';
import { FaBeer, FaLocationArrow, FaRegClosedCaptioning } from 'react-icons/fa';
import location from '../../assets/location.png';
import img1 from '../../assets/our-doc1.png';
import img2 from '../../assets/our-doc2.png';
import img3 from '../../assets/our-doc3.png';

const ExpDoc = () => {
   return (
      <div className='flex  m-auto'>
         <div className='card w-96 glass '>
            <figure className='pt-2'>
               <img src={img1} alt='car!' />
            </figure>
            <div className='card-body'>
               <h2 className='card-title'>Karyen Adnom</h2>
               <p>MBBS Sergary</p>
               <div className='rating pb-8'>
                  <input
                     type='radio'
                     name='rating-4'
                     className='mask mask-star-2 bg-orange-400'
                  />
                  <input
                     type='radio'
                     name='rating-4'
                     className='mask mask-star-2 bg-orange-400'
                  />
                  <input
                     type='radio'
                     name='rating-4'
                     className='mask mask-star-2 bg-orange-400'
                  />
               </div>
               <div className='flex  items-center'>
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     className='h-8 w-8 mr-4 '
                     fill='none'
                     viewBox='0 0 24 24'
                     stroke='currentColor'>
                     <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                     />
                  </svg>
                  <p className='text-slate-400'>Dhaka Noyapolton</p>
               </div>
               <div className='flex  items-center'>
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     className='h-8 w-8 mr-4 '
                     fill='none'
                     viewBox='0 0 24 24'
                     stroke='currentColor'>
                     <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                     />
                  </svg>
                  <p className='text-slate-400'>Avale Avale On mon to fri</p>
               </div>
               <div className='flex  items-center'>
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     className='h-8 w-8 mr-4 '
                     fill='none'
                     viewBox='0 0 24 24'
                     stroke='currentColor'>
                     <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                     />
                  </svg>
                  <p className='text-slate-400'>$467</p>
               </div>
               <button className='btn btn-outline  btn-warning mt-4'>View Profile</button>
            </div>
         </div>
         <div className='card w-96 glass '>
            <figure className='pt-2'>
               <img src={img3} alt='car!' />
            </figure>
            <div className='card-body'>
               <h2 className='card-title'>Karyen Adnom</h2>
               <p>MBBS Sergary</p>
               <div className='rating pb-8'>
                  <input
                     type='radio'
                     name='rating-4'
                     className='mask mask-star-2 bg-orange-400'
                  />
                  <input
                     type='radio'
                     name='rating-4'
                     className='mask mask-star-2 bg-orange-400'
                  />
                  <input
                     type='radio'
                     name='rating-4'
                     className='mask mask-star-2 bg-orange-400'
                  />
               </div>
               <div className='flex  items-center'>
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     className='h-8 w-8 mr-4 '
                     fill='none'
                     viewBox='0 0 24 24'
                     stroke='currentColor'>
                     <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                     />
                  </svg>
                  <p className='text-slate-400'>Dhaka Noyapolton</p>
               </div>
               <div className='flex  items-center'>
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     className='h-8 w-8 mr-4 '
                     fill='none'
                     viewBox='0 0 24 24'
                     stroke='currentColor'>
                     <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                     />
                  </svg>
                  <p className='text-slate-400'>Avale Avale On mon to fri</p>
               </div>
               <div className='flex  items-center'>
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     className='h-8 w-8 mr-4 '
                     fill='none'
                     viewBox='0 0 24 24'
                     stroke='currentColor'>
                     <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                     />
                  </svg>
                  <p className='text-slate-400'>$467</p>
               </div>
               <button className='btn btn-outline  btn-warning mt-4'>View Profile</button>
            </div>
         </div>
         <div className='card w-96 glass '>
            <figure className='pt-2'>
               <img src={img2} alt='car!' />
            </figure>
            <div className='card-body'>
               <h2 className='card-title'>Karyen Adnom</h2>
               <p>MBBS Sergary</p>
               <div className='rating pb-8'>
                  <input
                     type='radio'
                     name='rating-4'
                     className='mask mask-star-2 bg-orange-400'
                  />
                  <input
                     type='radio'
                     name='rating-4'
                     className='mask mask-star-2 bg-orange-400'
                  />
                  <input
                     type='radio'
                     name='rating-4'
                     className='mask mask-star-2 bg-orange-400'
                  />
               </div>
               <div className='flex  items-center'>
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     className='h-8 w-8 mr-4 '
                     fill='none'
                     viewBox='0 0 24 24'
                     stroke='currentColor'>
                     <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                     />
                  </svg>
                  <p className='text-slate-400'>Dhaka Noyapolton</p>
               </div>
               <div className='flex  items-center'>
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     className='h-8 w-8 mr-4 '
                     fill='none'
                     viewBox='0 0 24 24'
                     stroke='currentColor'>
                     <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                     />
                  </svg>
                  <p className='text-slate-400'>Avale Avale On mon to fri</p>
               </div>
               <div className='flex  items-center'>
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     className='h-8 w-8 mr-4 '
                     fill='none'
                     viewBox='0 0 24 24'
                     stroke='currentColor'>
                     <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
                     />
                  </svg>
                  <p className='text-slate-400'>$467</p>
               </div>
               <button className='btn btn-outline  btn-warning mt-4'>View Profile</button>
            </div>
         </div>
      </div>
   );
};

export default ExpDoc;
