import React from 'react'
import SideTableCard from '../ui/side-table'

function Side() {
  return (
    <div className='wrapper px-4 md:px-20 flex flex-col md:flex-row bg-[#FAF4F4] items-center justify-between'>
      <div className='container'>
        <SideTableCard 
        img='/2..png'
        title='Side Table'
        btnName='View More'
        />
      </div>
      
      <div className='container'>
         <SideTableCard
      img='/3..png'
      title='Side Table'
      btnName='View More'
       /> 
      </div>
  
      
    </div>
  )
}

export default Side
