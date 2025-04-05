import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flx flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            {/* ---- left section------*/}
            <div>
                <img className='mb-5 w-20' src={assets.logo} alt='' />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>

            {/*------- center section------- */}
            <div>
                <p className='text-xl font-medium mb-5 mt-8'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            {/*------- right section------- */}
            <div>
                <p className='text-xl font-medium mb-5 mt-8'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91 9876543211</li>
                    <li>medicare@gmail.com</li>
                </ul>
            </div>
        </div>

        {/*------- Copyright Text------- */}
        <div className="border-t border-gray-200"></div>
        <div>
            <p className='py-5 text:sm text-center'>Copyright 2025@ Medicare - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer