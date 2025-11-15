import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {GalleryImg} from '../model/gallery'

const Gallery = () => {
  return (
    <div>
     <Navbar/>
    <div className='sm:pt-30 pt-24  h-full sm:px-34 px-6 sm:mb-18 mb-10 '>
      <h1 className='text-center text-[#001746] font-semibold sm:text-4xl text-2xl'>Gallery</h1>
      <div className='sm:mt-8 mt-4   h-full w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6' >
    {GalleryImg.map((url, i) => (
  <img className='w-100 h-60 hover:shadow-lg hover:shadow-gray-500 transition-all' key={i} src={url} alt={`Gallery ${i}`} />
))}
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Gallery