import React from 'react';
import Banner from './components/Banner';
import FlipCard from './components/Card';
import CardList from './components/CardList';
import InnerBanner from '../../components/Shared/innerBanner/InnerBanner';

function Services() {
  return (
    <>
      <InnerBanner title='Our Best Services' name='Services' />
      <div className='bg-gradient-to-r from-gray-200 to-white'>

        <div className="lg:px-20">
          <div className="container mx-auto py-12 px-4">
            <h1 className="mx-auto lg:text-4xl md:text-2xl sm:text-xl font-bold text-gray-700 mb-12 py-4 w-4/12 text-center border-y-2 border-blue-800 ">- <span className='text-blue-800'>How We</span> Help You -</h1>
            <CardList />
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
