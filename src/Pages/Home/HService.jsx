import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import sdoc from '../../assets/service-doc.png';
import cavity from '../../assets/teeth.png';
import Buttom from '../../Components/Buttom';
const HService = () => {
   return (
      <div className='py-8 '>
         <div className='grid  grid-cols-2 item-center gap-4'>
            <div className='m-auto'>
               <img className='max-w-sm rounded-lg shadow-2xl' src={sdoc} alt='' />
            </div>
            <div>
               <div>
                  <h1 className='text-2xl '>Our Service</h1>
                  <p className='py-4'>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
                     dolorem doloremque blanditiis quod sunt obcaecati consequuntur
                     exercitationem ut distinctio consequatur!
                  </p>
               </div>
               <div>
                  <Tabs>
                     <TabList className='items-center  py-4 text-lg font-bold'>
                        <Tab>Cavity ProtecTion</Tab>
                        <Tab> Cosmetic Dentisty</Tab>
                        <Tab>Oral Surgary</Tab>
                     </TabList>
                     <TabPanel>
                        <img src={cavity} alt='' />
                        <h1 className='text-xl font-bold py-4'>
                           {' '}
                           Electro Gastrology Therapy{' '}
                        </h1>
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                           cumque rerum quibusdam quaerat totam deleniti, voluptatum
                           quisquam dolorum sunt molestiae.
                        </p>
                        <p className='py-4'>
                           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
                           illum?
                        </p>
                        <Buttom text={'More Details'} />
                     </TabPanel>
                     <TabPanel>
                        <img src={cavity} alt='' />
                        <h1 className='text-xl font-bold py-4'> Cosmetic Dentisty</h1>
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                           cumque rerum quibusdam quaerat totam deleniti, voluptatum
                           quisquam dolorum sunt molestiae.
                        </p>
                        <p className='py-4'>
                           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
                           illum?
                        </p>
                        <Buttom text={'More Details'} />
                     </TabPanel>
                     <TabPanel>
                        <img src={cavity} alt='' />
                        <h1 className='text-xl font-bold py-4'> Oral Surgary</h1>
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                           cumque rerum quibusdam quaerat totam deleniti, voluptatum
                           quisquam dolorum sunt molestiae.
                        </p>
                        <p className='py-4 '>
                           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
                           illum?
                        </p>
                        <Buttom text={'More Details'} />
                     </TabPanel>
                  </Tabs>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HService;
