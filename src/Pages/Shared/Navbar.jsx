import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/name.png';
const Navbar = () => {
   const navoption = (
      <>
         <li>
            <Link to='/'>Home</Link>
         </li>
         <li>
            <Link to='/about'>About</Link>
         </li>
         <li>
            <Link to='/appoinment'>Appointment</Link>
         </li>
         <li>
            <Link to='/login'>Login</Link>
         </li>
      </>
   );
   return (
      <div>
         <div className='navbar px-8 py-4 fixed z-10 bg-base-200" rounded max-w-screen-xl uppercase text-white'>
            <div className='navbar-start'>
               <img className='p-4  ' src={logo} alt='image' />
               <div className='dropdown '>
                  <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                     <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'>
                        <path
                           strokeLinecap='round'
                           strokeLinejoin='round'
                           strokeWidth='2'
                           d='M4 6h16M4 12h8m-8 6h16'
                        />
                     </svg>
                  </label>
                  <ul
                     tabIndex={0}
                     className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
                     {navoption}
                  </ul>
               </div>
            </div>
            <div className='navbar-end hidden lg:flex'>
               <ul className='menu menu-horizontal px-1'>{navoption}</ul>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
