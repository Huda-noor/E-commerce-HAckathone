import React from 'react';
import TopPicksCard from '../ui/top-picks';
import UnderlineButton from '../ui/underline-button';

function Top() {
  return (
    <div>
      <div className='wrapper container bg-[#FFFFFF] items-center justify-between'>
        <div className="flex flex-col mt-16 items-center">
          {/* Heading */}
          <h1 className="text-2xl md:text-4xl font-bold text-center">Top Picks For You</h1>
          {/* Paragraph */}
          <p className="text-[#9F9F9F] text-sm md:text-base">
            Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
          <TopPicksCard img="/4..png" description="Trenton modular sofa_3" />
          <TopPicksCard img="/5..png" description="Granite dining table with dining chair" />
          <TopPicksCard img="/6..png" description="Outdoor bar table and stool" />
          <TopPicksCard img="/7..png" description="Plain console with teak mirror" />
        </div>
      </div>
      <div className='flex items-center justify-center mt-10 mb-9'>
        <UnderlineButton>View More</UnderlineButton>
      </div>
    </div>
  );
}

export default Top;

