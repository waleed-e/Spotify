import React from 'react';
import { assets } from '../assets/assets';

const Sidebar = () => {
  return (
    <div className='w-74 h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
      <div  className='bg-green-900 h-24 rounded flex flex-col justify-around'>
        <div className='flex items-center gap-3 pl-8 cursor-pointer'>
          <img src={assets.home_icon} alt="Home" className='w-8 h-8' />
          <p className='font-bold'>Home</p>
        </div>
      </div>
      <div className='w-90 bg-green-900 h-96 rounded'>
        <div className='p-4 flex items-center justify-between'>
          <div className="flex items-center gap-3">
            <img src={assets.stack_icon} alt="Library" className='w-8 h-8' />
            <p className='font-semibold'>Your Library</p>
          </div>
          <div className='flex items-center gap-3'>
            <img src={assets.arrow_icon} alt="Arrow" className='w-5 h-5' />
            <img src={assets.plus_icon} alt="Plus" className='w-5 h-5' />
          </div>
        </div>
        <div className='p-4 bg-green-800 m-2 font-semibold flex flex-col
        items-start justify-start gap-1 pl-4'>
            <h1>Create Your Fitst Playlist</h1>
            <p className='font-light'>it's easy we will help you</p>
            <button className='px-4 py-1.5 bg-white text-black rounded-full mt-4'>Create Playlist</button>
        </div>
        <div className='p-4 bg-green-800 m-2 font-semibold flex flex-col
        items-start justify-start gap-1 pl-4 mt-4 '>
            <h1>Let's findsome podcasts to follow</h1>
            <p className='font-light'>we'll keep you update on new episodes</p>
            <button className='px-4 py-1.5 bg-white text-black rounded-full mt-4'>Browse Podcast</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
