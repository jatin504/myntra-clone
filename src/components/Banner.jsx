import React from 'react'
import Bannerimg from '../assets/images/banner.webp'

const Banner = () => {
  return (
    <>
    <div className='width-full px-4 mt-4 mb-4'>
      <img src={Bannerimg} alt="" className='rounded-2xl' />
    </div>
    </>
  )
}

export default Banner
