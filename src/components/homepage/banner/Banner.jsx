import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto my-10 px-4 py-10 bg-base rounded-lg text-center flex flex-col gap-5'>
            <h2 className='text-5xl font-bold'>Friends to keep close in your life</h2>
            <p className='text-gray-600'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
             relationships that matter most.</p>
           <button className=' text-white py-2 px-4  bg-[#2f5d4e] flex items-center gap-2 mx-auto'> 
            <FaPlus /> Add a Friend</button>
           </div>
    );
};

export default Banner;