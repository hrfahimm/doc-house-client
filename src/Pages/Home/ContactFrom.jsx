import { useForm } from 'react-hook-form';
import background from '../../assets/homr-bg.png';
const ContactFrom = () => {
   const { register, handleSubmit } = useForm();
   const onSubmit = (data) => console.log(data);
   return (
      <div className='mt-12'>
         <div
            className='hero flex h-[700px]  text-white rounded-xl '
            style={{
               backgroundImage: `url(${background})`,
            }}>
            <div className='hero-content flex-col justify-around   lg:flex-row'>
               <div className='text-center  w-1/3 lg:text-left'>
                  <h1 className='text-5xl font-bold'>Contacts With US</h1>
                  <p className='py-6'>
                     Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                     excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
                     a id nisi.
                  </p>
                  <div className='flex mt-10 items-center'>
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
                     <p className='text-slate-400'>+880 17328393</p>
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
                     <p className='text-slate-400'>+880 17328393</p>
                  </div>
               </div>
               <div className='card flex-shrink-0 '>
                  <div className='flex gap-8 mb-8'>
                     <div className='form-control'>
                        <input
                           type='text'
                           name='name'
                           {...register('name', { required: true })}
                           placeholder='Name'
                           className='input input-ghost  input-lg text-xl'
                        />
                     </div>

                     <div className='form-control '>
                        <input
                           type='email'
                           name='email'
                           {...register('email', { required: true })}
                           placeholder='Email'
                           className='input input-ghost  input-lg text-xl'
                        />
                     </div>
                  </div>
                  <div className='flex gap-8 mb-8 '>
                     <div className='form-control'>
                        <input
                           type='number'
                           name='number'
                           {...register('number', { required: true })}
                           placeholder='Mobile'
                           className='input input-ghost input-lg text-xl'
                        />
                     </div>

                     <div className='form-control  '>
                        <input
                           type='text'
                           name='docname'
                           {...register('docname', { required: true })}
                           placeholder='Doctor Name'
                           className='input input-ghost  input-lg text-xl '
                        />
                     </div>
                  </div>
                  <div className='flex gap-8  mb-8'>
                     <div className='form-control  m-auto w-72 '>
                        <input
                           type='date'
                           name='date'
                           {...register('date', {
                              required: true,
                           })}
                           placeholder='Date'
                           className='input input-ghost  input-lg text-xl'
                        />
                     </div>

                     <div className='form-control m-auto w-72 '>
                        <input
                           type='time'
                           name='time'
                           {...register('time', { required: true })}
                           placeholder='Time'
                           className='input input-ghost input-lg text-xl'
                        />
                     </div>
                  </div>

                  <div className='form-control mt-6'>
                     <input
                        className='btn input-lg text-xl bg-orange-400 outline-0 border-0 text-white'
                        type='submit'
                        value='Book Now'
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ContactFrom;

<input
   type='text'
   placeholder='Type here'
   className='input input-ghost w-full max-w-xs'
/>;
