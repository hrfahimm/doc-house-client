import img1 from '../../assets/review1.png';
import img2 from '../../assets/review2.png';
import logo from '../../assets/dubble-cot.png';
import SectionTitle from '../Shared/SectionTitle';
const Reviews = () => {
   return (
      <>
         <SectionTitle
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius accusamus
               ipsum facilis magni, Lorem ipsum dolor, sit amet consectetur adipisicing
               elit. Vel, in obcaecati voluptate incidunt facilis tempora velit magnam!
               Tempore perspiciatis cupiditate optio modi dicta ipsa temporibus suscipit
               corrupti quas quibusdam esse.'
            title='Whats Our Paitents Says'></SectionTitle>

         <div className='flex justify-between py-12'>
            <div className='px-16  p-4 w-1/2 '>
               <div className='flex justify-between '>
                  <div className='flex '>
                     <img src={img1} alt='' />
                     <h1 className='text-xl float-left px-4'>
                        Fahim Khan <br />
                        <span className='text-xs'>product desainer</span>
                     </h1>
                  </div>

                  <img src={logo} alt='' />
               </div>
               <div className='py-4'>
                  <p>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, in
                     obcaecati voluptate incidunt facilis tempora velit magnam! Tempore
                     perspiciatis cupiditate optio modi dicta neque, eveniet, architecto
                     dolores maxime illum natus!
                  </p>
               </div>
            </div>
            <div className='px-16  p-4 w-1/2 '>
               <div className='flex justify-between '>
                  <div className='flex '>
                     <img src={img2} alt='' />
                     <h1 className='text-xl float-left px-4'>
                        Fahim Khan <br />
                        <span className='text-xs'>product desainer</span>
                     </h1>
                  </div>

                  <img src={logo} alt='' />
               </div>
               <div className='py-4'>
                  <p>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, in
                     obcaecati voluptate incidunt facilis tempora velit magnam! Tempore
                     perspiciatis cupiditate optio modi dicta neque, eveniet, architecto
                     dolores maxime illum natus!
                  </p>
               </div>
            </div>
         </div>
      </>
   );
};

export default Reviews;
