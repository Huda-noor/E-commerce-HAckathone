import React from 'react'
import TopPicksCard from '../ui/top-picks'
import UnderlineButton from '../ui/underline-button'

function Top() {
  return (
<div>
      <div className='wrapper container flex bg-[#FFFFFF] items-center justify-between'>
      <div >
        <TopPicksCard 
        img='/4..png'/>
      </div>
      <div>
        <TopPicksCard
        img='/5..png'/>
      </div>
      <div>
        <TopPicksCard 
        img='/6..png'/>
      </div>
      <div>
        <TopPicksCard 
        img='/7..png'/>
      </div>
    </div>
    <div className='flex items-center justify-center mt-10'>
    <UnderlineButton>View More</UnderlineButton>
    </div>
    </div>
  )
}

export default Top
