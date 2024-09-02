import React from 'react'
import appstore from '../assets/images/appstore.png'
import googleplay from '../assets/images/googleplay.png'

const Footer = () => {
  return (
    <>
     <div className='flex item-center justify-center w-full gap-40'>
     <div>
        <ul>
            <p>ONLINE SHOOPING</p>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Living</li>
            <li>Beauty</li>
            <li>Gift Card</li>
            <li>Myntra Insider</li>
        </ul>
     </div>
     <div>
        <ul>
            <p>CUSTOMER POLICIES</p>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>T&C</li>
            <li>Terms of use</li>
            <li>Track Order</li>
            <li>Shipping</li>
            <li>Cancellation</li>
        </ul>
     </div>
     <div>
        <p>EXPERIENCE MYNTRA APP ON MOBILE</p>
        <div className='flex gap-4'>

        <img src={googleplay} alt="" className='w-32' />
        <img src={appstore} alt="" className='w-32' />
        </div>
    
     </div>
     </div> 
    </>
  )
}

export default Footer
