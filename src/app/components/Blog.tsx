import React from 'react'
import BlogCard from '../ui/blog-card'

function Blog() {
  return (
    <div className='wrapper flex flex-col md:flex-row items-center justify-between bg-[#FFFFFF] px-4 md:px-16 py-16'>
      <div>
        <BlogCard
        img='/9..jpg'
        title='Going all-in with millennial design'
        btnName='Read More'
        />
      </div>
      <div>
        <BlogCard
        img='/10..jpg'
        title='Going all-in with millennial design'
        btnName='Read More'/>
      </div>
      <div>
        <BlogCard
        img='/11..jpg'
        title='Going all-in with millennial design'
        btnName='Read More' />
      </div>
    </div>
  )
}

export default Blog
