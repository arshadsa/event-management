import React from 'react';
import JobSection from './components/JobSection';
import Opportunity from './components/Opportunity';
import SectionTitle from '../../components/Shared/SectionTitle';
import InnerBanner from '../../components/Shared/innerBanner/InnerBanner';

const CareerPage = () => {

  return (
    <div className='bg-gray-100'>
      <InnerBanner title='Career' name='Career' />
      <JobSection />
      <Opportunity />
    </div>
  );
};

export default CareerPage;
