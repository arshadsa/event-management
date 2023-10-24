import React from 'react';
import eventBanner from '../../../assets/banner/EventManagement.jpg';

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
      <img src={eventBanner} className='w-full' alt="" />
    </div>
  );
};

export default Banner;
