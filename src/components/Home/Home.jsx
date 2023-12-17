import React from 'react';
import { CoverSlider } from './CoverSlider';
import HomeAbout from '../About/HomeAbout';
import LatestUpdates from '../HomeUpdates.isx/LatestUpdates';
import HomeGallery from '../PhotoGallery/HomeGallery';
import { Contact } from '../Contact/Contact';

export const Home = () => {


  return (
    <>
      <div className='w-full'>
        <CoverSlider />
      </div>
      <div className='flex-1 h-full w-full' style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <HomeAbout />
      </div>
      <LatestUpdates />
      <HomeGallery />
      <Contact />
      {/* <HomeFooter/> */}
    </>
  );
};
