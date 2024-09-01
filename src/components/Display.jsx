import React from 'react'
import Slider from './Slider'
import Card from './Card'

const Display = () => {
  return (
    <>
    <div className='mt-12 flex flex-col gap-20'>
      <Slider/>
        <h1 className='text-3xl font-bold pl-8'>Medal Worthy Brands To Bag</h1>
    </div>
    <div className='mt-10 flex flex-wrap items-center justify-center'>
        <Card/>
    </div>

    </>
  )
}

export default Display
